import logoMetro from '../assets/tren.webp'
import Mensajes from './Mensajes'
import Swal from "sweetalert2";
import { useState } from "react"
import { useEffect } from 'react'

const Listar = ({ estado,setIdmetro }) => {

    const [rutas, setRutas] = useState([])

    useEffect(() => {
        if (estado || rutas.length >= 0) {
            (async function () {
                try {
                    const respuesta = await (await fetch("http://localhost:3000/metro")).json()
                    setRutas(respuesta)
                }
                catch (error) {
                    console.log(error);
                }
            })()
        }
    }, [estado])

    const handleDelete = async (id) => {
        try {
            Swal.fire({
              title: "Estas seguro de Eliminar?",
              icon:'warning',
              showCancelButton: true,
              cancelButtonText:'Cancelar',
              confirmButtonText:"Aceptar"
            }).then(async (result) => {
              if (result.isConfirmed) {
                const url = `http://localhost:3000/metro/${id}`;
                await fetch(url, {
                  method: "DELETE",
                });
                const nuevasRutas = rutas.filter((ruta) => ruta.id !== id);
                setRutas(nuevasRutas);
                Swal.fire("Ruta eliminada exitosamente", "", "success");
              }
              else if (result.isDismissed){
                Swal.fire('Eliminacion no realizada', '', 'error')
              }
            });
            
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {
                rutas.length === 0
                    ?
                    <Mensajes tipo={"bg-green-900"}>"No existe rutas creadas"</Mensajes>
                    :
                    rutas.map((ruta) => (
                        <div key={ruta.id} className="p-2 rounded-xl sm:flex gap-12 bg-gray-200 shadow-xl mb-5">
                            <img src={logoMetro} alt="art cover" className="sm:w-3/12 object-cover rounded-lg" />
                            <div className="h-auto p-3 w-full">
                                <h4 className="text-2xl font-semibold text-cyan-900">{ruta.nombre}</h4>
                                <hr className="w-full border border-gray-300 my-2" />
                                <p className="text-gray-500">Sector: {ruta.sector}</p>
                                <p className="text-gray-500">Punto de salida: {ruta.salida}</p>
                                <p className="text-gray-500">Punto de llegada: {ruta.llegada}</p>
                                <p className="text-gray-500">Maquinista: {ruta.maquinista}</p>
                                <p className="text-gray-500">Detalles: {ruta.detalles}</p>
                                <div className='flex justify-between mt-3 lg:justify-end md:justify-end gap-3'>
                                    <button className='bg-sky-900 text-white px-6 py-1 rounded-full'
                                        onClick={() => { setIdmetro(ruta.id) }}
                                        
                                    >Actualizar</button>
                                    <button className='bg-red-900 text-white px-6 py-1 rounded-full' onClick={() => { handleDelete(ruta.id) }}
                                    >Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))
            }
        </>

    )
}

export default Listar
