import { TrashSvg } from 'common/svgIcons'
import EditSvg from 'common/svgIcons/EditSvg'
import React from 'react'
import Client from './core/Client'

interface TableProps {
    clientes: Client[]
    clienteSelecionado?: (cliente: Client) => void
    clienteExcluido?: (cliente: Client) => void
}

const Table = (props: TableProps) => {
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderHeader() {
        return (
            <tr>
                <th className="p-4 text-left ">Código</th>
                <th className="p-4 text-left ">Nome</th>
                <th className="p-4 text-left ">Idade</th>
                {exibirAcoes ? <th className="p-4 ">Ações</th> : false}
            </tr>
        )
    }

    function renderData() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr
                    key={cliente.id}
                    className={`${
                        i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'
                    }`}
                >
                    <td className="p-4 text-left">{cliente.id}</td>
                    <td className="p-4 text-left">{cliente.nome}</td>
                    <td className="p-4 text-left">{cliente.idade}</td>
                    {exibirAcoes ? renderActions(cliente) : false}
                </tr>
            )
        })
    }

    function renderActions(cliente: Client) {
        return (
            <td className="flex items-center justify-center">
                {props.clienteSelecionado ? (
                    <button
                        onClick={() => props.clienteSelecionado?.(cliente)}
                        className="flex items-center justify-center p-2 text-green-500 duration-200 rounded-full cursor-pointer hover:bg-white hover:opacity-60"
                    >
                        <EditSvg />
                    </button>
                ) : (
                    false
                )}
                {props.clienteExcluido ? (
                    <button
                        onClick={() => props.clienteExcluido?.(cliente)}
                        className="flex items-center justify-center p-2 text-red-500 duration-200 rounded-full cursor-pointer hover:bg-white hover:opacity-60"
                    >
                        <TrashSvg />
                    </button>
                ) : (
                    false
                )}
            </td>
        )
    }

    return (
        <table className="w-full overflow-hidden rounded-xl">
            <thead
                className={`bg-gradient-to-r from-purple-500
                 to-purple-800 text-gray-100
                 `}
            >
                {renderHeader()}
            </thead>
            <tbody>{renderData()}</tbody>
        </table>
    )
}

export default Table
