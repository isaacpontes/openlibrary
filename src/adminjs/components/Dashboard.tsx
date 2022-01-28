import React, { useEffect, useState } from 'react'
import { ApiClient, useCurrentAdmin } from 'adminjs'
import { H1, Table, TableHead, TableBody, TableRow, TableCell } from '@adminjs/design-system'

interface DashboardResponse {
    authors: number
    books: number
    categories: number
    loans: number
    standardUsers: number
}

interface DashboardCardProps {
    title: string
    count?: number
}

const Dashboard = () => {
    const [counts, setCounts] = useState<DashboardResponse>()
    const [currentAdmin, setCurrentAdmin] = useCurrentAdmin()
    const api = new ApiClient()

    useEffect(() => {
        fetchDashboardData()
    }, [])

    async function fetchDashboardData() {
        const res = await api.getDashboard()
        console.log(res.data)
        setCounts(res.data)
    }

    return (
        <div style={{ padding: '1.5rem' }}>
            <H1>Olá, {currentAdmin?.name}!</H1>

            <section style={{ backgroundColor: '#FFF', padding: '1.5rem' }}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#C84B31'}}>
                            <TableCell style={{ color: "#FFF" }}>Recurso</TableCell>
                            <TableCell style={{ color: "#FFF" }}>Quantidade de Registros</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Autores</TableCell>
                            <TableCell>{counts?.authors}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Livros</TableCell>
                            <TableCell>{counts?.books}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Categorias</TableCell>
                            <TableCell>{counts?.categories}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Empréstimos</TableCell>
                            <TableCell>{counts?.loans}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Usuários</TableCell>
                            <TableCell>{counts?.standardUsers}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </section>
        </div>
    )
}

export default Dashboard