import React from 'react';

const StandardFiberPage = ({ data }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="print-container bg-white p-0">
            {/* ================= PAGE 1 ================= */}
            <div className="print-page w-[210mm] h-[297mm] mx-auto p-8 bg-white text-black font-sans relative overflow-hidden flex flex-col justify-between box-border print:m-0 print:shadow-none">

                {/* HEADER */}
                <div className="flex justify-between items-start mb-4">
                    <div className="w-40">
                        <img src="/print_logo.png" alt="WISP" className="w-full object-contain" />
                    </div>
                    <div className="text-right text-[10px] text-gray-500 w-2/3 font-bold uppercase leading-tight">
                        <p>T�RMINOS CONDICIONES - POL�TICAS</p>
                        <p>DEL CONTRATO DE ADHESI�N PARA LA PRESTACI�N</p>
                        <p>SERVICIOS DE TRANSPORTE DE DATOS</p>
                        <div className="h-4 bg-[#808080] w-24 ml-auto mt-2"></div>
                    </div>
                </div>

                {/* NOTES SECTION */}
                {data?.notes && (
                    <div className="flex-grow flex items-center justify-end py-8">
                        <div className="text-right max-w-4xl w-full">
                            <p className="text-base font-black uppercase whitespace-pre-wrap">{data.notes}</p>
                        </div>
                    </div>
                )}
                {/* T�TULO AGREGADO AQU� */}
                <div className="mb-2">
                    <h1 className="text-xl font-black uppercase text-center tracking-widest border-b-2 border-black pb-1">
                        Contrato de Adhesi�n y Registro de Instalaci�n
                    </h1>
                </div>
                {/* CONTENT BOXES - At bottom */}
                <div>

                    {/* CONEXI�N FIBRA �PTICA BOX */}
                    <div className="border border-black mb-1">
                        <div className="bg-[#bfbfbf] py-1 text-center font-bold text-base border-b border-black uppercase text-black">
                            CONEXI�N FIBRA �PTICA
                        </div>
                        <div className="bg-white py-1 text-center font-bold text-sm uppercase text-black">
                            DATOS CLIENTE
                        </div>
                        <div className="grid grid-cols-12 text-sm border-t border-black">
                            <div className="col-span-3 border-b border-r border-black py-1 px-2 font-black uppercase text-[10px]">CLIENTE:</div>
                            <div className="col-span-9 border-b border-black py-1 px-2 uppercase text-[10px]">{data?.name || ''} {data?.surname || ''}</div>

                            <div className="col-span-3 border-b border-r border-black py-1 px-2 font-black uppercase text-[10px]">DIRECCI�N:</div>
                            <div className="col-span-9 border-b border-black py-1 px-2 uppercase text-[9px]">{data?.address || ''}</div>

                            <div className="col-span-1 border-b border-r border-black py-1 px-1 font-black uppercase text-[9px] underline flex items-center">C.I:</div>
                            <div className="col-span-5 border-b border-r border-black py-1 px-2 uppercase text-[10px]">{data?.ci || ''}</div>
                            <div className="col-span-2 border-b border-r border-black py-1 px-1 font-black uppercase text-[9px] flex items-center justify-center">TELEF:</div>
                            <div className="col-span-4 border-b border-black py-1 px-2 uppercase text-[10px]">{data?.phone || ''}</div>

                            <div className="col-span-3 border-b border-r border-black py-1 px-2 font-black uppercase text-[10px]">CORREO:</div>
                            <div className="col-span-3 border-b border-r border-black py-1 px-2 break-all text-[9px]">{data?.email || ''}</div>
                            <div className="col-span-3 border-b border-r border-black py-1 px-1 font-black uppercase text-[9px] flex items-center justify-center">FECHA DE <span className="underline ml-1">INSTALACI�N:</span></div>
                            <div className="col-span-3 border-b border-black py-1 px-2 uppercase text-[10px]">{data?.installDate || ''}</div>

                            <div className="col-span-3 border-r border-black py-1 px-2 font-black uppercase text-[10px]">ROUTER:</div>
                            <div className="col-span-3 border-r border-black py-1 px-2 uppercase text-[10px]">{data?.router || ''}</div>
                            <div className="col-span-2 border-r border-black py-1 px-1 font-black uppercase text-[9px] flex items-center justify-center">T�CNICO:</div>
                            <div className="col-span-4 py-1 px-2 uppercase text-[10px]">{data?.technician || ''}</div>
                        </div>
                    </div>

                    {/* EQUIPOS SUMINISTRADO BOX */}
                    <div className="border border-black mb-1 mt-2">
                        <div className="bg-[#bfbfbf] py-1 text-center font-bold text-sm border-b border-black uppercase text-black">
                            EQUIPOS SUMINISTRADO POR WISP T�CHIRA EN CALIDAD DE PR�STAMO
                        </div>
                        <div className="grid grid-cols-12 text-sm">
                            <div className="col-span-2 border-b border-r border-black py-1 px-2 font-black uppercase text-[9px]">ONU #</div>
                            <div className="col-span-3 border-b border-r border-black py-1 px-2 uppercase text-[10px]">{data?.onuSerial || ''}</div>
                            <div className="col-span-1 border-b border-r border-black py-1 px-2 font-black uppercase text-[9px] flex items-center justify-center">MAC:</div>
                            <div className="col-span-6 border-b border-black py-1 px-2 uppercase text-[10px]">{data?.macAddress || ''}</div>

                            <div className="col-span-2 border-b border-r border-black py-1 px-2 font-black uppercase text-[9px]">PUERTO <span className="text-red-600">n�</span></div>
                            <div className="col-span-7 border-b border-r border-black py-1 px-2 uppercase text-[10px]">{data?.napPort || ''}</div>
                            <div className="col-span-1 border-b border-r border-black py-1 px-2 font-black uppercase text-[9px] flex items-center justify-center">ROSETA:</div>
                            <div className="col-span-2 border-b border-black py-1 px-2"></div>

                            <div className="col-span-2 border-r border-black py-2 px-2 font-black uppercase text-[9px] flex items-center">OTRO EQUIPOS</div>
                            <div className="col-span-9 py-2 px-2 uppercase text-[10px] flex items-center">SC/APC-SC/UPC 3.0mm G657A1 LZH 3M</div>
                        </div>
                    </div>

                    {/* RECOMENDACI�N T�CTRICA BOX */}
                    <div className="border border-black mb-1">
                        <div className="bg-[#bfbfbf] py-1 text-center font-bold text-sm border-b border-black uppercase text-black">
                            RECOMENDACI�N T�CNICA
                        </div>
                        <div className="p-2 text-[10px] text-center font-black uppercase leading-tight bg-white">
                            <p>EN CASO DE VIAJE: SI EL CLIENTE NO DEVUELVE LOS EQUIPOS INSTALADOS EN CALIDAD DE PR�STAMO DEBER� PAGAR A LA EMPRESA EL VALOR DE 60$ EQUIVALENTE AL VALOR DE EQUIPO; EN CASO DE NO PARTICIPAR LA SUSPENSI�N DEL SERVICIO DEBER� CANCELAR LAS FACTURAS QUE SE GENEREN EN EL SISTEMA SIN EXCEPCI�N.</p>
                        </div>
                    </div>

                    {/* FIRMA CLIENTE */}
                    <div className="grid grid-cols-12 mb-2 border border-black text-black h-12">
                        <div className="col-span-2 border-r border-black px-2 py-1 flex items-start">
                            <span className="font-black text-[9px] uppercase">FIRMA CLIENTE:</span>
                        </div>
                        <div className="col-span-7 border-r border-black"></div>
                        <div className="col-span-1 border-r border-black px-1 py-1 flex items-start">
                            <span className="font-black text-[9px] uppercase">CI:</span>
                        </div>
                        <div className="col-span-2"></div>
                    </div>

                    {/* PLANS TABLE - BLUE */}
                    <div className="page-break-inside-avoid">
                        <div className="grid grid-cols-4 border-2 border-black">
                            {(() => {
                                const plans = [
                                    { label: '250 Mbps', cost: '25$' },
                                    { label: '400 Mbps', cost: '35$' },
                                    { label: '600 Mbps', cost: '45$' },
                                    { label: '1.00 GB', cost: '55$' },
                                ];
                                const selectedPlan = (data && data.plan) ? String(data.plan).trim() : '';
                                return (
                                    <>
                                        {plans.map((p, i) => {
                                            const isSelected = selectedPlan === p.label;
                                            const headerClass = `p-2 flex flex-col items-center justify-center text-center h-20 relative ${i < 3 ? 'border-r' : ''} ${isSelected ? 'bg-[#fffbe6] border-4 border-yellow-400' : 'bg-[#c2d9ff] border-b-2 border-black'}`;
                                            return (
                                                <div key={p.label} className={headerClass}>
                                                    <span className="text-xl font-black italic tracking-tighter">PLAN</span>
                                                    <span className={`text-2xl leading-none tracking-tighter ${isSelected ? 'font-extrabold' : 'font-black'}`}>{p.label}</span>
                                                    {isSelected && (
                                                        <div className="absolute top-2 right-2 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}

                                        {/* Recommendation Row */}
                                        {plans.map((p, i) => (
                                            <div key={`rec-${i}`} className={`${i < 3 ? 'border-r' : ''} border-b border-black p-1 text-[8px] font-bold uppercase bg-white h-10 flex items-center justify-center text-center leading-tight`}>
                                                RECOMENDAMOS USO DE<br />ROUTER GB
                                            </div>
                                        ))}

                                        {/* Service Type Row */}
                                        {plans.map((p, i) => (
                                            <div key={`svc-${i}`} className={`${i < 3 ? 'border-r' : ''} border-b border-black p-1 text-[9px] font-black uppercase bg-white h-10 flex items-center justify-center`}>
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                                    SERVICIO<br />RESIDENCIAL
                                                </div>
                                            </div>
                                        ))}

                                        {/* Costs Row */}
                                        {plans.map((p, i) => {
                                            const isSelected = selectedPlan === p.label;
                                            return (
                                                <div key={`cost-${i}`} className={`${i < 3 ? 'border-r' : ''} border-b border-black p-1 text-base uppercase text-center bg-white h-10 flex items-center justify-center`}>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                                        <span className={`${isSelected ? 'font-extrabold text-lg' : 'font-black'}`}>COSTO: {p.cost}</span>
                                                    </div>
                                                </div>
                                            );
                                        })}

                                        {/* Resale Warning Row */}
                                        {plans.map((p, i) => (
                                            <div key={`res-${i}`} className={`${i < 3 ? 'border-r' : ''} bg-[#c2d9ff] ${i < 3 ? 'border-r' : ''} border-black p-1 text-[10px] font-black uppercase text-center h-8 flex items-center justify-center`}>
                                                PROHIBIDA SU REVENTA
                                            </div>
                                        ))}
                                    </>
                                );
                            })()}
                        </div>
                    </div>

                </div>

            </div>
            {/* End of CONTENT BOXES wrapper */}

            {/* ================= PAGE 2 ================= */}
            <div className="print-page w-[210mm] h-[297mm] mx-auto p-8 bg-white text-black font-sans relative overflow-hidden flex flex-col box-border print:m-0 print:shadow-none">

                {/* HEADER PAGE 2 */}
                <div className="flex justify-between items-start mb-4">
                    <div className="w-40">
                        <img src="/print_logo.png" alt="WISP" className="w-full object-contain" />
                    </div>
                    <div className="text-right text-[10px] text-gray-500 w-2/3 font-bold uppercase leading-tight">
                        <p>T�RMINOS CONDICIONES - POL�TICAS</p>
                        <p>DEL CONTRATO DE ADHESI�N PARA LA PRESTACI�N</p>
                        <p>SERVICIOS DE TRANSPORTE DE DATOS</p>
                        <div className="h-4 bg-[#808080] w-24 ml-auto mt-2"></div>
                    </div>
                </div>



                {/* POLICIES CONTENT - At bottom */}


                <h2 className="text-center font-black text-2xl mb-4 uppercase underline tracking-tighter">POL�TICAS CONDICIONES Y GARANT�AS DEL SERVICIO</h2>

                <div className="text-[10px] text-justify space-y-3 uppercase leading-tight text-black pr-[30mm]">
                    <p>
                        <span className="bg-[#ffff00] font-black underline">NUESTRO SERVICIO HA SIDO DISE�ADO Y PROGRAMADO PARA USO B�SICO RESIDENCIAL:</span> NAVEGACI�N ILIMITADA CON DESCARGA DIARIA ILIMITADA, INDICADO EN EL PLAN CONTRATADO. �GARANTIZAMOS VELOCIDAD A TRAV�S DE UN CLICK!. <span className="underline">SOLO EN EQUIPOS DE �LTIMA GENERACI�N.</span>
                    </p>

                    <p>
                        EN CASO DE DETECTARSE <span className="font-bold underline">RE-VENTA POR MEDIO DE: ROUTER EXTENSORES DE SE�AL, REPETIDORES, PARA COMPARTIR SU PLAN CONTRATADO CON VECINOS, EL MISMO</span> PODR� SER SUSPENDIDO <span className="font-bold underline">SIN DEVOLUCIONES NI PREVIO AVISO.</span>
                    </p>

                    <p>
                        ES NECESARIO QUE EL CLIENTE PERMANEZCA EN EL SITIO AL MOMENTO DE LA INSTALACI�N Y EN SERVICIOS T�CNICOS PROGRAMADOS, PARA VALIDAR LA SOLUCI�N Y RECOMENDACIONES DEL SERVICIO RECIBIDO.
                    </p>

                    <p className="font-bold">
                        SU FECHA DE <span className="bg-[#00ff00] font-black px-1">PAGO</span>, LOS D�AS: _______ DE CADA MES. Y SU FECHA DE <span className="bg-[#ff0000] text-white font-black px-1">CORTE</span> SON LOS D�AS: _______ DE CADA MES.
                        <br />
                        <span className="font-black underline block mt-1">LA EMPRESA SE RESERVA EL DERECHO DE SUSPENDER EL SERVICIO Y DISPONER DEL PUERTO EN CASO DE INCUMPLIMIENTO DEL PAGO.</span>
                    </p>

                    <p className="font-black">
                        LA ONU ASIGNADA EN CALIDAD DE PR�STAMO Y LAS ONU-WIFI. SOLO PODR�N SER ADMINISTRADAS POR UNO DE NUESTROS TEC. AUTORIZADOS, PARA GARANTIZAR EL FUNCIONAMIENTO Y CONFIGURACI�N. EN CASO DE QUE EL CLIENTE REALICE INTENTOS DE CAMBIOS PUEDE COACCIONAR LA DESCONF. Y <span className="underline">EL COSTO DEL SERVICIO 10$</span>
                    </p>

                    <p>
                        POR POL�TICAS DE LA EMPRESA, NO EST� PERMITIDO EL USO DE TORRENT.
                    </p>

                    <p>
                        LA INSTALACI�N DEBE SER REALIZADA POR UNO DE NUESTRO PERSONAL T�CNICO AUTORIZADO. EN CASO DE QUE EL CLIENTE MOVILICE LA INSTALACI�N. SER� MOTIVO DE SUSPENSI�N.
                    </p>

                    <p>
                        EN CASO DE QUE EL CLIENTE OCASIONE DA�OS A LOS EQUIPOS SUMINISTRADOS EN CALIDAD DE PR�STAMO: G/EPON ONU Y CABLE PATCH CORD FIBRA: SC/APC TENDR� UN COSTO DE: G/EPON ONU (20$) Y CABLE PATCH CORD FIBRA : SC/APC (15$) + EL COSTO DE SERVICIO T�CNICO. RECOMENDAMOS EL USO DE MINIUPS
                        <br /><span className="block mt-1 font-black">LA DES-INSTALACI�N TIENE UN COSTO DE 10$. ____________________</span>
                        <span className="block font-black">LA MUDANZA TIENE UN COSTO DE 20$ - SUJETO A DISPONIBILIDAD DE PUERTO: ____________________</span>
                    </p>

                    <p>
                        NUESTROS PLANES CUENTAN CON M�XIMOS DE VELOCIDAD LOS CUALES PUEDEN SER ALCANZADOS CON <span className="bg-[#ffff00] font-black">ROUTER DE TECNOLOG�A ULTIMA GENERACI�N: WI-FI-5 / WI-FI-6</span> - <span className="underline">CON PROCESADORES DESDE: [QUALCOMM 1 GHZ DE 1 O M�S N�CLEOS] Y PUERTOS DE ENTRADA 1000MBPS.</span>
                    </p>

                    <p>
                        PARA EL USO DE APP (GAMER-STREAMER - VOIP -IP TV - WEB CAM Y AFINES) LA EMPRESA SE ABSTIENE DE RESPONSABILIDADES SOBRE SU BUEN FUNCIONAMIENTO, PUESTO QUE TODAS LAS APLICACIONES STREAMING DEPENDEN DE <span className="underline">RECURSOS ESPECIALES EN LOS EQUIPOS EMPLEADOS POR EL CLIENTE.</span>
                    </p>

                    <p>
                        TODOS NUESTROS PLANES <span className="underline italic">INCLUYEN SERVICIO</span> T�CNICO CON COSTO, PARA SOLUCIONAR: /REPORTE DE QUEJAS/SERVICIO T�CNICO Y/O INSPECCIONES.WAPP: (424-7571407)
                        <br />
                        <span className="underline">LOS SERVICIO T�CNICOS ESPECIALES SOLICITADOS POR EL CLIENTE A LA EMPRESA, PARA RESOLVER PROBLEMAS DE RED LOCAL</span>
                        <br />
                        <span className="bg-[#ffff00] font-black block mt-1 px-1">TIENE UN COSTO DE 20$ POR HORA, EL PAGO DE SU PLAN MENSUAL NO INCLUYE TRABAJOS ADICIONALES (SERVICIOS T�CNICOS SOLICITADOS POR EL CLIENTE)</span>
                    </p>

                    <p className="bg-[#ffff00] font-black p-1 border border-black border-dashed">
                        LA EMPRESA NO SE HACE RESPONSABLE POR NING�N TRABAJO ADICIONAL REALIZADO NUESTROS T�CNICOS, C�MO: PROGRAMACI�N DE RED INTERNA, TELEVISIONES CONSOLAS DE VIDEOJUEGOS, TEL�FONOS CELULARES POR ELLO SER� NECESARIO <span className="underline text-blue-700">QUE EL</span> CLIENTE CONTRATE UN T�CNICO DE SU CONFIANZA CAPACITADO PARA REALIZAR DICHOS TRABAJOS EN SU RED LOCAL Y/O EQUIPOS.
                    </p>

                    <div className="text-[10px] space-y-1">
                        <p>ES NECESARIO MANTENER EL SERVICIO ACTIVO PARA QUE SUS GARANT�AS NO SEAN INTERRUMPIDAS.</p>
                        <p>NO SE ACEPTAN DEVOLUCIONES NI INDEMNIZACIONES UNA VEZ VALIDADA LA INSTALACI�N CON EL CLIENTE.</p>
                        <p className="font-black underline block mt-1 text-[11px]">LA EMPRESA SE RESERVA EL DERECHO DE SUSPENDER EL SERVICIO Y DISPONER DEL PUERTO. EN CASO DEL INCUMPLIMIENTO DE LAS CLAUSURAS ANTERIORES EN EL MOMENTO QUE LO DECIDA.</p>
                        <p className="opacity-80 italic normal-case text-[8px]">
                            EL EQUIPO ASIGNADO SOLO PUEDE SER ADMINISTRADO POR OFICINA. en caso de requerir cambio de usuario y clave wifi. deber� dirigirse a la oficina. en caso de determinarse manipulaci�n por parte del cliente. ser� motivo de suspensi�n del servicio y ser� desinstalado. EL PAGO REALIZADO POR LA MENSUALIDAD NO INCLUYE TRABAJOS ADICIONALES POR FALLAS INTERNAS.
                        </p>
                    </div>
                </div>

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
                    .page-break-inside-avoid {
                        page-break-inside: avoid;
                    }
                }
            `}</style>
        </div>
    );
};

export default StandardFiberPage;
