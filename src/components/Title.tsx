import React, { ReactNode } from 'react'

interface TituloProps {
    children: ReactNode
}

const Title = (props: TituloProps) => {
    return (
        <div className="flex-col justify-center felx">
            <h1 className={`text-2xl px-8 py-4 uppercase font-bold`}>
                <span className="p-1">{props.children}</span>
                <hr className="mt-4" />
            </h1>
        </div>
    )
}

export default Title
