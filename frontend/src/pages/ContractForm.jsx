import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, ArrowLeft } from 'lucide-react';

const ContractForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        // Client Info
        name: '',
        surname: '',
        ci: '',
        dob: '',
        email: '',
        phone: '',
        address: '',
        rif: '',
        razonSocial: '',

        // Service Info
        plan: '250 Mbps', // Default
        paymentMethod: 'EFECTIVO', // Default

        // Technical Info (Fiber Sheet)
        routerModel: '',
        technician: '',
        installDate: '',

        // Equipment (Loan)
        onuSerial: '',
        macAddress: '',
        connectorType: 'SC/APC-SC/UPC 3.0mm',

        // Installation Order
        napCode: '',
        napPort: '',
        oltPort: '',
        ipAddress: '',
        coordinates: '',

        // Notes/Observations
        notes: ''
    });

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3000/api/contracts/${id}`)
                .then(res => res.json())
                .then(data => setFormData(data))
                .catch(err => console.error("Error loading contract:", err));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const url = id
                ? `http://localhost:3000/api/contracts/${id}`
                : 'http://localhost:3000/api/contracts';
            const method = id ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error('Error saving contract');

            navigate('/');
        } catch (error) {
            console.error("Error:", error);
            alert("Error al guardar el contrato. " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-800">{id ? 'Editar Contrato' : 'Nuevo Contrato de Servicio'}</h1>
                <button onClick={() => navigate('/')} className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    <ArrowLeft size={18} /> Volver
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* SECTION 1: CLIENT DATA */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-blue-900 border-b pb-2 mb-4">Información del Cliente</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nombres</label>
                            <input name="name" value={formData.name} onChange={handleChange} className="mt-1 w-full p-2 border rounded" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Apellidos</label>
                            <input name="surname" value={formData.surname} onChange={handleChange} className="mt-1 w-full p-2 border rounded" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Cédula de Identidad</label>
                            <input name="ci" value={formData.ci} onChange={handleChange} className="mt-1 w-full p-2 border rounded" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
                            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                            <input name="phone" value={formData.phone} onChange={handleChange} className="mt-1 w-full p-2 border rounded" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Dirección</label>
                            <textarea name="address" value={formData.address} onChange={handleChange} className="mt-1 w-full p-2 border rounded" rows="2" required></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Razón Social Information</label>
                            <input name="razonSocial" value={formData.razonSocial} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">RIF</label>
                            <input name="rif" value={formData.rif} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
                        </div>
                    </div>
                </div>

                {/* SECTION 2: SERVICE PLAN */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-blue-900 border-b pb-2 mb-4">Plan de Servicio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Plan de Internet</label>
                            <select name="plan" value={formData.plan} onChange={handleChange} className="mt-1 w-full p-2 border rounded bg-white">
                                <option value="20 Mbps">20 Mbps</option>
                                <option value="50 Mbps">50 Mbps</option>
                                <option value="100 Mbps">100 Mbps</option>
                                <option value="250 Mbps">250 Mbps</option>
                                <option value="450 Mbps">450 Mbps</option>
                                <option value="550 Mbps">550 Mbps</option>
                                <option value="850 Mbps">850 Mbps</option>
                                <option value="1.00 GB">1.00 GB</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Método de Pago Inicial</label>
                            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="mt-1 w-full p-2 border rounded bg-white">
                                <option value="EFECTIVO">Efectivo</option>
                                <option value="PAGO MOVIL">Pago Móvil</option>
                                <option value="TRANSFERENCIA">Transferencia</option>
                                <option value="PTO DE VENTA">Punto de Venta</option>
                                <option value="ZELLE">Zelle</option>
                                <option value="BANCOLOMBIA">Bancolombia</option>
                                <option value="EFECTIVO (PESOS)">Efectivo (pesos)</option>
                                <option value="EFECTIVO (DOLARES)">Efectivo (dolares)</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* SECTION 3: TECHNICAL INFO (Fiber/Technical Sheet) */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-blue-900 border-b pb-2 mb-4">Información Técnica (Hoja de Fibra)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Modelo de Router</label>
                            <input name="routerModel" value={formData.routerModel} onChange={handleChange} className="mt-1 w-full p-2 border rounded" placeholder="Ej: TP-Link C6" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Serial ONU</label>
                            <input name="onuSerial" value={formData.onuSerial} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Dirección MAC</label>
                            <input name="macAddress" value={formData.macAddress} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Técnico Asignado</label>
                            <input name="technician" value={formData.technician} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Fecha de Instalación</label>
                            <input type="date" name="installDate" value={formData.installDate} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Tipo de Conector</label>
                            <select name="connectorType" value={formData.connectorType} onChange={handleChange} className="mt-1 w-full p-2 border rounded bg-white">
                                <option value="SC/APC-SC/UPC 3.0mm">SC/APC-SC/UPC 3.0mm</option>
                                <option value="SC/APC">SC/APC</option>
                                <option value="SC/UPC">SC/UPC</option>
                            </select>
                        </div>
                        <div className="md:col-span-3">
                            <label className="block text-sm font-medium text-gray-700">Notas / Observaciones</label>
                            <textarea name="notes" value={formData.notes} onChange={handleChange} className="mt-1 w-full p-2 border rounded" rows="3" placeholder="Observaciones sobre el contrato de fibra..."></textarea>
                        </div>
                    </div>
                </div>

                {/* SECTION 4: INSTALLATION ORDER (Technical Details) */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-blue-900 border-b pb-2 mb-4">Orden de Instalación (Detalles de Red)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Código NAP</label>
                            <input name="napCode" value={formData.napCode} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Puerto NAP</label>
                            <input name="napPort" value={formData.napPort} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Puerto OLT</label>
                            <input name="oltPort" value={formData.oltPort} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Dirección IP</label>
                            <input name="ipAddress" value={formData.ipAddress} onChange={handleChange} className="mt-1 w-full p-2 border rounded" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Coordenadas (GPS)</label>
                            <input name="coordinates" value={formData.coordinates} onChange={handleChange} className="mt-1 w-full p-2 border rounded" placeholder="Ej: 7.7888, -72.2145" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3">
                    <button type="button" onClick={() => navigate('/')} className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-50">Cancelar</button>
                    <button type="submit" disabled={loading} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2">
                        <Save size={18} /> {loading ? 'Guardando...' : 'Guardar Contrato'}
                    </button>
                </div>

            </form>
        </div>
    );
};

export default ContractForm;
