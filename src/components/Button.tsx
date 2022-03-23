import React, { ReactNode } from 'react'

interface ButtonProps {
    cor?: 'red' | 'green' | 'blue' | 'gray'
    className?: string
    onClick?: () => void
    children: ReactNode
}

const Button = (props: ButtonProps) => {
    const cor = props.cor ?? 'gray'
    return (
        <button
            onClick={props.onClick}
            className={`
            p-4 rounded-md bg-gradient-to-r
            from-blue-400 to-blue-700 text-white
            font-bold 
            ${props.className}
            `}
        >
            {props.children}
        </button>
    )
}

export default Button
