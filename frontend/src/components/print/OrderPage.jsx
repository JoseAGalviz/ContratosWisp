import React from 'react';

const OrderPage = ({ data }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="print-container bg-white p-0 font-sans">
            {/* ================= PAGE 1: ORDEN DE INSTALACION ================= */}
            <div className="print-page w-[210mm] h-[297mm] mx-auto p-12 bg-white text-black text-[10px] relative overflow-hidden flex flex-col box-border print:m-0 print:shadow-none">

                {/* HEADER */}
                <div className="flex justify-between items-start mb-6 mt-12">
                    <div className="w-48">
                        <img src="/print_logo.png" alt="WISP TACHIRA" className="w-full object-contain" />
                    </div>
                    <div className="flex-grow flex flex-col items-center justify-center">
                        <div className="text-center mb-2">
                            <p className="text-[12px] text-gray-500 mb-1 tracking-wide">ORDEN DE INSTALACION</p>
                            <h1 className="text-3xl font-black uppercase tracking-wider mb-1">FIBRA OPTICA</h1>
                            <p className="text-[12px] text-gray-500 tracking-wide">FECHA DE SOLICITUD</p>
                        </div>
                        <div className="flex gap-x-2 mt-2">
                            <div className="w-24 border border-gray-400 text-center py-1 font-bold text-gray-400">DIA</div>
                            <div className="w-24 border border-gray-400 text-center py-1 font-bold text-gray-400">MES</div>
                            <div className="w-24 border border-gray-400 text-center py-1 font-bold text-lg leading-none">{currentYear}</div>
                        </div>
                    </div>
                </div>

                {/* BASIC INFO */}
                <div className="border border-gray-400 mb-0">
                    <div className="flex border-b border-gray-400">
                        <div className="w-[18%] px-4 py-1.5 font-bold uppercase border-r border-gray-400 bg-gray-50">CLIENTE</div>
                        <div className="flex-grow px-4 py-1.5 uppercase font-bold text-[12px]">{data?.name || ''} {data?.surname || ''}</div>
                    </div>
                    <div className="flex border-b border-gray-400">
                        <div className="w-[18%] px-4 py-1.5 font-bold uppercase border-r border-gray-400 bg-gray-50">DIRECCIÓN</div>
                        <div className="flex-grow px-4 py-1.5 uppercase font-bold text-[12px] truncate">{data?.address || ''}</div>
                    </div>
                    <div className="flex">
                        <div className="w-[18%] px-4 py-1.5 font-bold uppercase border-r border-gray-400 bg-gray-50">PLAN:</div>
                        <div className="w-[25%] px-4 py-1.5 uppercase font-bold border-r border-gray-400 text-[12px]">{data?.plan || ''}</div>
                        <div className="w-[18%] px-2 py-1.5 font-bold uppercase text-center border-r border-gray-400 bg-gray-50">TELEFONO</div>
                        <div className="w-[20%] border-r border-gray-400 px-4 py-1.5 text-[12px]">{data?.phone || ''}</div>
                        <div className="flex-grow"></div>
                    </div>
                </div>

                {/* MATERIAL ENTREGADO TABLE */}
                <div className="border border-black border-t-0 mb-6">
                    <div className="text-center font-bold py-1 border-b border-black uppercase bg-white">MATERIAL ENTREGADO:</div>

                    {/* TABLE HEADERS */}


                    {[
                        { label: 'ROSETA' },
                        { label: 'CONECTORES' },
                        { label: 'PATCH-CORD: SC/PC - SC/APC' },
                        { label: 'CABLE DROP (ML)' }
                    ].map((item, idx) => (
                        <div key={idx} className="flex border-b border-black h-8">
                            <div className="w-[40%] text-center py-1 font-bold uppercase flex items-center justify-center">{item.label}</div>
                            <div className="w-[20%] border-l border-black"></div>
                            <div className="w-[15%] border-l border-black flex items-center justify-center">
                                <div className="w-4 h-4 border border-black"></div>
                            </div>
                            <div className="w-[25%] border-l border-black text-center py-1 font-bold flex items-center justify-center uppercase italic">REVISADO</div>
                        </div>
                    ))}
                    <div className="flex border-b border-black text-center font-bold h-8">
                        <div className="w-[30%] px-4 py-1 font-black uppercase flex items-center text-[10px]">MAC:</div>
                        <div className="flex-grow border-l border-black px-4 py-1 flex items-center font-mono  text-[12px]">{data?.macAddress || ''}</div>
                        <div className="w-[25%] border-l border-black text-center py-1 font-bold flex items-center justify-center uppercase italic text-[9px]">REVISADO</div>
                    </div>
                    <div className="flex border-b border-black text-center font-bold h-8">
                        <div className="w-[30%] px-4 py-1 font-black uppercase flex items-center text-[10px]">ONU - SERIAL:</div>
                        <div className="flex-grow border-l border-black px-4 py-1 flex items-center font-mono text-[12px]">{data?.onuSerial || ''}</div>
                        <div className="w-[25%] border-l border-black text-center py-1 font-bold flex items-center justify-center uppercase italic text-[9px]">REVISADO</div>
                    </div>

                    <div className="flex h-10">
                        <div className="w-[30%] px-4 py-1 font-black uppercase flex items-center justify-center text-[10px]">INSTALACION DE IPTV</div>
                        <div className="flex-grow border-l border-black flex items-center justify-center gap-x-8">
                            <div className="flex items-center gap-4 font-bold">SI <div className="w-5 h-5 border-2 border-black"></div></div>
                            <div className="flex items-center gap-4 font-bold">NO <div className="w-5 h-5 border-2 border-black"></div></div>
                        </div>
                        <div className="w-[35%] border-l border-black p-1 text-[6px] text-left font-bold  leading-tight items-start">
                            SI LA RESPUESTA ES NO, EXPRESE EL MOTIVO ____________________
                        </div>
                    </div>
                </div>

                {/* NAP INFO */}
                <div className="border border-black mb-6">
                    <div className="text-center font-black py-1 border-b border-black uppercase bg-[#bfbfbf] text-[11px]">IMPLEMENTACION DE EQUIPOS Y APROVISIONAMIENTO</div>
                    <div className="text-center font-black py-2 border-b border-black text-lg uppercase tracking-wider bg-white">INFORMACION NAP</div>
                    <div className="flex border-b border-black font-bold uppercase text-center h-8">
                        <div className="w-[25%] py-1 flex items-center justify-center bg-gray-50 border-r border-black">NAP</div>
                        <div className="w-[20%] border-r border-black py-1"></div>
                        <div className="w-[25%] border-r border-black py-1 flex items-center justify-center bg-gray-50 text-[9px]">COORDENADAS</div>
                        <div className="w-[20%] border-r border-black py-1"></div>
                        <div className="flex-grow flex justify-center items-center py-1">
                            <div className="w-4 h-4 border border-black"></div>
                        </div>
                    </div>
                    <div className="flex border-b border-black font-bold uppercase text-center h-8">
                        <div className="w-[25%] py-1 flex items-center justify-center bg-gray-50 border-r border-black">POTENCIA NAP</div>
                        <div className="w-[20%] border-r border-black py-1"></div>
                        <div className="w-[25%] border-r border-black py-1 flex items-center justify-center bg-gray-50 text-[9px]">PUERTO NAP</div>
                        <div className="w-[20%] border-r border-black py-1"></div>
                        <div className="flex-grow flex justify-center items-center py-1">
                            <div className="w-4 h-4 border border-black"></div>
                        </div>
                    </div>
                    <div className="flex font-bold uppercase text-center h-8">
                        <div className="w-[25%] py-1 flex items-center justify-center bg-gray-50 border-r border-black">PUERTO OLT</div>
                        <div className="w-[20%] border-r border-black py-1"></div>
                        <div className="w-[25%] border-r border-black py-1 flex items-center justify-center bg-gray-50 text-[9px]">IP</div>
                        <div className="w-[20%] border-r border-black py-1"></div>
                        <div className="flex-grow flex justify-center items-center py-1">
                            <div className="w-4 h-4 border border-black"></div>
                        </div>
                    </div>
                </div>

                {/* ONU INFO */}
                <div className="border border-black mb-4">
                    <div className="text-center font-black py-2 border-b border-black text-lg uppercase tracking-wider bg-white">INFORMACION ONU - CLIENTE</div>
                    <div className="flex border-b border-black font-bold uppercase text-center h-8">
                        <div className="w-[25%] py-1 flex items-center justify-center bg-gray-50 border-r border-black">UBICACION DE ONU</div>
                        <div className="w-[20%] border-r border-black py-1"></div>
                        <div className="w-[25%] border-r border-black py-1 flex items-center justify-center bg-gray-50 text-[9px]">COORDENADAS</div>
                        <div className="w-[20%] border-r border-black py-1"></div>
                        <div className="flex-grow flex justify-center items-center py-1">
                            <div className="w-4 h-4 border border-black"></div>
                        </div>
                    </div>
                    <div className="flex border-b border-black font-bold uppercase text-center h-12">
                        <div className="w-[15%] py-3 flex items-center justify-center bg-gray-50 border-r border-black">TECNICO</div>
                        <div className="w-[35%] border-r border-black py-3 px-2 flex items-center uppercase">{data?.technician || ''}</div>
                        <div className="w-[20%] border-r border-black py-3 flex items-center justify-center uppercase bg-gray-50 text-[8px]">FECHA INSTALACION</div>
                        <div className="w-[20%] border-r border-black py-3 px-2 flex items-center">{data?.installDate || ''}</div>
                        <div className="flex-grow"></div>
                    </div>
                    <div className="flex font-bold uppercase text-center h-16">
                        <div className="w-[15%] py-3 flex items-center justify-center bg-gray-50 border-r border-black">VEHICULO</div>
                        <div className="w-[30%] border-r border-black py-3"></div>
                        <div className="w-[30%] border-r border-black py-3 flex flex-col items-center justify-center leading-none text-[8px]">
                            <span className="mb-2">NOMBRE Y FIRMA DEL</span>
                            <span className="font-black text-[10px]">CLIENTE</span>
                        </div>
                        <div className="flex-grow relative">
                            <div className="absolute bottom-2 left-0 right-0 border-t border-dotted border-gray-400 mx-4"></div>
                        </div>
                    </div>
                </div>

            </div>


            {/* ================= PAGE 2: APROBACION ================= */}
            <div className="print-page w-[210mm] h-[297mm] mx-auto p-12 bg-white text-black font-sans relative overflow-hidden flex flex-col box-border print:m-0 print:shadow-none">

                {/* HEADER FLEX: LOGO AND HEADER TABLE */}
                <div className="flex items-start gap-x-6 mb-4">
                    {/* LOGO */}
                    <div className="w-52 pt-1">
                        <img src="/print_logo.png" alt="WISP TACHIRA" className="w-full object-contain" />
                    </div>

                    {/* HEADER TABLE */}
                    <table className="flex-grow border-collapse border border-black table-fixed text-[10px]">
                        <tbody>
                            <tr>
                                <td colSpan="3" className="text-center py-2 font-black text-xl uppercase tracking-widest border border-black bg-white">
                                    APROBACION DE INSTALACION
                                </td>
                            </tr>
                            <tr>
                                <td className="w-24 font-black text-[9px] px-2 py-2 border border-black bg-gray-50">CLIENTE:</td>
                                <td colSpan="2" className="border border-black px-4 py-2 font-black uppercase text-[11px]">{data?.name || ''} {data?.surname || ''}</td>
                            </tr>
                            <tr>
                                <td className="w-24 font-black text-[9px] px-2 py-4 border border-black bg-gray-50">FIRMA:</td>
                                <td colSpan="2" className="border border-black"></td>
                            </tr>
                            <tr className="text-center font-black text-lg h-10">
                                <td className="w-1/3 border border-black uppercase text-gray-300">DIA</td>
                                <td className="w-1/3 border border-black uppercase text-gray-300">MES</td>
                                <td className="w-1/3 border border-black text-black font-black">{currentYear}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* MAIN UNIFIED CONTENT TABLE (FULL WIDTH) */}
                <table className="w-full border-collapse border border-black table-fixed text-[9px] -mt-[1px]">
                    <tbody>
                        {/* SECTION TITLE: GREY HEADER */}
                        <tr>
                            <td colSpan="4" className="text-center py-1 font-black uppercase text-lg tracking-widest border border-black bg-[#bfbfbf] text-black">
                                INFORMACION ONU - CLIENTE
                            </td>
                        </tr>

                        {/* LOCATION ROW */}
                        <tr className="h-10">
                            <td colSpan="2" className="px-4 font-black text-[11px] uppercase border border-black align-middle">
                                UBICACION DE ONU - APROBADO POR CLIENTE
                            </td>
                            <td className="border border-black"></td>
                            <td className="w-20 border border-black text-center">
                                <div className="inline-block w-8 h-8 border-2 border-black align-middle"></div>
                            </td>
                        </tr>

                        {/* RECOMMENDATION ROW */}
                        <tr className="h-8">
                            <td colSpan="4" className="px-4 uppercase tracking-tight border border-black align-middle text-[11px] font-black italic">
                                RECOMIENDA INSTALAR EN PARED PARA EVITAR DAÑOS FUTUROS.
                            </td>
                        </tr>

                        {/* COST WARNING ROW */}
                        <tr className="h-12">
                            <td colSpan="4" className="px-4 uppercase font-black leading-tight border border-black align-middle text-[10px]">
                                LA UBICACION DE LA ONU. HA SIDO APROBADO POR EL CLIENTE. EN CASO SOLICITAR LA <span className="text-red-600 underline text-lg">REUBICACION</span> TIENE UN COSTO ADICIONAL DE 10$.
                            </td>
                        </tr>

                        {/* APROBADO SECTION ROW */}
                        <tr className="h-16">
                            <td className="w-32 px-4 font-black text-[11px] uppercase border border-black align-middle bg-gray-50">APROBADO:</td>
                            <td colSpan="2" className="relative border border-black">
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-4/5 border-t border-dotted border-black"></div>
                                <div className="absolute bottom-1.5 left-0 right-0 text-center text-[8px] font-black uppercase">FIRMA CLIENTE</div>
                            </td>
                            <td className="w-20 border border-black text-center">
                                <div className="inline-block w-8 h-8 border-2 border-black align-middle"></div>
                            </td>
                        </tr>

                        {/* CLAUSE ROWS */}
                        {[
                            { text: "LA EMPRESA SE RESERVA EL DERECHO DE SUSPENDER EL SERVICIO Y DISPONER DEL PUERTO. EN CASO DEL INCUMPLIMIENTO DE LAS CLAUSURAS DEL CONTRATO EN EL MOMENTO QUE LO DECIDA." },
                            { text: "LA DES-INSTALACIÓN TIENE UN COSTO DE 10$." },
                            { text: "EL EQUIPO ONU WIFI (ASIGNADO), SOLO PUEDE SER ADMINISTRADO POR OFICINA. PARA CAMBIO DE : (USUARIO/CLAVE)" },
                            { text: "LA DESCONF. DE LA ONU, POR INTENTOS FALLIDOS Y MANIPULACION DEL CLIENTE. COSTO : 10$", highlight: "INTENTOS FALLIDOS" },
                            { text: "EL EQUIPO ASIGNADO JUNTO CON LOS METROS LINEALES INDICADOS EN LA PRESENTE ORDEN DE INSTALACION - SON PROPIEDAD DE: WISP TACHIRA - POR LO CUAL ES DE CARACTER OBLIGATORIO LA DEVOLUCION DE LOS MISMO EN BUEN ESTADO Y FUNCIONAMIENTO - DE LO CONTRARIO TIENE UN COSTO ESTABLECIDO DE:" }
                        ].map((item, idx) => (
                            <tr key={idx} className="h-14">
                                <td colSpan="3" className="p-3 border border-black leading-tight font-black uppercase align-middle text-[10px]">
                                    {item.highlight ? (
                                        <>
                                            {item.text.split(item.highlight)[0]}
                                            <span className="text-red-600 underline">{item.highlight}</span>
                                            {item.text.split(item.highlight)[1]}
                                        </>
                                    ) : (
                                        item.text
                                    )}
                                </td>
                                <td className="relative border border-black w-24">
                                    <div className="absolute bottom-1 right-1 text-[7px] font-black uppercase text-black italic">FIRMA CLIENTE</div>
                                </td>
                            </tr>
                        ))}

                        {/* PRICING ROWS */}
                        <tr className="h-12">
                            <td colSpan="2" className="px-4 py-2 border border-black font-black uppercase text-[10px] text-center align-middle bg-gray-50">
                                ONU- WIFI / ONU BRIDGE / PATCH-CORD
                            </td>
                            <td className="border border-black text-center font-black text-2xl align-middle">
                                20$
                            </td>
                            <td className="relative border border-black">
                                <div className="absolute bottom-1 right-1 text-[7px] font-black uppercase italic">FIRMA CLIENTE</div>
                            </td>
                        </tr>
                        <tr className="h-12">
                            <td className="px-4 py-2 border border-black font-black uppercase align-middle text-[10px] text-center bg-gray-50">
                                CABLE DROP (FIBRA OPTICA)
                            </td>
                            <td className="border border-black text-center font-black uppercase align-middle text-[11px]">
                                1$ POR METRO LINEAL
                            </td>
                            <td colSpan="2" className="relative border border-black">
                                <div className="absolute bottom-1 right-1 text-[7px] font-black uppercase italic">FIRMA CLIENTE</div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <style jsx>{`
                @media print {
                    @page {
                        margin: 0;
                        size: A4;
                    }
                    body {
                        margin: 0;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    .print-container {
                        background-color: white !important;
                        padding: 0 !important;
                        margin: 0 !important;
                    }
                    .print-page {
                        margin: 0 !important;
                        box-shadow: none !important;
                        page-break-after: always;
                        page-break-inside: avoid;
                    }
                }
            `}</style>
        </div>
    );
};

export default OrderPage;
