import React, { ReactNode } from 'react'
import Enter from './Enter'

interface FormProps {
    children: ReactNode
}

const Formulario = (props: FormProps) => {
    return (
        <div>
            {props.children}
            <Enter texto="Nome" />
        </div>
    )
}

export default Formulario
