import ColecaoCliente from 'backend/db/ColecaoCliente'
import Button from 'components/Button'
import Client from 'components/core/Client'
import ClienteRepositorio from 'components/core/ClienteRepositiorio'
import Formulario from 'components/Formulario'
import Layout from 'components/Layout'
import Table from 'components/Table'
import React, { useState } from 'react'

const index = () => {
    const [cliente, setCliente] = useState<Client>(Client.vazio())
    const [visible, setVisible] = useState<'tabela' | 'form'>('tabela')

    const clientes = [
        new Client('Ana', 34, '1'),
        new Client('Bia', 44, '2'),
        new Client('Carlos', 23, '3'),
        new Client('Pedro', 54, '4'),
    ]
    function clienteSelecionado(cliente: Client) {
        setCliente(cliente)
        setVisible('form')
    }
    function clienteExcluido(cliente: Client) {
        console.log(`O cliente ${cliente.nome} foi excluido`)
    }

    function salvarCliente(cliente: Client) {
        console.log(cliente)
        setVisible('tabela')
    }
    function novoCliente() {
        setVisible('form')
        setCliente(Client.vazio())
    }

    return (
        <div
            className={`
            flex items-center justify-center
            h-screen bg-gradient-to-r
             from-blue-500 to-purple-500
             text-white`}
        >
            <Layout titulo="Cadastro Simples">
                {visible === 'tabela' ? (
                    <div className="pb-4">
                        <div className="flex justify-end">
                            <Button
                                cor="green"
                                className="mb-4"
                                onClick={novoCliente}
                            >
                                Novo Cliente
                            </Button>
                        </div>
                        <Table
                            clientes={clientes}
                            clienteSelecionado={clienteSelecionado}
                            clienteExcluido={clienteExcluido}
                        />
                    </div>
                ) : (
                    <Formulario
                        cliente={cliente}
                        clienteMudou={salvarCliente}
                        cancelado={() => setVisible('tabela')}
                    />
                )}
            </Layout>
        </div>
    )
}

export default index
