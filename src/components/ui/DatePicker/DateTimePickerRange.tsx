import { useState, useRef, forwardRef } from 'react'
import dayjs from 'dayjs'
import useControllableState from '../hooks/useControllableState'
import useMergedRef from '../hooks/useMergeRef'
import capitalize from '../utils/capitalize'
import RangeCalendar from './RangeCalendar'
import BasePicker from './BasePicker'
import TimeInput from '../TimeInput/TimeInput'
import Button from '../Button/Button'
import type { CommonProps } from '../@types/common'
import type { CalendarSharedProps } from './CalendarBase'
import type { BasePickerSharedProps } from './BasePicker'

export type DatePickerRangeValue = [Date | null, Date | null]

export interface DatePickerRangeProps
    extends CommonProps,
        Omit<
            CalendarSharedProps,
            | 'onMonthChange'
            | 'onChange'
            | 'isDateInRange'
            | 'isDateFirstInRange'
            | 'isDateLastInRange'
            | 'month'
        >,
        BasePickerSharedProps {
    closePickerOnChange?: boolean
    defaultOpen?: boolean
    defaultValue?: DatePickerRangeValue
    inputFormat?: string
    separator?: string
    onChange?: (value: DatePickerRangeValue) => void
    onApply?: (value: DatePickerRangeValue) => void
    openPickerOnClear?: boolean
    singleDate?: boolean
    value?: DatePickerRangeValue
    amPm?: boolean
    id?:string
}

const validationRule = (val: any) =>
    Array.isArray(val) &&
    val.length === 2 &&
    val.every((v) => v instanceof Date)

const isFirstDateSet = (val: any) =>
    Array.isArray(val) && val.length === 2 && val[0] instanceof Date

