import React from 'react';

const FiberPage = ({ data }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="print-container bg-white p-0">
            {/* ================= PAGE 1 ================= */}
            <div className="print-page w-[210mm] h-[297mm] mx-auto p-8 bg-white text-black font-sans relative overflow-hidden flex flex-col box-border print:m-0 print:shadow-none">

                {/* HEADER */}
                <div className="flex justify-between items-start mb-4">
                    <div className="w-40">
                        <img src="/print_logo.png" alt="WISP" className="w-full object-contain" />
                    </div>
                    <div className="text-right text-[10px] text-gray-500 w-2/3 font-bold uppercase leading-tight">
                        <p>TÉRMINOS CONDICIONES - POLÍTICAS</p>
                        <p>DEL CONTRATO DE ADHESIÓN PARA LA PRESTACIÓN</p>
                        <p>SERVICIOS DE TRANSPORTE DE DATOS</p>
                        <div className="h-4 bg-[#808080] w-24 ml-auto mt-2"></div>
                    </div>
                </div>

                {/* CONEXIÓN FIBRA ÓPTICA BOX */}
                <div className="border border-black mb-1">
                    <div className="bg-[#bfbfbf] py-1 text-center font-bold text-base border-b border-black uppercase text-black">
                        CONEXIÓN FIBRA ÓPTICA
                    </div>
                    <div className="bg-white py-1 text-center font-bold text-sm uppercase text-black">
                        DATOS CLIENTE
                    </div>
                    <div className="grid grid-cols-12 text-sm border-t border-black">
                        <div className="col-span-3 border-b border-r border-black py-1 px-2 font-black uppercase text-[10px]">CLIENTE:</div>
                        <div className="col-span-9 border-b border-black py-1 px-2 uppercase text-[10px]">{data?.name || ''} {data?.surname || ''}</div>

                        <div className="col-span-3 border-b border-r border-black py-1 px-2 font-black uppercase text-[10px]">DIRECCIÓN:</div>
                        <div className="col-span-9 border-b border-black py-1 px-2 uppercase text-[9px]">{data?.address || ''}</div>

                        <div className="col-span-1 border-b border-r border-black py-1 px-1 font-black uppercase text-[9px] underline flex items-center">C.I:</div>
                        <div className="col-span-5 border-b border-r border-black py-1 px-2 uppercase text-[10px]">{data?.ci || ''}</div>
                        <div className="col-span-2 border-b border-r border-black py-1 px-1 font-black uppercase text-[9px] flex items-center justify-center">TELEF:</div>
                        <div className="col-span-4 border-b border-black py-1 px-2 uppercase text-[10px]">{data?.phone || ''}</div>

                        <div className="col-span-3 border-b border-r border-black py-1 px-2 font-black uppercase text-[10px]">CORREO:</div>
                        <div className="col-span-3 border-b border-r border-black py-1 px-2 break-all text-[9px]">{data?.email || ''}</div>
                        <div className="col-span-3 border-b border-r border-black py-1 px-1 font-black uppercase text-[9px] flex items-center justify-center">FECHA DE <span className="underline ml-1">INSTALACIÓN:</span></div>
                        <div className="col-span-3 border-b border-black py-1 px-2 uppercase text-[10px]">{data?.installDate || ''}</div>

                        <div className="col-span-3 border-r border-black py-1 px-2 font-black uppercase text-[10px]">ROUTER:</div>
                        <div className="col-span-3 border-r border-black py-1 px-2 uppercase text-[10px]">{data?.router || ''}</div>
                        <div className="col-span-2 border-r border-black py-1 px-1 font-black uppercase text-[9px] flex items-center justify-center">TÉCNICO:</div>
                        <div className="col-span-4 py-1 px-2 uppercase text-[10px]">{data?.technician || ''}</div>
                    </div>
                </div>

                {/* EQUIPOS SUMINISTRADO BOX */}
                <div className="border border-black mb-1 mt-2">
                    <div className="bg-[#bfbfbf] py-1 text-center font-bold text-sm border-b border-black uppercase text-black">
                        EQUIPOS SUMINISTRADO POR WISP TÁCHIRA EN CALIDAD DE PRÉSTAMO
                    </div>
                    <div className="grid grid-cols-12 text-sm">
                        <div className="col-span-2 border-b border-r border-black py-1 px-2 font-black uppercase text-[9px]">ONU #</div>
                        <div className="col-span-3 border-b border-r border-black py-1 px-2 uppercase text-[10px]">{data?.onuSerial || ''}</div>
                        <div className="col-span-1 border-b border-r border-black py-1 px-2 font-black uppercase text-[9px] flex items-center justify-center">MAC:</div>
                        <div className="col-span-6 border-b border-black py-1 px-2 uppercase text-[10px]">{data?.mac || ''}</div>

                        <div className="col-span-2 border-b border-r border-black py-1 px-2 font-black uppercase text-[9px]">PUERTO <span className="text-red-600">nº</span></div>
                        <div className="col-span-7 border-b border-r border-black py-1 px-2 uppercase text-[10px]">{data?.napPort || ''}</div>
                        <div className="col-span-1 border-b border-r border-black py-1 px-2 font-black uppercase text-[9px] flex items-center justify-center">ROSETA:</div>
                        <div className="col-span-2 border-b border-black py-1 px-2"></div>

                        <div className="col-span-2 border-r border-black py-2 px-2 font-black uppercase text-[9px] flex items-center">OTRO EQUIPOS</div>
                        <div className="col-span-9 py-2 px-2 uppercase text-[10px] flex items-center">SC/APC-SC/UPC 3.0mm G657A1 LZH 3M</div>
                    </div>
                </div>

                {/* RECOMENDACIÓN TÉCTRICA BOX */}
                <div className="border border-black mb-1">
                    <div className="bg-[#bfbfbf] py-1 text-center font-bold text-sm border-b border-black uppercase text-black">
                        RECOMENDACIÓN TÉCTRICA
                    </div>
                    <div className="p-2 text-[10px] text-center font-black uppercase leading-tight bg-white">
                        <p>EN CASO DE VIAJE: SI EL CLIENTE NO DEVUELVE LOS EQUIPOS INSTALADOS EN CALIDAD DE PRÉSTAMO DEBERÁ PAGAR A LA EMPRESA EL VALOR DE 60$ EQUIVALENTE AL VALOR DE EQUIPO; EN CASO DE NO PARTICIPAR LA SUSPENSIÓN DEL SERVICIO DEBERÁ CANCELAR LAS FACTURAS QUE SE GENEREN EN EL SISTEMA SIN EXCEPCIÓN.</p>
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
                <div className="mt-auto page-break-inside-avoid">
                    <div className="grid grid-cols-4 border-2 border-black">
                        {/* Headers */}
                        <div className="bg-[#c2d9ff] border-r border-b-2 border-black p-2 flex flex-col items-center justify-center text-center h-20 relative">
                            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
                            <span className="text-xl font-black italic tracking-tighter">PLAN</span>
                            <span className="text-2xl font-black text-black leading-none tracking-tighter">250 Mbps</span>
                        </div>
                        <div className="bg-[#c2d9ff] border-r border-b-2 border-black p-2 flex flex-col items-center justify-center text-center h-20 relative">
                            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
                            <span className="text-xl font-black italic tracking-tighter">PLAN</span>
                            <span className="text-2xl font-black text-black leading-none tracking-tighter">400 Mbps</span>
                        </div>
                        <div className="bg-[#c2d9ff] border-r border-b-2 border-black p-2 flex flex-col items-center justify-center text-center h-20 relative">
                            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
                            <span className="text-xl font-black italic tracking-tighter">PLAN</span>
                            <span className="text-2xl font-black text-black leading-none tracking-tighter">600 Mbps</span>
                        </div>
                        <div className="bg-[#c2d9ff] border-b-2 border-black p-2 flex flex-col items-center justify-center text-center h-20 relative">
                            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-black rounded-full"></div>
                            <span className="text-xl font-black italic tracking-tighter">PLAN</span>
                            <span className="text-2xl font-black text-black leading-none tracking-tighter">1.00 GB</span>
                        </div>

                        {/* Recommendation */}
                        <div className="border-r border-b border-black p-1 text-[8px] font-bold uppercase bg-white h-10 flex items-center justify-center text-center leading-tight">
                            RECOMENDAMOS USO DE<br />ROUTER GB
                        </div>
                        <div className="border-r border-b border-black p-1 text-[8px] font-bold uppercase bg-white h-10 flex items-center justify-center text-center leading-tight">
                            RECOMENDAMOS USO DE<br />ROUTER GB
                        </div>
                        <div className="border-r border-b border-black p-1 text-[8px] font-bold uppercase bg-white h-10 flex items-center justify-center text-center leading-tight">
                            RECOMENDAMOS USO DE<br />ROUTER GB
                        </div>
                        <div className="border-b border-black p-1 text-[8px] font-bold uppercase bg-white h-10 flex items-center justify-center text-center leading-tight">
                            RECOMENDAMOS USO DE<br />ROUTER GB
                        </div>

                        {/* Service Type */}
                        <div className="border-r border-b border-black p-1 text-[9px] font-black uppercase bg-white h-10 flex items-center justify-center">
                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                SERVICIO BÁSICO<br />RESIDENCIAL
                            </div>
                        </div>
                        <div className="border-r border-b border-black p-1 text-[9px] font-black uppercase bg-white h-10 flex items-center justify-center">
                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                SERVICIO<br />RESIDENCIAL
                            </div>
                        </div>
                        <div className="border-r border-b border-black p-1 text-[9px] font-black uppercase bg-white h-10 flex items-center justify-center">
                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                SERVICIO<br />RESIDENCIAL
                            </div>
                        </div>
                        <div className="border-b border-black p-1 text-[9px] font-black uppercase bg-white h-10 flex items-center justify-center">
                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                SERVICIO<br />RESIDENCIAL
                            </div>
                        </div>

                        {/* Costs */}
                        <div className="border-r border-b border-black p-1 text-base font-black uppercase text-center bg-white h-10 flex items-center justify-center">
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                COSTO: 25$
                            </div>
                        </div>
                        <div className="border-r border-b border-black p-1 text-base font-black uppercase text-center bg-white h-10 flex items-center justify-center">
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                COSTO: 35$
                            </div>
                        </div>
                        <div className="border-r border-b border-black p-1 text-base font-black uppercase text-center bg-white h-10 flex items-center justify-center">
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                COSTO: 45$
                            </div>
                        </div>
                        <div className="border-b border-black p-1 text-base font-black uppercase text-center bg-white h-10 flex items-center justify-center">
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                COSTO: 55$
                            </div>
                        </div>

                        {/* Resale Warning Row */}
                        <div className="bg-[#c2d9ff] border-r border-black p-1 text-[10px] font-black uppercase text-center h-8 flex items-center justify-center">
                            PROHIBIDA SU REVENTA
                        </div>
                        <div className="bg-[#c2d9ff] border-r border-black p-1 text-[10px] font-black uppercase text-center h-8 flex items-center justify-center">
                            PROHIBIDA SU REVENTA
                        </div>
                        <div className="bg-[#c2d9ff] border-r border-black p-1 text-[10px] font-black uppercase text-center h-8 flex items-center justify-center">
                            PROHIBIDA SU REVENTA
                        </div>
                        <div className="bg-[#c2d9ff] p-1 text-[10px] font-black uppercase text-center h-8 flex items-center justify-center">
                            PROHIBIDA SU REVENTA
                        </div>
                    </div>
                </div>

            </div>


            {/* ================= PAGE 2 ================= */}
            <div className="print-page w-[210mm] h-[297mm] mx-auto p-8 bg-white text-black font-sans relative overflow-hidden flex flex-col box-border print:m-0 print:shadow-none">

                {/* HEADER PAGE 2 */}
                <div className="flex justify-between items-start mb-4">
                    <div className="w-40">
                        <img src="/print_logo.png" alt="WISP" className="w-full object-contain" />
                    </div>
                    <div className="text-right text-[10px] text-gray-500 w-2/3 font-bold uppercase leading-tight">
                        <p>TÉRMINOS CONDICIONES - POLÍTICAS</p>
                        <p>DEL CONTRATO DE ADHESIÓN PARA LA PRESTACIÓN</p>
                        <p>SERVICIOS DE TRANSPORTE DE DATOS</p>
                        <div className="h-4 bg-[#808080] w-24 ml-auto mt-2"></div>
                    </div>
                </div>

                <h2 className="text-center font-black text-2xl mb-4 uppercase underline tracking-tighter">POLÍTICAS CONDICIONES Y GARANTÍAS DEL SERVICIO</h2>

                <div className="text-[10px] text-justify space-y-3 uppercase leading-tight text-black">
                    <p>
                        <span className="bg-[#ffff00] font-black underline">NUESTRO SERVICIO HA SIDO DISEÑADO Y PROGRAMADO PARA USO BÁSICO RESIDENCIAL:</span> NAVEGACIÓN ILIMITADA CON DESCARGA DIARIA ILIMITADA, INDICADO EN EL PLAN CONTRATADO. ¡GARANTIZAMOS VELOCIDAD A TRAVÉS DE UN CLICK!. <span className="underline">SOLO EN EQUIPOS DE ÚLTIMA GENERACIÓN.</span>
                    </p>

                    <p>
                        EN CASO DE DETECTARSE <span className="font-bold underline">RE-VENTA POR MEDIO DE: ROUTER EXTENSORES DE SEÑAL, REPETIDORES, PARA COMPARTIR SU PLAN CONTRATADO CON VECINOS, EL MISMO</span> PODRÁ SER SUSPENDIDO <span className="font-bold underline">SIN DEVOLUCIONES NI PREVIO AVISO.</span>
                    </p>

                    <p>
                        ES NECESARIO QUE EL CLIENTE PERMANEZCA EN EL SITIO AL MOMENTO DE LA INSTALACIÓN Y EN SERVICIOS TÉCNICOS PROGRAMADOS, PARA VALIDAR LA SOLUCIÓN Y RECOMENDACIONES DEL SERVICIO RECIBIDO.
                    </p>

                    <p className="font-bold">
                        SU FECHA DE <span className="bg-[#00ff00] font-black px-1">PAGO</span>, LOS DÍAS: _______ DE CADA MES. Y SU FECHA DE <span className="bg-[#ff0000] text-white font-black px-1">CORTE</span> SON LOS DÍAS: _______ DE CADA MES.
                        <br />
                        <span className="font-black underline block mt-1">LA EMPRESA SE RESERVA EL DERECHO DE SUSPENDER EL SERVICIO Y DISPONER DEL PUERTO EN CASO DE INCUMPLIMIENTO DEL PAGO.</span>
                    </p>

                    <p className="font-black">
                        LA ONU ASIGNADA EN CALIDAD DE PRÉSTAMO Y LAS ONU-WIFI. SOLO PODRÁN SER ADMINISTRADAS POR UNO DE NUESTROS TEC. AUTORIZADOS, PARA GARANTIZAR EL FUNCIONAMIENTO Y CONFIGURACIÓN. EN CASO DE QUE EL CLIENTE REALICE INTENTOS DE CAMBIOS PUEDE COACCIONAR LA DESCONF. Y <span className="underline">EL COSTO DEL SERVICIO 10$</span>
                    </p>

                    <p>
                        POR POLÍTICAS DE LA EMPRESA, NO ESTÁ PERMITIDO EL USO DE TORRENT.
                    </p>

                    <p>
                        LA INSTALACIÓN DEBE SER REALIZADA POR UNO DE NUESTRO PERSONAL TÉCNICO AUTORIZADO. EN CASO DE QUE EL CLIENTE MOVILICE LA INSTALACIÓN. SERÁ MOTIVO DE SUSPENSIÓN.
                    </p>

                    <p>
                        EN CASO DE QUE EL CLIENTE OCASIONE DAÑOS A LOS EQUIPOS SUMINISTRADOS EN CALIDAD DE PRÉSTAMO: G/EPON ONU Y CABLE PATCH CORD FIBRA: SC/APC TENDRÁ UN COSTO DE: G/EPON ONU (20$) Y CABLE PATCH CORD FIBRA : SC/APC (15$) + EL COSTO DE SERVICIO TÉCNICO. RECOMENDAMOS EL USO DE MINIUPS
                        <br /><span className="block mt-1 font-black">LA DES-INSTALACIÓN TIENE UN COSTO DE 10$. ____________________</span>
                        <span className="block font-black">LA MUDANZA TIENE UN COSTO DE 20$ - SUJETO A DISPONIBILIDAD DE PUERTO: ____________________</span>
                    </p>

                    <p>
                        NUESTROS PLANES CUENTAN CON MÁXIMOS DE VELOCIDAD LOS CUALES PUEDEN SER ALCANZADOS CON <span className="bg-[#ffff00] font-black">ROUTER DE TECNOLOGÍA ULTIMA GENERACIÓN: WI-FI-5 / WI-FI-6</span> - <span className="underline">CON PROCESADORES DESDE: [QUALCOMM 1 GHZ DE 1 O MÁS NÚCLEOS] Y PUERTOS DE ENTRADA 1000MBPS.</span>
                    </p>

                    <p>
                        PARA EL USO DE APP (GAMER-STREAMER - VOIP -IP TV - WEB CAM Y AFINES) LA EMPRESA SE ABSTIENE DE RESPONSABILIDADES SOBRE SU BUEN FUNCIONAMIENTO, PUESTO QUE TODAS LAS APLICACIONES STREAMING DEPENDEN DE <span className="underline">RECURSOS ESPECIALES EN LOS EQUIPOS EMPLEADOS POR EL CLIENTE.</span>
                    </p>

                    <p>
                        TODOS NUESTROS PLANES <span className="underline italic">INCLUYEN SERVICIO</span> TÉCNICO CON COSTO, PARA SOLUCIONAR: /REPORTE DE QUEJAS/SERVICIO TÉCNICO Y/O INSPECCIONES.WAPP: (424-7571407)
                        <br />
                        <span className="underline">LOS SERVICIO TÉCNICOS ESPECIALES SOLICITADOS POR EL CLIENTE A LA EMPRESA, PARA RESOLVER PROBLEMAS DE RED LOCAL</span>
                        <br />
                        <span className="bg-[#ffff00] font-black block mt-1 px-1">TIENE UN COSTO DE 20$ POR HORA, EL PAGO DE SU PLAN MENSUAL NO INCLUYE TRABAJOS ADICIONALES (SERVICIOS TÉCNICOS SOLICITADOS POR EL CLIENTE)</span>
                    </p>

                    <p className="bg-[#ffff00] font-black p-1 border border-black border-dashed">
                        LA EMPRESA NO SE HACE RESPONSABLE POR NINGÚN TRABAJO ADICIONAL REALIZADO NUESTROS TÉCNICOS, CÓMO: PROGRAMACIÓN DE RED INTERNA, TELEVISIONES CONSOLAS DE VIDEOJUEGOS, TELÉFONOS CELULARES POR ELLO SERÁ NECESARIO <span className="underline text-blue-700">QUE EL</span> CLIENTE CONTRATE UN TÉCNICO DE SU CONFIANZA CAPACITADO PARA REALIZAR DICHOS TRABAJOS EN SU RED LOCAL Y/O EQUIPOS.
                    </p>

                    <div className="text-[10px] space-y-1">
                        <p>ES NECESARIO MANTENER EL SERVICIO ACTIVO PARA QUE SUS GARANTÍAS NO SEAN INTERRUMPIDAS.</p>
                        <p>NO SE ACEPTAN DEVOLUCIONES NI INDEMNIZACIONES UNA VEZ VALIDADA LA INSTALACIÓN CON EL CLIENTE.</p>
                        <p className="font-black underline block mt-1 text-[11px]">LA EMPRESA SE RESERVA EL DERECHO DE SUSPENDER EL SERVICIO Y DISPONER DEL PUERTO. EN CASO DEL INCUMPLIMIENTO DE LAS CLAUSURAS ANTERIORES EN EL MOMENTO QUE LO DECIDA.</p>
                        <p className="opacity-80 italic normal-case text-[8px]">
                            EL EQUIPO ASIGNADO SOLO PUEDE SER ADMINISTRADO POR OFICINA. en caso de requerir cambio de usuario y clave wifi. deberá dirigirse a la oficina. en caso de determinarse manipulación por parte del cliente. será motivo de suspensión del servicio y será desinstalado. EL PAGO REALIZADO POR LA MENSUALIDAD NO INCLUYE TRABAJOS ADICIONALES POR FALLAS INTERNAS.
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

export default FiberPage;
