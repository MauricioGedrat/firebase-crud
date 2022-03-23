import React, { ReactNode } from 'react'

interface EnterProps {
    children?: ReactNode
    texto: string
    type?: 'text' | 'number'
    value: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

const Enter = (props: EnterProps) => {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">{props.texto}</label>
            <input
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.somenteLeitura}
                onChange={(e) => props.valorMudou?.(e.target.value)}
                className={`
                border border-purple-500 rounded-lg outline-none
                bg-gray-100 px-4 py-2 duration-75 ease-in-out  ${
                    props.somenteLeitura ? '' : 'focus:bg-white focus:border-2 '
                }
                `}
            />
        </div>
    )
}

export default Enter