const DateTimePickerRange = forwardRef<HTMLInputElement, DatePickerRangeProps>(
    (props, ref) => {
        const { 
            className,
            clearable = true,
            clearButton,
            closePickerOnChange = true,
            dateViewCount = 1,
            dayClassName,
            dayStyle,
            defaultMonth,
            defaultOpen = false,
            defaultValue,
            defaultView,
            disabled,
            disableDate,
            enableHeaderLabel,
            disableOutOfMonth,
            firstDayOfWeek = 'monday',
            hideOutOfMonthDates,
            hideWeekdays,
            inputFormat,
            inputPrefix,
            inputSuffix,
            labelFormat = {
                month: 'MMM',
                year: 'YYYY',
            },
            separator = '~',
            maxDate,
            minDate,
            onChange,
            onApply,
            onDropdownClose,
            onDropdownOpen,
            openPickerOnClear = false,
            renderDay,
            singleDate = false,
            size,
            style,
            value,
            weekendDays,
            yearLabelFormat,
            amPm = true,
            id,
            ...rest
        } = props

        const dateFormat = inputFormat || 'YYYY-MM-DD'
        const timeFormat = amPm ? 'hh:mm a' : 'HH:mm'

        const [dropdownOpened, setDropdownOpened] = useState(defaultOpen)

        const inputRef = useRef<HTMLInputElement>(null)

        const [_value, setValue] = useControllableState<
            [Date | null, Date | null]
        >({
            prop: value,
            defaultProp:
                defaultValue !== undefined ? defaultValue : [null, null],
            onChange,
        })

        const handleValueChange = (range: [Date, Date]) => {
            const currentValue = _value ?? [null, null]

            if (currentValue[0] && range[0]) {
                range[0].setHours(
                    currentValue[0].getHours(),
                    currentValue[0].getMinutes(),
                    currentValue[0].getSeconds(),
                    currentValue[0].getMilliseconds(),
                )
            }

            if (currentValue[1] && range[1]) {
                range[1].setHours(
                    currentValue[1].getHours(),
                    currentValue[1].getMinutes(),
                    currentValue[1].getSeconds(),
                    currentValue[1].getMilliseconds(),
                )
            }

            setValue(range)
            if (closePickerOnChange && validationRule(range)) {
                setDropdownOpened(true)
                onDropdownClose?.()
                window.setTimeout(() => inputRef.current?.focus(), 0)
            }
        }

        const handleTimeChange = (index: 0 | 1, time: Date | null) => {
            const currentValue = _value ?? [null, null]
            if (currentValue[index] && time instanceof Date) {
                const newDateTime = new Date(
                    currentValue[index]!.getFullYear(),
                    currentValue[index]!.getMonth(),
                    currentValue[index]!.getDate(),
                    time.getHours(),
                    time.getMinutes(),
                    time.getSeconds(),
                    time.getMilliseconds(),
                )
                const newValue = [...currentValue] as [Date | null, Date | null]
                newValue[index] = newDateTime
                setValue(newValue)
                if (closePickerOnChange && validationRule(newValue)) {
                    onDropdownClose?.()
                }
            }
        }

        const valueValid = validationRule(_value)
        const firstValueValid = isFirstDateSet(_value)

        const firstDateLabel = _value?.[0]
            ? capitalize(dayjs(_value[0]).format(`${dateFormat} ${timeFormat}`))
            : ''

        const secondDateLabel = _value?.[1]
            ? capitalize(dayjs(_value[1]).format(`${dateFormat} ${timeFormat}`))
            : ''

        const handleClear = () => {
            const currenStarttDate = new Date()

            // Clone the start date for the end date
            const currentEndDate = new Date(currenStarttDate)

            // Add 1 hour to the end date
            currentEndDate.setHours(currentEndDate.getHours() + 1)

            const clearedRange: DatePickerRangeValue = [
                currenStarttDate,
                currentEndDate,
            ]

            setValue(clearedRange)

            if (onChange) {
                onChange(clearedRange)
            }

            if (onApply) {
                onApply(clearedRange)
            }

            openPickerOnClear && onDropdownOpen?.()
            inputRef.current?.focus()
        }

        const handleDropdownToggle = (isOpened: boolean) => {
            if (!isOpened && firstValueValid && _value?.[1] === null) {
                handleClear()
            }
            setDropdownOpened(isOpened)
        }

        const handleApply = () => {
            if (onApply && _value) {
                onApply(_value as [Date | null, Date | null])
            }
            setDropdownOpened(false)
        }

        return (
            <BasePicker
                id={id}
                ref={useMergedRef(ref, inputRef)}
                dropdownOpened={dropdownOpened as boolean}
                setDropdownOpened={handleDropdownToggle}
                size={size}
                style={style}
                className={className}
                inputLabel={
                    firstValueValid
                        ? `${firstDateLabel} ${separator} ${secondDateLabel}`
                        : ''
                }
                clearable={clearable && firstValueValid}
                clearButton={clearButton}
                disabled={disabled}
                inputPrefix={inputPrefix}
                inputSuffix={inputSuffix}
                onClear={handleClear}
                onDropdownClose={onDropdownClose}
                onDropdownOpen={onDropdownOpen}
                {...rest}
            >
                <RangeCalendar
                    defaultMonth={
                        (valueValid ? _value?.[0] : defaultMonth) as Date
                    }
                    value={_value as [Date | null, Date | null]}
                    labelFormat={labelFormat}
                    dayClassName={dayClassName}
                    dayStyle={dayStyle}
                    disableOutOfMonth={disableOutOfMonth}
                    minDate={minDate}
                    maxDate={maxDate}
                    disableDate={disableDate}
                    firstDayOfWeek={firstDayOfWeek}
                    enableHeaderLabel={enableHeaderLabel}
                    singleDate={singleDate}
                    dateViewCount={dateViewCount}
                    defaultView={defaultView}
                    hideOutOfMonthDates={hideOutOfMonthDates}
                    hideWeekdays={hideWeekdays}
                    renderDay={renderDay}
                    weekendDays={weekendDays}
                    yearLabelFormat={yearLabelFormat}
                    onChange={(date) => handleValueChange(date as [Date, Date])}
                />
                <div className="flex items-center gap-4 mt-4">
                    <TimeInput
                        disabled={!_value?.[0]}
                        value={_value?.[0] ?? null}
                        format={amPm ? '12' : '24'}
                        clearable={false}
                        size="sm"
                        suffix={''}
                        onChange={(time) => handleTimeChange(0, time)}
                    />
                    <TimeInput
                        disabled={!_value?.[1]}
                        value={_value?.[1] ?? null}
                        format={amPm ? '12' : '24'}
                        clearable={false}
                        size="sm"
                        suffix={''}
                        onChange={(time) => handleTimeChange(1, time)}
                    />
                    <Button
                        size="sm"
                        disabled={!_value?.[0] && !_value?.[1]}
                        onClick={handleApply}
                    >
                        {'Apply'}
                    </Button>
                </div>
            </BasePicker>
        )
    },
)

DateTimePickerRange.displayName = 'DateTimePickerRange'

export default DateTimePickerRange
