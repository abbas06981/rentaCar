import classNames from 'classnames'
import Modal from 'react-modal'
import CloseButton from '../CloseButton'
import { motion } from 'framer-motion'
import type ReactModal from 'react-modal'
import type { MouseEvent, ReactNode } from 'react'

export interface DrawerModalProps extends ReactModal.Props {
    bodyClass?: string
    closable?: boolean
    footer?: string | ReactNode
    footerClass?: string
    headerClass?: string
    height?: string | number
    maxHeight?: string | number
    marginTop?: string | number
    lockScroll?: boolean
    onClose?: (e: MouseEvent<HTMLSpanElement>) => void
    placement?: 'top' | 'right' | 'bottom' | 'left'
    showBackdrop?: boolean
    title?: string | ReactNode
    width?: string | number
}

const DrawerModal = (props: DrawerModalProps) => {
    const {
        bodyOpenClassName,
        bodyClass,
        children,
        className,
        closable = true,
        closeTimeoutMS = 300,
        footer,
        footerClass,
        headerClass,
        height = 400,
        maxHeight = '80vh',
        marginTop = '5%',
        isOpen,
        lockScroll = true,
        onClose,
        overlayClassName,
        placement = 'right',
        portalClassName,
        showBackdrop = true,
        title,
        width = 400,
        ...rest
    } = props

    const onCloseClick = (e: MouseEvent<HTMLSpanElement>) => {
        onClose?.(e)
    }

    const renderCloseButton = <CloseButton onClick={onCloseClick} />

    const getStyle = (): {
        dimensionClass?: string
        contentStyle?: {
            width?: string | number
            height?: string | number
            maxHeight?: string | number
            marginTop?: string | number
        }
        motionStyle: {
            [x: string]: string
        }
    } => {
        if (placement === 'left' || placement === 'right') {
            return {
                dimensionClass: 'vertical',
                contentStyle: { width, maxHeight, marginTop },
                motionStyle: {
                    [placement]: `-${width}${
                        typeof width === 'number' ? 'px' : ''
                    }`,
                },
            }
        }

        if (placement === 'top' || placement === 'bottom') {
            return {
                dimensionClass: 'horizontal',
                contentStyle: { height, maxHeight, marginTop },
                motionStyle: {
                    [placement]: `-${height}${
                        typeof height === 'number' ? 'px' : ''
                    }`,
                },
            }
        }

        return {
            motionStyle: {},
        }
    }

    const { dimensionClass, contentStyle, motionStyle } = getStyle()

    return (
        <Modal
            className={{
                base: classNames('drawer', className as string),
                afterOpen: 'drawer-after-open',
                beforeClose: 'drawer-before-close',
            }}
            overlayClassName={{
                base: classNames(
                    'drawer-overlay',
                    overlayClassName as string,
                    !showBackdrop && 'bg-transparent',
                ),
                afterOpen: 'drawer-overlay-after-open',
                beforeClose: 'drawer-overlay-before-close',
            }}
            portalClassName={classNames('drawer-portal', portalClassName)}
            bodyOpenClassName={classNames(
                'drawer-open',
                lockScroll && 'drawer-lock-scroll',
                bodyOpenClassName,
            )}
            ariaHideApp={false}
            isOpen={isOpen}
            closeTimeoutMS={closeTimeoutMS}
            {...rest}
        >
            <motion.div
                className={classNames(
                    'drawer-content rounded-l-lg',
                    dimensionClass,
                )}
                style={contentStyle}
                initial={motionStyle}
                animate={{
                    [placement as 'top' | 'right' | 'bottom' | 'left']: isOpen
                        ? 0
                        : motionStyle[placement],
                }}
            >
                <div
                    onClick={onClose}
                    className="absolute top-[40%] rounded-r-md bg-teal-500 w-[10px] h-32 cursor-pointer"
                ></div>

                <div
                    className={classNames('drawer-body', bodyClass)}
                    style={{ overflowY: 'auto' }}
                >
                    {children}
                </div>
            </motion.div>
        </Modal>
    )
}

DrawerModal.displayName = 'DrawerModal'

export default DrawerModal
