import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ContractForm from './pages/ContractForm';
import ContractPrint from './pages/ContractPrint';
import Layout from './components/Layout';

// Mock Auth Context (Simplified for scaffolding)
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) return <Navigate to="/login" replace />;
    return children;
};

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Routes */}
                <Route path="/" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>} />
                <Route path="/new-contract" element={<ProtectedRoute><Layout><ContractForm /></Layout></ProtectedRoute>} />
                <Route path="/edit-contract/:id" element={<ProtectedRoute><Layout><ContractForm /></Layout></ProtectedRoute>} />

                {/* Print Route - No Layout */}
                <Route path="/print/:id/:type" element={<ContractPrint />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
