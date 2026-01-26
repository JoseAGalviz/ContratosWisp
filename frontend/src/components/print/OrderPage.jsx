import React from 'react';

const OrderPage = ({ data }) => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* PAGE 1 */}
            <div className="print-page w-full mx-auto px-16 py-8 bg-white text-black text-[10px] font-sans mb-8 shadow-lg print:shadow-none print:mb-0 break-before-page overflow-hidden">

                {/* HEADER */}
                <div className="flex justify-between items-start mb-6 w-full">
                    <div className="w-48">
                        <img src="/print_logo.png" alt="WISP TACHIRA" className="w-full object-contain" />
                    </div>
                    <div className="flex-grow pt-2">
                        <div className="flex justify-end gap-x-2">
                            <div className="w-32 border border-gray-300 text-center py-1 font-bold text-gray-400">DIA</div>
                            <div className="w-32 border border-gray-300 text-center py-1 font-bold text-gray-400">MES</div>
                            <div className="w-32 border border-gray-300 text-center py-1 font-bold text-lg">{currentYear}</div>
                        </div>
                    </div>
                </div>

                {/* BASIC INFO */}
                <div className="border border-gray-400 mb-0">
                    <div className="flex border-b border-gray-400">
                        <div className="w-[15%] px-4 py-1 font-bold uppercase border-r border-gray-400">CLIENTE</div>
                        <div className="flex-grow px-4 py-1 uppercase font-bold">{data.name} {data.surname}</div>
                    </div>
                    <div className="flex border-b border-gray-400">
                        <div className="w-[15%] px-4 py-1 font-bold uppercase border-r border-gray-400">DIRECCION</div>
                        <div className="flex-grow px-4 py-1 uppercase font-bold text-[9px]">{data.address}</div>
                    </div>
                    <div className="flex">
                        <div className="w-[15%] px-4 py-1 font-bold uppercase border-r border-gray-400">PLAN:</div>
                        <div className="w-[20%] px-4 py-1 uppercase font-bold border-r border-gray-400">{data.plan}</div>
                        <div className="w-[15%] px-2 py-1 font-bold uppercase text-center border-r border-gray-400">TELEFONO</div>
                        <div className="w-[15%] border-r border-gray-400"></div>
                        <div className="w-[15%] border-r border-gray-400"></div>
                        <div className="flex-grow"></div>
                    </div>
                </div>

                {/* MATERIAL ENTREGADO TABLE */}
                <div className="border border-gray-400 border-t-0 mb-6">
                    <div className="text-center font-bold py-1 border-b border-gray-400 uppercase bg-white">MATERIAL ENTREGADO:</div>

                    {/* TABLE HEADERS */}
                    <div className="flex border-b border-gray-400 text-center font-bold">
                        <div className="w-[40%] py-1"></div>
                        <div className="w-[20%] border-l border-gray-400 py-1"></div>
                        <div className="w-[15%] border-l border-gray-400 py-1 flex items-center justify-center">
                            <div className="w-4 h-4 border border-black mb-1"></div>
                        </div>
                        <div className="w-[25%] border-l border-gray-400 py-1">REVISADO</div>
                    </div>

                    {[
                        { label: 'ROSETA' },
                        { label: 'CONECTORES' },
                        { label: 'PATCH-CORD: SC/PC - SC/APC' },
                        { label: 'CABLE DROP (ML)' }
                    ].map((item, idx) => (
                        <div key={idx} className="flex border-b border-gray-400">
                            <div className="w-[40%] text-center py-1 font-bold uppercase">{item.label}</div>
                            <div className="w-[20%] border-l border-gray-400"></div>
                            <div className="w-[15%] border-l border-gray-400 flex items-center justify-center">
                                <div className="w-4 h-4 border border-black"></div>
                            </div>
                            <div className="w-[25%] border-l border-gray-400 text-center py-1 font-bold">REVISADO</div>
                        </div>
                    ))}

                    <div className="flex border-b border-gray-400">
                        <div className="w-[30%] px-4 py-1 font-bold uppercase">ONU - SERIAL:</div>
                        <div className="flex-grow border-l border-gray-400"></div>
                        <div className="w-[25%] border-l border-gray-400 text-center py-1 font-bold">REVISADO</div>
                    </div>

                    <div className="flex">
                        <div className="w-[30%] px-4 py-1 font-bold uppercase flex items-center justify-center">INSTALACION DE IPTV</div>
                        <div className="flex-grow border-l border-gray-400 flex items-center justify-center gap-x-4">
                            <div className="flex items-center gap-2">SI <div className="w-4 h-4 border border-black"></div></div>
                            <div className="flex items-center gap-2">NO <div className="w-4 h-4 border border-black"></div></div>
                        </div>
                        <div className="w-[40%] border-l border-gray-400 p-1 text-[7px] text-center font-bold text-gray-600 leading-tight">
                            SI LA RESPUESTA ES NO, EXPRESE EL MOTIVO
                        </div>
                    </div>
                </div>

                {/* NAP INFO */}
                <div className="border border-gray-400 mb-6">
                    <div className="text-center font-bold py-1 border-b border-gray-400 uppercase bg-gray-50 text-xs">IMPLEMENTACION DE EQUIPOS Y APROVISIONAMIENTO</div>
                    <div className="text-center font-bold py-2 border-b border-gray-400 text-lg uppercase tracking-wider">INFORMACION NAP</div>
                    <div className="flex border-b border-gray-400 font-bold uppercase text-center">
                        <div className="w-[25%] py-1">NAP</div>
                        <div className="w-[20%] border-l border-gray-400 py-1"></div>
                        <div className="w-[25%] border-l border-gray-400 py-1">COORDENADAS</div>
                        <div className="w-[20%] border-l border-gray-400 py-1"></div>
                        <div className="flex-grow border-l border-gray-400 flex justify-center items-center py-1">
                            <div className="w-4 h-4 border border-black"></div>
                        </div>
                    </div>
                    <div className="flex border-b border-gray-400 font-bold uppercase text-center">
                        <div className="w-[25%] py-1">POTENCIA NAP</div>
                        <div className="w-[20%] border-l border-gray-400 py-1"></div>
                        <div className="w-[25%] border-l border-gray-400 py-1">PUERTO NAP</div>
                        <div className="w-[20%] border-l border-gray-300 py-1"></div>
                        <div className="flex-grow border-l border-gray-400 flex justify-center items-center py-1">
                            <div className="w-4 h-4 border border-black"></div>
                        </div>
                    </div>
                    <div className="flex font-bold uppercase text-center">
                        <div className="w-[25%] py-1">PUERTO OLT</div>
                        <div className="w-[20%] border-l border-gray-400 py-1"></div>
                        <div className="w-[25%] border-l border-gray-400 py-1">IP</div>
                        <div className="w-[20%] border-l border-gray-400 py-1"></div>
                        <div className="flex-grow border-l border-gray-400 flex justify-center items-center py-1">
                            <div className="w-4 h-4 border border-black"></div>
                        </div>
                    </div>
                </div>

                {/* ONU INFO */}
                <div className="border border-gray-400">
                    <div className="text-center font-bold py-2 border-b border-gray-400 text-lg uppercase tracking-wider">INFORMACION ONU - CLIENTE</div>
                    <div className="flex border-b border-gray-400 font-bold uppercase text-center">
                        <div className="w-[25%] py-1">UBICACION DE ONU</div>
                        <div className="w-[20%] border-l border-gray-400 py-1"></div>
                        <div className="w-[25%] border-l border-gray-400 py-1">COORDENADAS</div>
                        <div className="w-[20%] border-l border-gray-400 py-1"></div>
                        <div className="flex-grow border-l border-gray-400 flex justify-center items-center py-1">
                            <div className="w-4 h-4 border border-black"></div>
                        </div>
                    </div>
                    <div className="flex border-b border-gray-400 font-bold uppercase text-center">
                        <div className="w-[15%] py-3">TECNICO</div>
                        <div className="w-[35%] border-l border-gray-400 py-3"></div>
                        <div className="w-[20%] border-l border-gray-400 py-3 flex items-center justify-center uppercase">FECHA INSTALACION</div>
                        <div className="w-[20%] border-l border-gray-400 py-3"></div>
                        <div className="flex-grow border-l border-gray-400"></div>
                    </div>
                    <div className="flex font-bold uppercase text-center">
                        <div className="w-[15%] py-3">VEHICULO</div>
                        <div className="w-[30%] border-l border-gray-400 py-3"></div>
                        <div className="w-[30%] border-l border-gray-400 py-3 flex flex-col items-center justify-center leading-tight">
                            <span>NOMBRE Y FIRMA DEL</span>
                            <span>CLIENTE</span>
                        </div>
                        <div className="flex-grow border-l border-gray-400 relative">
                            <span className="absolute bottom-1 right-2 text-[6px] text-gray-300 font-normal">FIRMA</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* PAGE 2 - APROBACION */}
            <div className="print-page w-full mx-auto px-16 py-8 bg-white text-black text-sm font-sans mb-8 shadow-lg print:shadow-none print:mb-0 break-before-page overflow-hidden">

                {/* HEADER FLEX: LOGO AND HEADER TABLE */}
                <div className="flex items-start gap-x-6 mb-0">
                    {/* LOGO */}
                    <div className="w-52 pt-1">
                        <img src="/print_logo.png" alt="WISP TACHIRA" className="w-full object-contain" />
                    </div>

                    {/* HEADER TABLE */}
                    <table className="flex-grow border-collapse border border-gray-400 table-fixed">
                        <tbody>
                            <tr>
                                <td colSpan="3" className="text-center py-1 font-bold text-xl uppercase tracking-widest border border-gray-400">
                                    APROBACION DE INSTALACION
                                </td>
                            </tr>
                            <tr>
                                <td className="w-24 font-bold text-[9px] px-2 py-1.5 border border-gray-400 bg-white">CLIENTE:</td>
                                <td colSpan="2" className="border border-gray-400 px-4 py-1.5 font-bold uppercase text-[10px]">{data.name} {data.surname}</td>
                            </tr>
                            <tr>
                                <td className="w-24 font-bold text-[9px] px-2 py-1.5 border border-gray-400 bg-white">FIRMA:</td>
                                <td colSpan="2" className="border border-gray-400"></td>
                            </tr>
                            <tr className="text-center font-bold text-lg h-8">
                                <td className="w-1/3 border border-gray-400 uppercase text-gray-300">DIA</td>
                                <td className="w-1/3 border border-gray-400 uppercase text-gray-300">MES</td>
                                <td className="w-1/3 border border-gray-400 text-black font-black">2025</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* MAIN UNIFIED CONTENT TABLE (FULL WIDTH) */}
                <table className="w-full border-collapse border border-gray-400 table-fixed text-[9px] -mt-[1px]">
                    <tbody>
                        {/* SECTION TITLE: GREY HEADER */}
                        <tr>
                            <td colSpan="4" className="text-center py-1 font-bold uppercase text-lg tracking-widest border border-gray-400 bg-gray-200">
                                INFORMACION ONU - CLIENTE
                            </td>
                        </tr>

                        {/* LOCATION ROW */}
                        <tr className="h-12">
                            <td colSpan="2" className="px-3 font-bold text-[10px] uppercase border border-gray-400 align-middle">
                                UBICACION DE ONU - APROBADO POR CLIENTE
                            </td>
                            <td className="border border-gray-400"></td>
                            <td className="w-20 border border-gray-400 text-center">
                                <div className="inline-block w-6 h-6 border border-gray-500 align-middle"></div>
                            </td>
                        </tr>

                        {/* RECOMMENDATION ROW */}
                        <tr className="h-10">
                            <td colSpan="4" className="px-3 uppercase tracking-tight border border-gray-400 align-middle text-[10px] font-bold">
                                RECOMIENDA INSTALAR EN PARED PARA EVITAR DAÑOS FUTUROS.
                            </td>
                        </tr>

                        {/* COST WARNING ROW */}
                        <tr className="h-16">
                            <td colSpan="4" className="px-3 uppercase font-bold leading-tight border border-gray-400 align-middle text-[10px]">
                                LA UBICACION DE LA ONU. HA SIDO APROBADO POR EL CLIENTE. EN CASO SOLICITAR LA <span className="text-red-500 underline">REUBICACION</span> TIENE UN COSTO ADICIONAL DE 10$.
                            </td>
                        </tr>

                        {/* APROBADO SECTION ROW */}
                        <tr className="h-20">
                            <td className="w-32 px-3 font-bold text-[10px] uppercase border border-gray-400 align-middle">APROBADO:</td>
                            <td colSpan="2" className="relative border border-gray-400">
                                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-4/5 border-t border-gray-400"></div>
                                <div className="absolute bottom-1.5 left-0 right-0 text-center text-[7px] font-bold uppercase text-black">FIRMA CLIENTE</div>
                            </td>
                            <td className="w-20 border border-gray-400 text-center">
                                <div className="inline-block w-6 h-6 border border-gray-500 align-middle"></div>
                            </td>
                        </tr>

                        {/* GREY SPACER ROW */}
                        <tr className="h-6 bg-gray-100">
                            <td className="border border-gray-400"></td>
                            <td className="border border-gray-400"></td>
                            <td className="border border-gray-400"></td>
                            <td className="border border-gray-400"></td>
                        </tr>

                        {/* CLAUSE ROWS */}
                        {[
                            { text: "LA EMPRESA SE RESERVA EL DERECHO DE SUSPENDER EL SERVICIO Y DISPONER DEL PUERTO. EN CASO DEL INCUMPLIMIENTO DE LAS CLAUSURAS DEL CONTRATO EN EL MOMENTO QUE LO DECIDA." },
                            { text: "LA DES-INSTALACIÓN TIENE UN COSTO DE 10$." },
                            { text: "EL EQUIPO ONU WIFI (ASIGNADO), SOLO PUEDE SER ADMINISTRADO POR OFICINA. PARA CAMBIO DE : (USUARIO/CLAVE)" },
                            { text: "LA DESCONF. DE LA ONU, POR INTENTOS FALLIDOS Y MANIPULACION DEL CLIENTE. COSTO : 10$", highlight: "INTENTOS FALLIDOS" },
                            { text: "EL EQUIPO ASIGNADO JUNTO CON LOS METROS LINEALES INDICADOS EN LA PRESENTE ORDEN DE INSTALACION - SON PROPIEDAD DE: WISP TACHIRA - POR LO CUAL ES DE CARACTER OBLIGATORIO LA DEVOLUCION DE LOS MISMO EN BUEN ESTADO Y FUNCIONAMIENTO - DE LO CONTRARIO TIENE UN COSTO ESTABLECIDO DE:" }
                        ].map((item, idx) => (
                            <tr key={idx} className="h-16">
                                <td colSpan="3" className="p-3 border border-gray-400 leading-snug font-bold uppercase align-middle text-[10px]">
                                    {item.highlight ? (
                                        <>
                                            {item.text.split(item.highlight)[0]}
                                            <span className="text-red-500 underline">{item.highlight}</span>
                                            {item.text.split(item.highlight)[1]}
                                        </>
                                    ) : (
                                        item.text
                                    )}
                                </td>
                                <td className="relative border border-gray-400">
                                    <div className="absolute bottom-1 right-1 text-[6px] font-bold uppercase text-black">FIRMA CLIENTE</div>
                                </td>
                            </tr>
                        ))}

                        {/* PRICING ROWS */}
                        <tr className="h-16">
                            <td colSpan="2" className="p-3 border border-gray-400 font-bold uppercase text-center align-middle text-[10px]">
                                ONU- WIFI / ONU BRIDGE / PATCH-CORD
                            </td>
                            <td className="border border-gray-400 text-center font-bold text-xl align-middle">
                                20$
                            </td>
                            <td className="relative border border-gray-400">
                                <div className="absolute bottom-1 right-1 text-[6px] font-bold uppercase text-black">FIRMA CLIENTE</div>
                            </td>
                        </tr>
                        <tr className="h-16">
                            <td className="p-3 border border-gray-400 font-bold uppercase align-middle text-[10px] text-center">
                                CABLE DROP (FIBRA OPTICA)
                            </td>
                            <td className="border border-gray-400 text-center font-bold uppercase align-middle text-[10px]">
                                1$ POR METRO LINEAL
                            </td>
                            <td colSpan="2" className="relative border border-gray-400">
                                <div className="absolute bottom-1 right-1 text-[6px] font-bold uppercase text-black">FIRMA CLIENTE</div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    );
};

export default OrderPage;
