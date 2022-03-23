import React, { useState } from 'react'
import Button from './Button'
import Client from './core/Client'
import Enter from './Enter'

interface FormProps {
    cliente: Client
    clienteMudou?: (cliente: Client) => void
    cancelado?: () => void
}

const Formulario = (props: FormProps) => {
    const id = props.cliente?.id
    const [name, setName] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Enter
                    somenteLeitura
                    texto="Código"
                    value={id}
                    className="mb-4"
                />
            ) : (
                false
            )}
            <Enter
                texto="Nome"
                value={name}
                valorMudou={setName}
                className="mb-4"
            />
            <Enter
                texto="Idade"
                type="number"
                value={idade}
                valorMudou={setIdade}
            />
            <div className="flex justify-end gap-4">
                <Button
                    className="mt-4 "
                    cor="blue"
                    onClick={() =>
                        props.clienteMudou?.(new Client(name, +idade, id))
                    }
                >
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button className="mt-4" cor="green" onClick={props.cancelado}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}

export default Formulario
