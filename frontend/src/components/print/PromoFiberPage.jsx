import React from 'react';

const PromoFiberPage = ({ data }) => {
    return (
        <div className="print-container bg-white p-0">
            {/* ================= PAGE 1 ================= */}
            <div className="print-page w-[210mm] h-[297mm] mx-auto p-10 bg-white text-black font-serif relative flex flex-col box-border print:m-0 print:shadow-none">

                {/* HEADER */}
                <div className="flex justify-between items-start mb-1">
                    <div className="w-40">
                        <img src="/print_logo.png" alt="WISP" className="w-[140px] object-contain" />
                    </div>
                    <div className="text-right text-[11px] text-[#000000] font-bold uppercase leading-tight pt-2 pr-2">
                        <p>TÉRMINOS CONDICIONES - POLÍTICAS</p>
                        <p>Y GARANTÍAS  DEL CONTRATO DE SUSCRIPCIÓN</p>
                        <p>SERVICIOS DE TRANSPORTE DE DATOS</p>
                    </div>
                </div>

                {/* GRAY LINE + BLUE BAR + YELLOW FULL-WIDTH BANNER */}
                <div className="w-full flex flex-col mb-4">
                    <div className="w-full h-[3px] bg-gray-300 mt-2 mb-1"></div>
                    <div className="bg-[#b3c6e7] px-4 py-1 border border-black w-full text-right flex justify-end">
                        <span className="font-bold text-[13px] text-black">CONEXIÓN FIBRA ÓPTICA</span>
                    </div>
                    <div className="bg-[#ffff00] px-2 py-0 border-x border-b border-black w-full text-center">
                        <span className="font-bold text-[12px] text-black tracking-tight">PLAN ESPECIAL  -  PROMOCIÓN POR TIEMPO LIMITADO - APLICAN TÉRMINOS Y CONDICIONES</span>
                    </div>
                </div>

                {/* MAIN TABLE */}
                <div className="mt-4 w-full">
                    {/* PROMO TITLE */}
                    <div className="bg-[#d9d9d9] py-1 border-t border-l border-r border-black text-center font-bold text-[13px] uppercase text-black w-full">
                        PROMO EXCLUSIVA 6 MESES X 10$ (INICIO:01 AL 31 MARZO -2026)
                    </div>
                    <div className="bg-white py-1 border-t border-l border-r border-black text-center font-bold text-[13px] uppercase text-black w-full">
                        DATOS CLIENTE
                    </div>

                    <div className="grid grid-cols-12 text-[10px] font-bold text-black border-l border-r border-b border-black bg-white w-full">
                        {/* CLIENTE */}
                        <div className="col-span-3 border-t border-r border-black px-2 py-1 flex items-center bg-white">CLIENTE:</div>
                        <div className="col-span-9 border-t border-black px-2 py-1 font-normal flex items-center bg-white">{data?.name || ''} {data?.surname || ''}</div>

                        {/* C.I / TELÉFONO */}
                        <div className="col-span-3 border-t border-r border-black px-2 py-1 flex items-center bg-white">C:I</div>
                        <div className="col-span-5 border-t border-r border-black px-2 py-1 font-normal flex items-center bg-white">{data?.ci || ''}</div>
                        <div className="col-span-2 border-t border-r border-black px-2 py-1 flex items-center bg-white">TELÉFONO:</div>
                        <div className="col-span-2 border-t border-black px-2 py-1 font-normal flex items-center bg-white">{data?.phone || ''}</div>

                        {/* DIRECCIÓN */}
                        <div className="col-span-3 border-t border-r border-black px-2 py-1 h-10 flex items-start pt-1 bg-white">DIRECCIÓN:</div>
                        <div className="col-span-9 border-t border-black px-2 py-1 font-normal flex items-start pt-1 h-10 bg-white">{data?.address || ''}</div>

                        {/* BLANK ROW */}
                        <div className="col-span-12 border-t border-black h-4 bg-white"></div>

                        {/* CORREO */}
                        <div className="col-span-3 border-t border-r border-black px-2 py-1 flex items-center bg-white">CORREO</div>
                        <div className="col-span-9 border-t border-black px-2 py-1 font-normal normal-case flex items-center bg-white">{data?.email || ''}</div>

                        {/* ROUTER / DISPOSITIVO */}
                        <div className="col-span-3 border-t border-r border-black px-2 py-1 flex items-center bg-white">ROUTER:</div>
                        <div className="col-span-5 border-t border-r border-black px-2 py-1 font-normal flex items-center bg-white">{data?.routerModel || data?.router || ''}</div>
                        <div className="col-span-2 border-t border-r border-black px-2 py-1 flex items-center bg-white">DISPOSITIVO:</div>
                        <div className="col-span-2 border-t border-black px-2 py-1 font-normal flex items-center bg-white"></div>

                        {/* FECHA DE SOLICITUD - full width with gray */}
                        <div className="col-span-12 border-t border-black px-2 py-1 text-center flex items-center justify-center font-bold bg-[#d9d9d9]">FECHA DE SOLICITUD</div>

                        {/* SOLICITUD PERMANENCIA */}
                        <div className="col-span-10 border-t border-r border-black px-2 py-1 pl-16 flex items-center gap-3 font-bold bg-white">
                            <span className="text-[12px]">&#9679;</span>
                            <span>SOLICITUD PARA PERMANENCIA DE 1 AÑO PLAN BÁSICO:</span>
                        </div>
                        <div className="col-span-2 border-t border-black px-2 py-1 text-[8px] flex items-center bg-white">firma:</div>

                        {/* EXCLUSIVIDAD */}
                        <div className="col-span-10 border-t border-r border-black px-2 py-1 pl-16 flex items-center gap-3 font-bold bg-white">
                            <span className="text-[12px]">&#9679;</span>
                            <span>EXCLUSIVIDAD COMO ÚNICO PROVEEDOR DE INTERNET :</span>
                        </div>
                        <div className="col-span-2 border-t border-black px-2 py-1 text-[8px] flex items-center bg-white">firma:</div>

                        {/* EL 7MO MES */}
                        <div className="col-span-10 border-t border-r border-black px-2 py-2 pl-16 flex items-start gap-3 font-bold bg-white">
                            <span className="text-[12px] pt-1">&#9679;</span>
                            <div className="flex flex-col leading-tight">
                                <span>EL 7MO. MES SU PLAN CONTRATADO  TENDRÁ UN COSTO DE 25$____/</span>
                                <span>35$____ /45$____ /55</span>
                            </div>
                        </div>
                        <div className="col-span-2 border-t border-black px-2 py-2 text-[8px] flex items-start bg-white">firma:</div>

                        {/* MONTH GRID */}
                        <div className="col-span-2 border-t border-r border-black bg-white flex flex-col items-center justify-center py-2 h-full gap-0.5 min-h-[70px]">
                            <span className="text-[12px] font-bold">MESES</span>
                            <span className="text-[12px] font-bold mt-1 mb-1">PLAN</span>
                            <span className="text-[12px] font-bold">250MB</span>
                        </div>
                        <div className="col-span-10 border-t border-black grid grid-cols-5 bg-white">
                            {/* ROW 1 */}
                            <div className="col-span-1 border-r border-b border-black p-1 pl-4 flex flex-col font-bold leading-tight justify-center gap-0.5">
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>MARZO</span></div>
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>10$</span></div>
                            </div>
                            <div className="col-span-1 border-r border-b border-black p-1 pl-4 flex flex-col font-bold leading-tight justify-center gap-0.5">
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>ABRIL</span></div>
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>10$</span></div>
                            </div>
                            <div className="col-span-1 border-r border-b border-black p-1 pl-4 flex flex-col font-bold leading-tight justify-center gap-0.5">
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>MAYO</span></div>
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>10$</span></div>
                            </div>
                            <div className="col-span-2 row-span-2 border-l border-black p-1 pl-4 flex flex-col font-bold leading-tight gap-1 bg-white justify-center">
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>SEPTIEMBRE:  (7MO MES)</span></div>
                                <div className="flex items-center gap-2 mt-0.5"><span className="text-[9px]">&#9679;</span> <span>25$</span></div>
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>35$</span></div>
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>45$</span></div>
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>55$</span></div>
                            </div>
                            {/* ROW 2 */}
                            <div className="col-span-1 border-r border-black p-1 pl-4 flex flex-col font-bold leading-tight justify-center gap-0.5">
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>JUNIO</span></div>
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>10$</span></div>
                            </div>
                            <div className="col-span-1 border-r border-black p-1 pl-4 flex flex-col font-bold leading-tight justify-center gap-0.5">
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>JULIO</span></div>
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>10$</span></div>
                            </div>
                            <div className="col-span-1 border-r border-black p-1 pl-4 flex flex-col font-bold leading-tight justify-center gap-0.5">
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>AGOSTO</span></div>
                                <div className="flex items-center gap-2"><span className="text-[9px]">&#9679;</span> <span>10$</span></div>
                            </div>
                        </div>

                        {/* ACEPTO LAS CONDICIONES */}
                        <div className="col-span-12 border-t border-black px-2 py-2 flex flex-col items-center justify-center text-center bg-white">
                            <div className="flex items-center gap-2 font-bold text-[12px]">
                                <span className="text-[14px]">&#9679;</span>
                                <span>ACEPTO LAS CONDICIONES Y CLÁUSULAS DE ESTE CONTRATO</span>
                            </div>
                            <div className="font-normal text-[10px] normal-case">en caso de incumplimiento de las condiciones anteriores este contrato quedará anulado</div>
                        </div>

                        {/* TÉCNICO / FECHA INSTALACIÓN */}
                        <div className="col-span-3 border-t border-r border-black px-2 py-1 flex items-center bg-[#d9d9d9]">TÉCNICO:</div>
                        <div className="col-span-3 border-t border-r border-black px-2 py-1 font-normal flex items-center bg-white">{data?.technician || ''}</div>
                        <div className="col-span-4 border-t border-r border-black px-2 py-1 flex items-center justify-center font-bold bg-[#d9d9d9]">FECHA DE INSTALACIÓN</div>
                        <div className="col-span-2 border-t border-black px-2 py-1 font-normal flex items-center bg-white">{data?.installDate || ''}</div>
                    </div>
                </div>

                {/* SPACER */}
                <div className="flex-1 min-h-[10px]"></div>

                {/* EQUIPOS SUMINISTRADO BOX */}
                <div className="w-full mb-2">
                    <div className="bg-[#a6a6a6] py-2 border border-black border-b-0 text-center font-bold text-[13px] text-white tracking-wide w-full">
                        EQUIPOS SUMINISTRADO POR WISP TÁCHIRA EN CALIDAD DE PRÉSTAMO
                    </div>
                    <div className="grid grid-cols-12 text-[10px] font-bold text-black border-l border-r border-black bg-white w-full">
                        {/* ROW 1: ONU / MAC */}
                        <div className="col-span-3 border-t border-b border-r border-black px-2 py-3 flex items-center bg-white">ONU #</div>
                        <div className="col-span-3 border-t border-b border-r border-black px-2 py-3 font-normal flex items-center bg-white">{data?.onuSerial || ''}</div>
                        <div className="col-span-6 border-t border-b border-black px-2 py-3 flex items-center bg-white"><span className="mr-2 font-bold">MAC:</span> <span className="font-normal">{data?.macAddress || ''}</span></div>

                        {/* ROW 2: PUERTO / ROSETA */}
                        <div className="col-span-3 border-b border-r border-black px-2 py-3 flex items-center bg-white">PUERTO n°</div>
                        <div className="col-span-3 border-b border-r border-black px-2 py-3 font-normal flex items-center bg-white">{data?.napPort || ''}</div>
                        <div className="col-span-6 border-b border-black px-2 py-3 flex items-center bg-white"><span className="mr-2 font-bold">ROSETA:</span></div>

                        {/* ROW 3: PUERTO NAP / NAP / ML FIBRA */}
                        <div className="col-span-3 border-b border-r border-black px-2 py-3 flex items-center uppercase bg-white">PUERTO NAP</div>
                        <div className="col-span-3 border-b border-r border-black px-2 py-3 font-normal uppercase flex items-center bg-white"><span className="font-bold mr-2">NAP</span> {data?.napCode || ''}</div>
                        <div className="col-span-6 border-b border-black px-2 py-3 font-bold flex items-center bg-white">ML FIBRA</div>
                    </div>

                    <div className="bg-[#a6a6a6] py-2 border border-black border-t-0 text-center font-bold text-[13px] text-white tracking-wide w-full">
                        ACEPTO Y ACUERDO DEVOLVER LOS EQUIPOS SUMINISTRADOS EN CALIDAD DE PRÉSTAMO
                    </div>
                    <div className="grid grid-cols-12 text-[11px] font-bold text-black border-l border-r border-b border-black h-12 bg-white w-full">
                        <div className="col-span-8 border-r border-black px-2 py-1 flex items-center bg-white">
                            FIRMA CLIENTE:
                        </div>
                        <div className="col-span-4 bg-white"></div>
                    </div>
                </div>

            </div>
            {/* End of PAGE 1 */}


            {/* ================= PAGE 2 ================= */}
            <div className="print-page w-[210mm] h-[297mm] mx-auto p-10 bg-white text-black font-serif relative flex flex-col box-border print:m-0 print:shadow-none">

                {/* HEADER TÉRMINOS */}
                <div className="flex justify-between items-start mb-1">
                    <div className="w-40">
                        <img src="/print_logo.png" alt="WISP" className="w-[140px] object-contain" />
                    </div>
                    <div className="text-right text-[11px] text-[#000000] font-bold uppercase leading-tight pt-2 pr-2">
                        <p>TÉRMINOS CONDICIONES - POLÍTICAS</p>
                        <p>Y GARANTÍAS DEL CONTRATO DE SUSCRIPCIÓN</p>
                        <p>SERVICIOS DE TRANSPORTE DE DATOS</p>
                    </div>
                </div>

                {/* BLUE HEADER & YELLOW HIGHLIGHT */}
                <div className="w-full flex flex-col items-end mb-6 mt-1">
                    <div className="w-full h-[3px] bg-gray-300 mt-2 mb-1"></div>
                    <div className="bg-[#b3c6e7] px-4 py-1 border border-black w-full text-right ml-auto flex justify-end">
                        <span className="font-bold text-[13px] text-black">CONEXIÓN FIBRA ÓPTICA</span>
                    </div>
                    <div className="bg-[#ffff00] px-2 py-0 border-x border-b border-black w-fit ml-auto">
                        <span className="font-bold text-[12px] text-black tracking-tight">PLAN ESPECIAL - PROMOCIÓN POR TIEMPO LIMITADO - APLICAN TÉRMINOS Y CONDICIONES</span>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-300 mb-6 w-[200mm] mx-auto hidden"></div>

                {/* TITLE */}
                <h2 className="text-center font-black text-[20px] mb-2 uppercase underline tracking-tighter">
                    POLÍTICAS CONDICIONES Y GARANTÍAS DEL SERVICIO
                </h2>

                <div className="text-[10.5px] text-justify space-y-2.5 uppercase leading-[1.3] text-black font-medium pb-4 pr-20">

                    <p>
                        <span className="bg-[#ffff00] font-black underline">NUESTRO SERVICIO HA SIDO DISEÑADO Y PROGRAMADO PARA USO BÁSICO RESIDENCIAL:</span> NAVEGACIÓN ILIMITADA CON DESCARGA DIARIA LIMITADA, INDICADO EN EL PLAN CONTRATADO.
                        <br />
                        ¡GARANTIZAMOS VELOCIDAD A TRAVÉS DE UN CLICK!. <span className="underline">SOLO EN EQUIPOS DE ÚLTIMA GENERACIÓN.</span>
                    </p>

                    <div className="ml-5 space-y-0.5 mt-0 font-black">
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> PLAN PROMOCIONAL BÁSICO (10$) VELOCIDAD MÁX. 250 MBPS</div>
                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> 7MO. MESES SU PLAN CONTRATADO TENDRÁ UN COSTO DE 25$__________</div>
                    </div>

                    <p>
                        <span className="underline">EN CASO DE SER <span className="font-bold">SUPERADO EL LÍMITE DE DESCARGA DIARIO SERÁ NECESARIO QUE NOTIFIQUE </span> EL MOTIVO <span className="font-bold">AL DPTO. DE SERVICIO TÉCNICO, CON ANTELACIÓN PARA EVITAR QUE </span> SU SERVICIO SEA AFECTADO AL DIA SIGUIENTE Y/O <span className="font-bold">BANEADO.</span></span>
                    </p>

                    <p>
                        <span className="underline text-[#8a8a8a] border-[#ffff00] border-b-[6px] leading-[0.5] pb-0 inline-block">
                            CONSOLAS DE VIDEOJUEGOS DE USO RESIDENCIAL
                        </span> ES PERMITIDO <span className="bg-[#ffff00] underline font-bold px-0.5">EN EL HORARIO 12AM HASTA LAS 7AM. EN DÍAS NO CONSECUTIVOS</span>
                    </p>

                    <p>
                        EN CASO DE DETECTARSE <span className="font-bold underline">RE-VENTA POR MEDIO DE: ROUTER EXTENSORES DE SEÑAL, REPETIDORES. PARA COMPARTIR SU PLAN CONTRATO CON VECINOS, EL MISMO</span> PODRÁ SER SUSPENDIDO <span className="font-bold underline">SIN DEVOLUCIONES NI PREVIO AVISO.</span>
                    </p>

                    <p className="border-t border-b border-gray-300 py-3 mt-4 mb-4 text-[#8a8a8a] text-[10px]">
                        LA INSTALACIÓN DEBE SER REALIZADA POR UNO DE NUESTRO PERSONAL TÉCNICO AUTORIZADO. <br />
                        EN CASO DE QUE EL CLIENTE MOVILICE LA INSTALACIÓN. SERÁ MOTIVO DE SUSPENSIÓN. <br />
                        ES NECESARIO QUE EL CLIENTE PERMANEZCA EN EL SITIO AL MOMENTO DE LA INSTALACIÓN Y EN SERVICIOS TÉCNICOS PROGRAMADOS. PARA VALIDAR LA SOLUCIÓN Y RECOMENDACIONES DEL SERVICIO RECIBIDO.
                    </p>

                    <p className="font-black underline text-[13px] leading-tight">
                        LA EMPRESA SE RESERVA EL DERECHO DE SUSPENDER EL SERVICIO Y DISPONER DEL PUERTO EN CASO DE INCUMPLIMIENTO DEL PAGO.
                    </p>

                    <p className="font-black mt-4">
                        LA ONU ASIGNADA EN CALIDAD DE PRÉSTAMO Y LAS ONU-WIFI. SOLO PODRÁN SER. ADMINISTRADAS POR UNO DE NUESTROS TEC. AUTORIZADOS, PARA GARANTIZAR EL CORRECTO FUNCIONAMIENTO. EN CASO DE QUE EL CLIENTE REALICE INTENTOS DE CAMBIOS DE CLAVE PUEDE OCASIONAR LA DESCONF. DEL EQUIPO LO CUAL TIENE <span className="underline">COSTO POR SERVICIO 10$</span>
                    </p>

                    <p className="text-[#8a8a8a] border-b border-gray-300 pb-3 mt-4 mb-4">
                        POR POLÍTICAS DE LA EMPRESA, NO ESTÁ PERMITIDO EL USO DE TORRENT.
                    </p>

                    <p className="text-[#8a8a8a]">
                        EN CASO DE QUE EL CLIENTE OCASIONE DAÑOS A LOS EQUIPOS SUMINISTRADOS EN CALIDAD DE PRÉSTAMO: G/EPON ONU Y CABLE PATCH CORD FIBRA : SC/APC TENDRÁ UN COSTO DE: G/EPON ONU (20$) Y CABLE PATCH CORD FIBRA : SC/APC (15$) + EL COSTO DE SERVICIO TÉCNICO <br />
                        <span className="font-black text-black block mt-0.5">EL SERVICIO POR: DES-INSTALACIÓN TIENE UN COSTO DE 10$. __________________________________________________________________</span>
                        <span className="font-black text-black block mt-0.5">EL SERVICIO POR: MUDANZA TIENE UN COSTO DE 20$ - SUJETO A DISPONIBILIDAD DE PUERTO:___________________________________</span>
                    </p>

                    <p className="border-t border-gray-300 pt-3 mt-4 text-[#8a8a8a]">
                        NUESTROS PLANES CUENTAN CON MÁXIMOS DE VELOCIDAD LOS CUALES PUEDEN SER ALCANZADOS CON <span className="bg-[#ffff00] font-black text-black">ROUTER DE TECNOLOGÍA ULTIMA GENERACIÓN: WI-FI-5 / WI-FI-6</span> - <span className="underline">CON PROCESADORES DESDE: [QUALCOMM 1 GHZ DE 1 O MÁS NÚCLEOS] Y PUERTOS DE ENTRADA 1000MBPS.</span>
                    </p>

                    <p className="text-[#8a8a8a] border-b border-gray-300 pb-3 mb-4">
                        PARA EL USO DE APP (GAMER-STREAMER - VOIP -IP TV - WEB CAM Y AFINES) LA EMPRESA SE ABSTIENE DE RESPONSABILIDADES SOBRE SU BUEN FUNCIONAMIENTO, PUESTO QUE TODAS LAS APLICACIONES STREAMING DEPENDEN DE <span className="underline text-[#8a8a8a]">RECURSOS ESPECIALES EN LOS EQUIPOS EMPLEADOS POR EL CLIENTE.</span>
                    </p>

                    <p className="text-[#8a8a8a]">
                        TODOS NUESTROS PLANES INCLUYEN SERVICIO TÉCNICO, PARA SOLUCIONAR: /REPORTE DE QUEJAS/AVERÍAS. WAPP: <span className="font-black bg-[#ffff00] text-black underline pl-1 pr-1">EL PAGO DE SU PLAN MENSUAL NO INCLUYE TRABAJOS ADICIONALES (SERVICIOS TÉCNICOS SOLICITADOS POR EL CLIENTE)</span>
                    </p>

                    <p className="text-[#8a8a8a] mt-2 border-b border-gray-300 pb-3 mb-4">
                        <span className="underline">LOS SERVICIO TÉCNICOS ESPECIALES SOLICITADOS POR EL CLIENTE</span> A LA EMPRESA, PARA RESOLVER PROBLEMAS DE RED LOCAL <span className="font-black bg-[#ffff00] text-black px-1 underline">TIENE UN COSTO DE 20$ POR HORA.</span>
                    </p>

                    <p className="bg-[#ffff00] font-black underline mb-3 text-[11px] px-1 inline-block">
                        LA EMPRESA NO SE HACE RESPONSABLE. POR ACUERDOS ENTRE CLIENTE Y TEC. PARA REALIZAR TRABAJOS EXTRA, CÓMO: PROGRAMACIÓN DE RED INTERNA, TELEVISIONES CONSOLAS DE VIDEOJUEGOS, TELÉFONOS CELULARES.
                    </p>

                    <p className="text-[#8a8a8a]">
                        ES NECESARIO MANTENER EL SERVICIO ACTIVO PARA QUE SUS GARANTÍAS NO SEAN INTERRUMPIDAS.
                    </p>

                    <p className="font-black underline text-[11px]">
                        NO SE ACEPTAN DEVOLUCIONES NI INDEMNIZACIONES UNA VEZ VALIDADA LA INSTALACIÓN CON EL CLIENTE_________________________________________________
                    </p>

                    <p className="font-black underline mt-2 mb-2 text-[11px] leading-tight border-t border-gray-300 pt-3">
                        LA EMPRESA SE RESERVA EL DERECHO DE SUSPENDER EL SERVICIO Y DISPONER DEL PUERTO. EN CASO DEL INCUMPLIMIENTO DE LAS CLAUSURAS ANTERIORES EN EL MOMENTO QUE LO DECIDA.
                    </p>

                    <p className="bg-[#ffff00] font-black underline px-1 text-[11px]">
                        EN CASO DE DETECTARSE RE - VENTA; POR MEDIO DE: ROUTER, EXTENSORES DE SEÑAL, REPETIDORES, PARA COMPARTIR SU PLAN CONTRATADO CON VECINOS, EL MISMO PODRÁ SER SUSPENDIDO SIN DEVOLUCIONES NI PREVIO AVISO.
                    </p>

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
                }
            `}</style>
        </div>
    );
};

export default PromoFiberPage;
