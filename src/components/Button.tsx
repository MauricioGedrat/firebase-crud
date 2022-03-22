import React, { ReactNode } from 'react'

interface ButtonProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: ReactNode
}

const Button = (props: ButtonProps) => {
    return (
        <button
            className={`
            p-4 rounded-md bg-gradient-to-r
            from-green-400 to-green-700 text-white
            font-bold 
            ${props.className}
            `}
        >
            {props.children}
        </button>
    )
}

export default Button
