import React from 'react';

const FiberPage = ({ data }) => {
    const currentYear = new Date().getFullYear();
    const plans = [
        { label: '250 Mbps', cost: '25$' },
        { label: '400 Mbps', cost: '35$' },
        { label: '600 Mbps', cost: '45$' },
        { label: '1.00 GB', cost: '55$' },
    ];
    const selectedPlan = (data && data.plan) ? String(data.plan).trim() : '';

    return (
        <div className="print-container bg-white p-0">
            {/* ================= PAGE 1 ================= */}
            <div className="print-page w-[210mm] h-[297mm] mx-auto p-8 bg-white text-black font-sans relative overflow-hidden flex flex-col justify-between box-border print:m-0 print:shadow-none">

                {/* HEADER */}
                <div className="flex justify-between items-start mb-4">
                    <div className="w-40">
                        <img src="/print_logo.png" alt="WISP" className="w-full object-contain" />
                    </div>
                    <div className="text-right text-[10px] w-2/3 font-bold uppercase leading-tight">
                        <p>TÉRMINOS CONDICIONES - POLÍTICAS Y GARANTÍAS DEL CONTRATO DE SUSCRIPCIÓN</p>
                        <p>SERVICIOS DE TRANSPORTE DE DATOS</p>
                        <div className="w-full h-2 bg-gray-300 my-1"></div>
                        <p className="mt-1 underline">CONEXIÓN FIBRA ÓPTICA</p>
                        <div className="mt-1 bg-yellow-300 inline-block px-1 text-black font-black">
                            PLAN ESPECIAL - PROMOCIÓN POR TIEMPO LIMITADO - APLICAN TÉRMINOS Y CONDICIONES
                        </div>
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
                {/* TÍTULO AGREGADO AQUÍ */}
                <div className="mb-2">
                    <h1 className="text-xl font-black uppercase text-center tracking-widest border-b-2 border-black pb-1">
                        Contrato de Adhesión y Registro de Instalación
                    </h1>
                </div>
                {/* CONTENT BOXES - At bottom */}

                {data?.template === 'promo' && (
                    <>
                    <table className="w-full border-collapse border border-black mb-2 text-sm">
                        <tbody>
                            <tr className="bg-gray-300">
                                <td colSpan="4" className="border border-black p-1 font-bold text-center">PROMO EXCLUSIVA 6 MESES X 10$ (INICIO:01 AL 31 MARZO - {currentYear})</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td colSpan="4" className="border border-black p-1 font-bold text-center">DATOS CLIENTE</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-1 font-bold">CLIENTE:</td>
                                <td className="border border-black p-1" colSpan="3">{data?.name} {data?.surname}</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-1 font-bold">C:I</td>
                                <td className="border border-black p-1">{data?.ci}</td>
                                <td className="border border-black p-1 font-bold">TELÉFONO:</td>
                                <td className="border border-black p-1">{data?.phone}</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-1 font-bold">DIRECCIÓN:</td>
                                <td className="border border-black p-1" colSpan="3">{data?.address}</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-1 font-bold">CORREO</td>
                                <td className="border border-black p-1" colSpan="3">{data?.email}</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-1 font-bold">ROUTER:</td>
                                <td className="border border-black p-1">{data?.routerModel}</td>
                                <td className="border border-black p-1 font-bold">DISPOSITIVO:</td>
                                <td className="border border-black p-1">&nbsp;</td>
                            </tr>
                            <tr>
                                <td className="border border-black p-1 font-bold">FECHA DE SOLICITUD</td>
                                <td className="border border-black p-1" colSpan="3">{data?.createdAt ? new Date(data.createdAt).toLocaleDateString() : ''}</td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="border border-black p-1">
                                    <label className="inline-flex items-center"><span className="mr-1">•</span><input type="checkbox" className="mr-1" />SOLICITUD PARA PERMANENCIA DE 1 AÑO PLAN BÁSICO:</label>
                                </td>
                                <td className="border border-black p-1">firma:</td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="border border-black p-1">
                                    <label className="inline-flex items-center"><span className="mr-1">•</span><input type="checkbox" className="mr-1" />EXCLUSIVIDAD COMO ÚNICO PROVEEDOR DE INTERNET :</label>
                                </td>
                                <td className="border border-black p-1">firma:</td>
                            </tr>
                            <tr>
                                <td colSpan="3" className="border border-black p-1">
                                    <label className="inline-flex items-center"><span className="mr-1">•</span><input type="checkbox" className="mr-1" />EL 7MO. MES SU PLAN CONTRATADO TENDRÁ UN COSTO DE 25$______ / 35$_____/45$____/55$</label>
                                </td>
                                <td className="border border-black p-1">firma:</td>
                            </tr>
                            <tr className="bg-gray-200">
                                <td className="border border-black p-1 font-bold align-top">MESES<br/>PLAN 250MB</td>
                                <td className="border border-black p-1">
                                    <label className="inline-flex items-center"><span className="mr-1">•</span><input type="checkbox" className="mr-1" checked={Array.isArray(data.promoMonths)?data.promoMonths.includes('MARZO'):false} readOnly /> MARZO</label>
                                    <div className="text-[8px]">10$</div>
                                </td>
                                <td className="border border-black p-1">
                                    <label className="inline-flex items-center"><span className="mr-1">•</span><input type="checkbox" className="mr-1" checked={Array.isArray(data.promoMonths)?data.promoMonths.includes('ABRIL'):false} readOnly /> ABRIL</label>
                                    <div className="text-[8px]">10$</div>
                                </td>
                                <td className="border border-black p-1">
                                    <label className="inline-flex items-center"><span className="mr-1">•</span><input type="checkbox" className="mr-1" checked={Array.isArray(data.promoMonths)?data.promoMonths.includes('MAYO'):false} readOnly /> MAYO</label>
                                    <div className="text-[8px]">10$</div>
                                </td>
                                <td className="border border-black p-1">
                                    <div className="inline-flex flex-col">
                                        <label className="inline-flex items-center"><span className="mr-1">•</span><input type="checkbox" className="mr-1" checked={Array.isArray(data.promoMonths)?data.promoMonths.includes('SEPTIEMBRE'):false} readOnly /> SEPTIEMBRE: (7MO MES)</label>
                                        <div className="text-[8px]">25$<br/>35$<br/>45$<br/>55$</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className="border border-black p-1">
                                    <label className="inline-flex items-center"><span className="mr-1">•</span><input type="checkbox" className="mr-1" checked={Array.isArray(data.promoMonths)?data.promoMonths.includes('JUNIO'):false} readOnly /> JUNIO</label>
                                    <div className="text-[8px]">10$</div>
                                </td>
                                <td className="border border-black p-1">
                                    <label className="inline-flex items-center"><span className="mr-1">•</span><input type="checkbox" className="mr-1" checked={Array.isArray(data.promoMonths)?data.promoMonths.includes('JULIO'):false} readOnly /> JULIO</label>
                                    <div className="text-[8px]">10$</div>
                                </td>
                                <td className="border border-black p-1">
                                    <label className="inline-flex items-center"><span className="mr-1">•</span><input type="checkbox" className="mr-1" checked={Array.isArray(data.promoMonths)?data.promoMonths.includes('AGOSTO'):false} readOnly /> AGOSTO</label>
                                    <div className="text-[8px]">10$</div>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    </>
                )}


                    {data?.template !== 'promo' && (
                        <>
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
                            <div className="col-span-3 border-r border-black py-1 px-2 uppercase text-[10px]">{data?.routerModel || ''}</div>
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
                            <div className="col-span-6 border-b border-black py-1 px-2 uppercase text-[10px]">{data?.macAddress || ''}</div>

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
                            RECOMENDACIÓN TÉCNICA
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
                    </>
                    )}

                    {/* PLANS TABLE - BLUE */}
                    <div className="page-break-inside-avoid">
                        <div className="grid grid-cols-4 border-2 border-black">
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
                        <p>TÉRMINOS CONDICIONES - POLÍTICAS</p>
                        <p>DEL CONTRATO DE ADHESIÓN PARA LA PRESTACIÓN</p>
                        <p>SERVICIOS DE TRANSPORTE DE DATOS</p>
                        <div className="h-4 bg-[#808080] w-24 ml-auto mt-2"></div>
                    </div>
                </div>



                {/* POLICIES CONTENT - At bottom */}


                <h2 className="text-center font-black text-2xl mb-4 uppercase underline tracking-tighter">POLÍTICAS CONDICIONES Y GARANTÍAS DEL SERVICIO</h2>

                <div className="text-[10px] text-justify space-y-3 uppercase leading-tight text-black pr-[30mm]">
                    <p>
                        NUESTRO SERVICIO HA SIDO DISEÑADO Y PROGRAMADO PARA USO BÁSICO RESIDENCIAL,: NAVEGACIÓN ILIMITADA CON DESCARGA DIARIA  LIMITADA, INDICADO EN EL PLAN CONTRATADO.
                        ¡GARANTIZAMOS VELOCIDAD A TRAVÉS DE UN CLIC!. SOLO EN EQUIPOS DE ÚLTIMA GENERACIÓN. 
                    </p>

                    <p>
                        PLAN PROMOCIONAL  BÁSICO (10$)  VELOCIDAD MÁX. 250 MBPS
                        7MO. MESES SU PLAN CONTRATADO  TENDRÁ UN COSTO DE 25$______
                    </p>

                    <p>
                        EN CASO DE SER SUPERADO EL LÍMITE DE DESCARGA DIARIO,SERÁ NECESARIO QUE NOTIFIQUE EL MOTIVO AL DPTO. DE SERVICIO TÉCNICO, CON ANTELACIÓN PARA EVITAR QUE SU SERVICIO SEA  AFECTADO AL DIA SIGUIENTE Y/O BANEADO.  CONSOLAS DE VIDEOJUEGOS,DE USO RESIDENCIAL ES PERMITIDO EN EL HORARIO 12AM HASTA LAS 7AM, EN DÍAS NO CONSECUTIVOS.
                    </p>

                    <p>
                        EN CASO DE DETECTARSE RE-VENTA POR MEDIO DE: ROUTER EXTENSORES DE SEÑAL,  REPETIDORES. PARA COMPARTIR SU PLAN CONTRATO CON VECINOS, EL MISMO PODRÁ SER SUSPENDIDO SIN DEVOLUCIONES NI  PREVIO AVISO. 
                    </p>

                    <p>
                        LA INSTALACIÓN DEBE SER REALIZADA POR UNO DE NUESTRO PERSONAL TÉCNICO AUTORIZADO. 
                        EN CASO DE QUE EL CLIENTE MOVILICE LA INSTALACIÓN. SERÁ MOTIVO DE SUSPENSIÓN.
                    </p>

                    <p>
                        ES NECESARIO QUE EL CLIENTE PERMANEZCA EN EL SITIO AL MOMENTO DE LA INSTALACIÓN Y EN SERVICIOS TÉCNICOS PROGRAMADOS.  PARA VALIDAR LA SOLUCIÓN Y RECOMENDACIONES DEL SERVICIO RECIBIDO. 
                    </p>

                    <p>
                        LA EMPRESA SE RESERVA EL DERECHO DE SUSPENDER EL SERVICIO  Y DISPONER DEL PUERTO EN CASO DE INCUMPLIMIENTO DEL PAGO.
                    </p>

                    <p>
                        LA ONU ASIGNADA EN CALIDAD DE PRÉSTAMO Y LAS ONU-WIFI. SOLO PODRÁN SER. ADMINISTRADAS POR UNO DE NUESTROS TEC. AUTORIZADOS, PARA GARANTIZAR EL CORRECTO FUNCIONAMIENTO. EN CASO DE QUE EL CLIENTE REALICE INTENTOS DE CAMBIOS DE CLAVE PUEDE OCASIONAR LA DESCONF. DEL EQUIPO LO CUAL TIENE  COSTO POR SERVICIO 10$ 
                    </p>

                    <p>
                        POR POLÍTICAS DE LA EMPRESA, NO ESTÁ PERMITIDO EL USO DE TORRENT.
                    </p>

                    <p>
                        EN CASO DE QUE EL CLIENTE OCASIONE DAÑOS A LOS EQUIPOS SUMINISTRADOS EN CALIDAD DE PRÉSTAMO: G/EPON ONU Y CABLE PATCH CORD FIBRA : SC/APC TENDRÁ UN COSTO DE:  G/EPON ONU (20$) Y CABLE PATCH CORD FIBRA : SC/APC (15$) + EL COSTO DE SERVICIO TÉCNICO
                    </p>

                    <p>
                        EL SERVICIO POR: DES-INSTALACIÓN TIENE UN COSTO DE 10$. _________________________________________________________________
                    </p>

                    <p>
                        EL SERVICIO POR: MUDANZA TIENE UN COSTO DE 20$ -  SUJETO A DISPONIBILIDAD DE PUERTO:______________________________
                    </p>

                    <p>
                        NUESTROS PLANES CUENTAN CON MÁXIMOS DE VELOCIDAD LOS CUALES PUEDEN SER ALCANZADOS CON ROUTER DE TECNOLOGÍA ULTIMA GENERACIÓN: WI-FI-5 / WI-FI-6 - CON PROCESADORES  DESDE: (QUALCOMM 1 GHZ DE 1 O MÁS NÚCLEOS) Y PUERTOS DE ENTRADA 1000MBPS.
                    </p>

                    <p>
                        PARA EL USO DE APP (GAMER-STREAMER - VOIP -IP TV - WEB CAM Y AFINES) LA EMPRESA SE ABSTIENE DE RESPONSABILIDADES SOBRE SU BUEN FUNCIONAMIENTO, PUESTO QUE TODAS LAS APLICACIONES STREAMING DEPENDEN DE RECURSOS ESPECIALES EN LOS EQUIPOS EMPLEADOS POR EL CLIENTE.
                    </p>

                    <p>
                        TODOS NUESTROS PLANES INCLUYEN  SERVICIO TÉCNICO, PARA SOLUCIONAR: /REPORTE DE QUEJAS/AVERÍAS. .WAPP: EL PAGO DE SU PLAN MENSUAL NO INCLUYE TRABAJOS ADICIONALES (SERVICIOS TÉCNICOS SOLICITADOS POR EL CLIENTE)
                    </p>

                    <p>
                        LOS SERVICIO TÉCNICOS ESPECIALES SOLICITADOS POR EL CLIENTE A LA EMPRESA, PARA RESOLVER PROBLEMAS DE RED LOCAL  TIENE UN COSTO DE 20$  POR HORA . 
                    </p>

                    <p>
                        LA EMPRESA NO SE HACE RESPONSABLE. POR ACUERDOS ENTRE CLIENTE  Y TEC. PARA REALIZAR TRABAJOS EXTRA, CÓMO: PROGRAMACIÓN DE RED INTERNA, TELEVISIONES CONSOLAS DE VIDEOJUEGOS, TELÉFONOS CELULARES.
                    </p>

                    <p>
                        ES NECESARIO MANTENER EL SERVICIO ACTIVO PARA QUE SUS GARANTÍAS NO SEAN INTERRUMPIDAS.
                    </p>

                    <p>
                        NO SE ACEPTAN DEVOLUCIONES NI INDEMNIZACIONES UNA VEZ VALIDADA LA INSTALACIÓN CON EL CLIENTE__________________________________
                    </p>

                    <p>
                        LA EMPRESA SE RESERVA EL DERECHO DE SUSPENDER EL SERVICIO  Y DISPONER DEL PUERTO. EN CASO DEL INCUMPLIMIENTO DE LAS CLAUSURAS ANTERIORES  EN EL  MOMENTO QUE LO DECIDA.
                    </p>

                    <p>
                        EN CASO DE DETECTARSE RE - VENTA; POR MEDIO DE: ROUTER, EXTENSORES DE SEÑAL, REPETIDORES, PARA COMPARTIR SU PLAN CONTRATADO CON VECINOS, EL MISMO PODRÁ SER SUSPENDIDO SIN DEVOLUCIONES NI PREVIO AVISO.
                    </p>
                </div>

            </div>

            <style>{`
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
