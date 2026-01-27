import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ContractPage from '../components/print/ContractPage';
import FiberPage from '../components/print/FiberPage';
import OrderPage from '../components/print/OrderPage';

const ContractPrint = () => {
    const { id, type } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:3000/api/contracts/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(err => console.error("Error loading for print:", err));
    }, [id]);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="print-container bg-white text-black">

            {/* Control Bar (Hidden in Print) */}
            <div className="no-print fixed top-0 left-0 w-full bg-gray-800 text-white p-3 flex justify-between items-center z-50">
                <div>
                    <span className="font-bold">Print Preview</span> - {type.toUpperCase()}
                </div>
                <div className="flex gap-2">
                    <button onClick={() => navigate('/')} className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded">Close</button>
                    <button onClick={() => window.print()} className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded font-bold">Print Now</button>
                </div>
            </div>

            <div className="print-content pt-16 print:pt-0">
                {(type === 'contract' || type === 'all') && <ContractPage data={data} />}
                {(type === 'fiber' || type === 'all') && <FiberPage data={data} />}
                {(type === 'order' || type === 'all') && <OrderPage data={data} />}
            </div>

        </div>
    );
};

export default ContractPrint;
