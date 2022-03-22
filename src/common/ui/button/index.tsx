import classNames from 'classnames'
import { ButtonHTMLAttributes } from 'react'

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    border?: 'border' | 'border-2' | 'border-4' | 'border-8'
    rounded?: 'rounded-sm' | 'rounded' | 'rounded-lg' | 'rounded-full'
    padding?: 'p-px' | 'p-1' | 'p-2' | 'p-3' | 'p-4' | 'p-6' | 'p-8'
    shadow?: 'shadow-inner' | 'shadow' | 'shadow-lg' | 'shadow-md'
    bg_color?: string
    text_color?: string
    active?: boolean
    block?: boolean
    classPrefix?: string
    className?: string
    type?: 'a' | 'button' | 'submit'
    disabled?: boolean
    children?: React.ReactNode
    // href?: string
}

const Button = (props: Props) => {
    const {
        border,
        rounded = 'rounded-sm',
        padding,
        shadow,
        active,
        block,
        bg_color = 'bg-primary',
        text_color,
        classPrefix,
        className,
        type = 'button',
        disabled,
        children,
        // href,
    } = props

    const classes = classNames(
        classPrefix,
        border && `${border}`,
        rounded && `${rounded}`,
        padding && `${padding}`,
        shadow && `${shadow}`,
        active && `${active}`,
        block && `${block}`,
        bg_color && `${bg_color}`,
        text_color && `${text_color}`,
        className && `${className}`
    )
    return (
        <button
            type={type}
            disabled={disabled}
            aria-disabled={disabled}
            className={classes}
        >
            {children}
        </button>
    )
}

export default Button
