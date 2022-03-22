import React, { ReactNode } from 'react'
import Title from './Title'

interface LayoutProps {
    titulo: string
    children: ReactNode
}

const Layout = (props: LayoutProps) => {
    return (
        <div
            className={`
    flex flex-col w-2/3
    bg-white text-gray-800
    rounded-lg shadow-md
    `}
        >
            <Title>{props.titulo}</Title>
            <div className="px-8 py-4">{props.children}</div>
        </div>
    )
}

export default Layout
