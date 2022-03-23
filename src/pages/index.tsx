import Button from '../components/Button'
import Client from '../components/core/Client'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Table from '../components/Table'
import React, { useState, useEffect } from 'react'
import ClienteRepositorio from '../components/core/ClienteRepositiorio'
import ColecaoCliente from '../backend/db/ColecaoCliente'

const index = () => {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const [cliente, setCliente] = useState<Client>(Client.vazio())
    const [clientes, setClientes] = useState<Client[]>([])
    const [visible, setVisible] = useState<'tabela' | 'form'>('tabela')

    useEffect(() => {
        const docRef = repo.obterTodos().then(setClientes)
    }, [])

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
