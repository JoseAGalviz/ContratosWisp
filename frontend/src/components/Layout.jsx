import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, FileText, PlusCircle, LayoutDashboard } from 'lucide-react';

const Layout = ({ children }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-blue-900 text-white shadow-md no-print">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <FileText className="h-8 w-8" />
                        <span className="text-xl font-bold tracking-tight">WISP Tachira Generator</span>
                    </div>
                    <nav className="flex items-center space-x-6">
                        <Link to="/" className="hover:text-blue-200 flex items-center gap-1">
                            <LayoutDashboard size={18} /> Panel
                        </Link>
                        <Link to="/new-contract" className="hover:text-blue-200 flex items-center gap-1">
                            <PlusCircle size={18} /> Nuevo Contrato
                        </Link>
                        <button onClick={handleLogout} className="text-red-300 hover:text-red-100 flex items-center gap-1">
                            <LogOut size={18} /> Salir
                        </button>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-100 border-t border-gray-200 py-4 text-center text-sm text-gray-500 no-print">
                © {new Date().getFullYear()} WISP Tachira - Sistema Interno
            </footer>
        </div>
    );
};

export default Layout;
