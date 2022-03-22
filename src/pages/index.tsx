import Button from 'components/Button'
import Client from 'components/core/Client'
import Layout from 'components/Layout'
import Table from 'components/Table'
import React from 'react'

const index = () => {
    const clientes = [
        new Client('Ana', 34, '1'),
        new Client('Bia', 44, '2'),
        new Client('Carlos', 23, '3'),
        new Client('Pedro', 54, '4'),
    ]
    function clienteSelecionado(cliente: Client) {
        console.log(cliente.nome)
    }
    function clienteExcluido(cliente: Client) {
        console.log(`O cliente ${cliente.nome} foi excluido`)
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
                <div className="flex justify-end">
                    <Button cor="green" className="mb-4">
                        Novo Cliente
                    </Button>
                </div>
                <Table
                    clientes={clientes}
                    clienteSelecionado={clienteSelecionado}
                    clienteExcluido={clienteExcluido}
                />
            </Layout>
        </div>
    )
}

export default index
