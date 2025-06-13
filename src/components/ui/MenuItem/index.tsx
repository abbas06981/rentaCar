import { forwardRef, useState, MouseEvent, ElementType } from 'react'
import classNames from 'classnames'
import type { CommonProps, TypeAttributes } from '../@types/common'

export interface MenuItemProps extends CommonProps {
    asElement?: ElementType
    id?: string
    disabled?: boolean
    eventKey?: string
    isActive?: boolean
    menuItemHeight?: string | number
    onSelect?: (eventKey: string, e: MouseEvent) => void
    variant?: TypeAttributes.MenuVariant
    enableEffects?: boolean // New prop to enable effects
}

// Function to get a random light gradient
const getRandomLightGradient = () => {
    const randomColor = () => {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        // Create a light color by averaging with a light color (e.g., 200)
        return `rgb(${Math.min(255, r + 200)}, ${Math.min(255, g + 200)}, ${Math.min(255, b + 200)})`
    }

    return `linear-gradient(135deg, ${randomColor()}, ${randomColor()})`
}

const MenuItem = forwardRef<HTMLElement, MenuItemProps>((props, ref) => {
    const {
        asElement: Component = 'div',
        children,
        className,
        disabled,
        eventKey,
        isActive,
        menuItemHeight = 35,
        onSelect,
        style,
        variant = 'light',
        enableEffects = false, // Default to false
        ...rest
    } = props

    const [rotation, setRotation] = useState({ x: 0, y: 0 })
    const [gradient, setGradient] = useState('') // Default gradient
    const [shadow, setShadow] = useState('') // Default shadow

    const menuItemActiveClass = `text-white bg-primaryColor`
    const menuItemHoverClass = `menu-item-hoverable`
    const disabledClass = 'menu-item-disabled'
    const menuItemClass = classNames(
        'menu-item',
        `menu-item-${variant}`,
        isActive && menuItemActiveClass,
        disabled && disabledClass,
        !isActive && menuItemHoverClass,
        className,
    )

    const handleMouseMove = (e: MouseEvent) => {
        if (enableEffects) {
            // Apply effects only if enabled
            const item = e.currentTarget.getBoundingClientRect()
            const x = e.clientX - item.left - item.width / 2
            const y = e.clientY - item.top - item.height / 2

            const vibration =
                Math.abs(x) < 10 && Math.abs(y) < 10
                    ? Math.random() * 3 - 1.5
                    : 0

            setRotation({
                x: (y / item.height) * 30 + vibration,
                y: -(x / item.width) * 30 + vibration,
            })
        }
    }

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 })
        setGradient('') // Reset gradient on mouse leave
        setShadow('') // Reset shadow on mouse leave
    }

    const handleMouseEnter = () => {
        if (!isActive && enableEffects) {
            setGradient(getRandomLightGradient()) // Set a new random light gradient
            setShadow('shadow-2xl') // Set a larger shadow on hover
        }
    }

    const hanldeOnClick = (e: MouseEvent) => {
        if (onSelect) {
            onSelect(eventKey as string, e)
        }
    }

    return (
        <Component
            ref={ref}
            className={menuItemClass}
            style={{
                height: `${menuItemHeight}px`,
                ...style,
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition:
                    'transform 0.1s ease, background 0.3s ease, box-shadow 0.3s ease',
                background: isActive ? '' : gradient,
                boxShadow: isActive ? 'none' : shadow,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={hanldeOnClick}
            {...rest}
        >
            {children}
        </Component>
    )
})

MenuItem.displayName = 'BaseMenuItem'

export default MenuItem
