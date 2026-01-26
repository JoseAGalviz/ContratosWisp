import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, FileText, Printer, Edit } from 'lucide-react';

const Dashboard = () => {
    // Mock Data
    const [contracts, setContracts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://192.168.1.30:3000/api/contracts')
            .then(res => res.json())
            .then(data => {
                const mapped = data.map(c => ({
                    id: c.id,
                    name: `${c.name} ${c.surname}`,
                    ci: c.ci,
                    plan: c.plan,
                    date: new Date(c.createdAt).toLocaleDateString()
                }));
                setContracts(mapped);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error loading contracts:", err);
                setLoading(false);
            });
    }, []);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredContracts = contracts.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.ci.includes(searchTerm)
    );

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Panel de Contratos</h1>
                <Link
                    to="/new-contract"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
                >
                    <Plus size={20} /> Nuevo Contrato
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar por Nombre o Cédula..."
                        className="pl-10 w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cédula / RIF</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredContracts.map((contract) => (
                            <tr key={contract.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap font-medium">{contract.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{contract.ci}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                        {contract.plan}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-500">{contract.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex space-x-3">
                                        <Link to={`/edit-contract/${contract.id}`} className="text-yellow-600 hover:text-yellow-700 flex items-center gap-1" title="Editar">
                                            <Edit size={16} /> Editar
                                        </Link>
                                        <span className="text-gray-300">|</span>
                                        <Link to={`/print/${contract.id}/all`} className="text-indigo-600 hover:text-indigo-900 flex items-center gap-1" title="Imprimir Todo">
                                            <Printer size={16} /> Todo
                                        </Link>
                                        <span className="text-gray-300">|</span>
                                        <Link to={`/print/${contract.id}/contract`} className="text-blue-600 hover:text-blue-900" title="Contrato">Contrato</Link>
                                        <Link to={`/print/${contract.id}/fiber`} className="text-blue-600 hover:text-blue-900" title="Hoja de Fibra">Fibra</Link>
                                        <Link to={`/print/${contract.id}/order`} className="text-blue-600 hover:text-blue-900" title="Orden de Instalación">Orden</Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredContracts.length === 0 && (
                    <div className="p-8 text-center text-gray-500">No se encontraron contratos.</div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
