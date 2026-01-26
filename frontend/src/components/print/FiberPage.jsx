import React from 'react';

const FiberPage = ({ data }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="print-container">
            {/* ================= PAGE 1: ORDEN DE INSTALACION ================= */}
            <div className="print-page w-[210mm] min-h-[297mm] mx-auto p-8 bg-white text-black text-sm font-sans shadow-lg print:shadow-none print:mb-0 relative">

                {/* HEADER */}
                <div className="flex justify-between items-start mb-2">
                    <div className="w-40">
                        <img src="/print_logo.png" alt="WISP TACHIRA" className="w-full object-contain" />
                    </div>
                    <div className="flex-grow pl-4">
                        <div className="border border-gray-300">
                            <div className="flex text-center border-b border-gray-300 text-lg font-bold text-gray-300">
                                <div className="flex-1 py-1 border-r border-gray-300">DIA</div>
                                <div className="flex-1 py-1 border-r border-gray-300">MES</div>
                                <div className="flex-1 py-1 text-black bg-white">{currentYear}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BASIC INFO */}
                <div className="border border-gray-300 mb-2">
                    <div className="flex border-b border-gray-300">
                        <span className="w-24 pl-2 py-1 font-bold text-xs flex items-center bg-orange-50">CLIENTE:</span>
                        <span className="flex-grow border-l border-gray-300 pl-2 py-1 uppercase">{data.name} {data.surname}</span>
                    </div>
                    <div className="flex border-b border-gray-300">
                        <span className="w-24 pl-2 py-1 font-bold text-xs flex items-center bg-orange-50">DIRECCIÓN:</span>
                        <span className="flex-grow border-l border-gray-300 pl-2 py-1 h-8 overflow-hidden text-xs flex items-center">{data.address}</span>
                    </div>
                    <div className="flex">
                        <span className="w-24 pl-2 py-1 font-bold text-xs flex items-center bg-orange-50">PLAN:</span>
                        <span className="w-1/3 border-l border-r border-gray-300 pl-2 py-1 uppercase">{data.plan}</span>
                        <span className="w-24 pl-2 py-1 font-bold text-xs text-center flex items-center justify-center bg-orange-50">TELEFONO</span>
                        <span className="flex-grow border-l border-gray-300 pl-2 py-1 font-mono">{data.phone}</span>
                    </div>
                </div>

                {/* MATERIAL ENTREGADO */}
                <div className="bg-gray-200 py-1 text-center font-bold text-xs mb-0 border border-t-0 border-gray-300 uppercase">MATERIAL ENTREGADO:</div>

                <div className="border border-gray-300 border-t-0 mb-2 text-xs">
                    {/* ROSETA */}
                    <div className="flex border-b border-gray-300">
                        <div className="w-1/2 text-right pr-4 py-1 font-bold uppercase bg-orange-50">ROSETA</div>
                        <div className="w-1/4 border-l border-r border-gray-300 flex justify-center items-center py-1">
                            <div className="w-4 h-4 border border-black"></div>
                        </div>
                        <div className="w-1/4 text-center py-1 font-bold">REVISADO</div>
                    </div>

                    {/* CONECTORES */}
                    <div className="flex border-b border-gray-300">
                        <div className="w-1/2 text-right pr-4 py-1 font-bold uppercase bg-orange-50">CONECTORES</div>
                        <div className="w-1/4 border-l border-r border-gray-300 flex justify-center items-center py-1">
                            <div className="w-4 h-4 border border-black"></div>
                        </div>
                        <div className="w-1/4 text-center py-1 font-bold">REVISADO</div>
                    </div>

                    {/* PATCH-CORD */}
                    <div className="flex border-b border-gray-300">
                        <div className="w-1/2 text-right pr-4 py-1 font-bold uppercase bg-orange-50">PATCH-CORD: SC/PC - SC/APC</div>
                        <div className="w-1/4 border-l border-r border-gray-300 flex justify-center items-center py-1">
                            <div className="w-4 h-4 border border-black"></div>
                        </div>
                        <div className="w-1/4 text-center py-1 font-bold">REVISADO</div>
                    </div>

                    {/* CABLE DROP */}
                    <div className="flex border-b border-gray-300">
                        <div className="w-1/2 text-right pr-4 py-1 font-bold uppercase bg-orange-50">CABLE DROP (ML)</div>
                        <div className="w-1/4 border-l border-r border-gray-300 flex justify-center items-center py-1">
                            <div className="w-4 h-4 border border-black"></div>
                        </div>
                        <div className="w-1/4 text-center py-1 font-bold">REVISADO</div>
                    </div>

                    {/* ONU SERIAL */}
                    <div className="flex border-b border-gray-300">
                        <div className="w-1/4 text-right pr-4 py-1 font-bold uppercase bg-orange-50">ONU - SERIAL:</div>
                        <div className="w-1/2 border-l border-r border-gray-300 px-2 py-1 font-mono uppercase">{data.onuSerial}</div>
                        <div className="w-1/4 text-center py-1 font-bold">REVISADO</div>
                    </div>

                    {/* IPTV */}
                    <div className="flex flex-col">
                        <div className="flex items-center py-1">
                            <div className="w-1/2 text-right pr-4 font-bold uppercase bg-orange-50">INSTALACION DE IPTV</div>
                            <div className="w-1/2 flex justify-start pl-8 gap-8">
                                <div className="flex items-center gap-2">SI <div className="w-4 h-4 border border-black"></div></div>
                                <div className="flex items-center gap-2">NO <div className="w-4 h-4 border border-black"></div></div>
                            </div>
                        </div>
                        <div className="text-[9px] text-right pr-4 pb-1 uppercase text-gray-600">SI LA RESPUESTA ES NO, EXPRESE EL MOTIVO</div>
                    </div>
                </div>

                {/* SEPARATOR TITLE */}
                <div className="bg-gray-200 py-1 text-center font-bold text-xs border border-gray-300 uppercase mb-0">IMPLEMENTACION DE EQUIPOS Y APROVISIONAMIENTO</div>

                {/* NAP INFO */}
                <div className="bg-gray-400 py-1 text-center font-bold text-lg mb-0 border-x border-b border-gray-300 text-black uppercase">INFORMACION NAP</div>
                <div className="border border-t-0 border-gray-300 text-xs mb-0">
                    {/* ROW 1 */}
                    <div className="flex border-b border-gray-300">
                        <div className="w-1/4 font-bold text-right pr-2 py-1 flex items-center justify-end bg-orange-50">NAP</div>
                        <div className="w-1/4 border-l border-gray-300"></div>
                        <div className="w-1/4 font-bold text-right pr-2 py-1 border-l border-gray-300 flex items-center justify-end bg-orange-50">COORDENADAS</div>
                        <div className="w-[15%] border-l border-gray-300"></div>
                        <div className="flex-grow border-l border-gray-300 flex justify-center items-center">
                            <div className="w-3 h-3 border border-black"></div>
                        </div>
                    </div>
                    {/* ROW 2 */}
                    <div className="flex border-b border-gray-300">
                        <div className="w-1/4 font-bold text-right pr-2 py-1 flex items-center justify-end bg-orange-50">POTENCIA NAP</div>
                        <div className="w-1/4 border-l border-gray-300"></div>
                        <div className="w-1/4 font-bold text-right pr-2 py-1 border-l border-gray-300 flex items-center justify-end bg-orange-50">PUERTO NAP</div>
                        <div className="w-[15%] border-l border-gray-300"></div>
                        <div className="flex-grow border-l border-gray-300 flex justify-center items-center">
                            <div className="w-3 h-3 border border-black"></div>
                        </div>
                    </div>
                    {/* ROW 3 */}
                    <div className="flex border-b border-gray-300">
                        <div className="w-1/4 font-bold text-right pr-2 py-1 flex items-center justify-end bg-orange-50">PUERTO OLT</div>
                        <div className="w-1/4 border-l border-gray-300"></div>
                        <div className="w-1/4 font-bold text-right pr-2 py-1 border-l border-gray-300 flex items-center justify-end bg-orange-50">IP</div>
                        <div className="w-[15%] border-l border-gray-300"></div>
                        <div className="flex-grow border-l border-gray-300 flex justify-center items-center">
                            <div className="w-3 h-3 border border-black"></div>
                        </div>
                    </div>
                </div>

                {/* ONU CLIENT INFO */}
                <div className="bg-gray-400 py-1 text-center font-bold text-lg border-x border-b border-gray-300 text-black uppercase">INFORMACION ONU - CLIENTE</div>
                <div className="border border-t-0 border-gray-300 text-xs mb-2">
                    <div className="flex border-b border-gray-300">
                        <div className="w-1/4 font-bold text-right pr-2 py-1 flex items-center justify-end bg-orange-50">UBICACION DE ONU</div>
                        <div className="w-1/4 border-l border-gray-300"></div>
                        <div className="w-1/4 font-bold text-right pr-2 py-1 border-l border-gray-300 flex items-center justify-end bg-orange-50">COORDENADAS</div>
                        <div className="w-[15%] border-l border-gray-300"></div>
                        <div className="flex-grow border-l border-gray-300 flex justify-center items-center">
                            <div className="w-3 h-3 border border-black"></div>
                        </div>
                    </div>
                    <div className="flex border-b border-gray-300">
                        <div className="w-1/4 font-bold text-right pr-2 py-1 flex items-center justify-end bg-orange-50">TECNICO</div>
                        <div className="w-1/4 border-l border-gray-300 px-2 py-1">{data.technician}</div>
                        <div className="w-1/4 font-bold text-right pr-2 py-1 border-l border-gray-300 flex items-center justify-end bg-orange-50">FECHA INSTALACION</div>
                        <div className="flex-grow border-l border-gray-300 px-2 py-1">{data.installDate}</div>
                    </div>
                    <div className="flex">
                        <div className="w-1/4 font-bold text-right pr-2 py-1 flex items-center justify-end bg-orange-50">VEHICULO</div>
                        <div className="flex-grow border-l border-gray-300">
                            <div className="flex items-end justify-center h-12">
                                <div className="text-[8px] text-blue-700 font-bold uppercase">NOMBRE Y FIRMA DEL CLIENTE</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* ================= PAGE 2: POLICIES ================= */}
            <div className="print-page w-[210mm] min-h-[297mm] mx-auto p-8 bg-white text-black font-sans shadow-lg print:shadow-none print:mb-0 relative text-[11px] leading-snug">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-6 border-b-2 border-gray-300 pb-2">
                    <div className="w-40">
                        <img src="/print_logo.png" alt="WISP Tachira" className="w-full object-contain" />
                    </div>
                    <div className="text-right text-[10px] text-gray-500 w-2/3 font-bold leading-tight">
                        <p>TÉRMINOS CONDICIONES - POLÍTICAS</p>
                        <p>DEL CONTRATO DE ADHESIÓN PARA LA PRESTACIÓN</p>
                        <p>SERVICIOS DE TRANSPORTE DE DATOS</p>
                        <div className="h-4 bg-gray-400 w-24 ml-auto mt-2"></div>
                    </div>
                </div>

                <h2 className="text-center font-bold text-lg mb-4 uppercase">POLÍTICAS CONDICIONES Y GARANTÍAS DEL SERVICIO</h2>

                <div className="p-2 text-[10px] text-justify space-y-4 uppercase">
                    <p>
                        <span className="bg-yellow-300 font-bold">NUESTRO SERVICIO HA SIDO DISEÑADO Y PROGRAMADO PARA USO BÁSICO RESIDENCIAL:</span> NAVEGACIÓN ILIMITADA CON DESCARGA DIARIA ILIMITADA, INDICADO EN EL PLAN CONTRATO. ¡GARANTIZAMOS VELOCIDAD A TRAVÉS DE UN CLICK SOLO <span className="underline">EN EQUIPOS DE ÚLTIMA GENERACIÓN.</span>
                    </p>
                    <p>
                        EN CASO DE DETECTARSE <span className="font-bold underline">RE-VENTA POR MEDIO DE: ROUTER EXTENSORES DE SEÑAL, REPETIDORES, PARA COMPARTIR SU PLAN CONTRATADO CON VECINOS, EL MISMO</span> PODRÁ SER SUSPENDIDO <span className="font-bold underline">SIN DEVOLUCIONES NI PREVIO AVISO.</span>
                    </p>
                    <p>
                        ES NECESARIO QUE EL CLIENTE PERMANEZCA EN EL SITIO AL MOMENTO DE LA INSTALACIÓN Y EN SERVICIOS TÉCNICOS PROGRAMADOS, PARA VALIDAR LA SOLUCIÓN Y RECOMENDACIONES DEL SERVICIO RECIBIDO.
                    </p>
                    <p>
                        SU FECHA DE <span className="bg-green-400 font-bold px-1">PAGO</span>, LOS DÍAS: _______ DE CADA MES. Y SU FECHA DE <span className="bg-red-500 text-white font-bold px-1">CORTE</span> SON LOS DÍAS: _______ DE CADA MES.
                        <span className="font-bold underline block mt-1">LA EMPRESA SE RESERVA EL DERECHO DE SUSPENDER EL SERVICIO Y DISPONER DEL PUERTO EN CASO DE INCUMPLIMIENTO DEL PAGO.</span>
                    </p>
                    <p className="font-bold">
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
                        <br /><span className="block mt-1 font-bold">LA DES-INSTALACIÓN TIENE UN COSTO DE 10$. ____________________</span>
                        <span className="block font-bold">LA MUDANZA TIENE UN COSTO DE 20$ SUJETO A DISPONIBILIDAD DE PUERTO: ____________________</span>
                    </p>
                    <p>
                        NUESTROS PLANES CUENTAN CON MÁXIMOS DE VELOCIDAD LOS CUALES PUEDEN SER ALCANZADOS CON <span className="bg-yellow-300">ROUTER DE TECNOLOGÍA ULTIMA GENERACIÓN: WI-FI-5 / WI-FI-6</span> - CON PROCESADORES DESDE: [QUALCOMM 1 GHZ DE 1 O MÁS NÚCLEOS] Y PUERTOS DE ENTRADA 1000MBPS.
                    </p>
                    <p>
                        PARA EL USO DE APP (GAMER-STREAMER - VOIP -IP TV - WEB CAM Y AFINES) LA EMPRESA SE ABSTIENE DE RESPONSABILIDADES SOBRE SU BUEN FUNCIONAMIENTO, PUESTO QUE TODAS LAS APLICACIONES STREAMING DEPENDEN DE <span className="underline">RECURSOS ESPECIALES EN LOS EQUIPOS EMPLEADOS POR EL CLIENTE.</span>
                    </p>
                    <p>
                        TODOS NUESTROS PLANES <span className="underline text-gray-500">INCLUYEN SERVICIO</span> TÉCNICO CON COSTO, PARA SOLUCIONAR: /REPORTE DE QUEJAS/SERVICIO TÉCNICO Y/O INSPECCIONES.WAPP: (424-7571407)
                        <br />
                        LOS SERVICIO TÉCNICOS ESPECIALES SOLICITADOS POR EL CLIENTEA LA EMPRESA, PARA RESOLVER PROBLEMAS DE RED LOCAL.
                        <br />
                        <span className="bg-yellow-300 font-bold block mt-1">TIENE UN COSTO DE 20$ POR HORA, EL PAGO DE SU PLAN MENSUAL NO INCLUYE TRABAJOS ADICIONALES (SERVICIOS TÉCNICOS SOLICITADOS POR EL CLIENTE)</span>
                    </p>
                    <p className="bg-yellow-300 font-bold">
                        LA EMPRESA NO SE HACE RESPONSABLE POR NINGÚN TRABAJO ADICIONAL REALIZADO NUESTROS TÉCNICOS, CÓMO: PROGRAMACIÓN DE RED INTERNA, TELEVISIONES CONSOLAS DE VIDEOJUEGOS, TELÉFONOS CELULARES POR ELLO SERÁ NECESARIO QUE EL CLIENTE CONTRATE UN TÉCNICO DE SU CONFIANZA CAPACITADO PARA REALIZAR DICHOS TRABAJOS EN SU RED LOCAL Y/O EQUIPOS.
                    </p>
                    <p className="font-bold border-t border-black pt-2">
                        LA EMPRESA SE RESERVA EL DERECHO DE SUSPENDER EL SERVICIO Y DISPONER DEL PUERTO. EN CASO DEL INCUMPLIMIENTO DE LAS CLAUSURAS ANTERIORES, EN EL MOMENTO QUE LO DECIDA.
                    </p>
                    <p className="text-[8px] italic text-justify opacity-80 mt-4 normal-case">
                        EL EQUIPO ASIGNADO SOLO PUEDE SER ADMINISTRADO POR OFICINA. en caso de requerir cambio de usuario y clave wifi. deberá dirigirse a la oficina. en caso de determinarse manipulación por parte del cliente. será motivo de suspensión del servicio y será desinstalado. EL PAGO REALIZADO POR LA MENSUALIDAD NO INCLUYE TRABAJOS ADICIONALES POR FALLAS INTERNAS
                    </p>
                </div>
            </div>
        </div>
    );
};
export default FiberPage;
