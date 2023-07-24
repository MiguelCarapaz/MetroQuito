import logoMetro from '../assets/tren.webp'
import Mensajes from './Mensajes'

const Listar = () => {
    return (
        <>
            <Mensajes tipo={"bg-green-900"}>No existen datos</Mensajes>
            <div className="p-2 rounded-xl sm:flex gap-12 bg-gray-200 shadow-xl mb-5">

                <img src={logoMetro} alt="art cover" className="sm:w-3/12 object-cover rounded-lg" />

                <div className="h-auto p-3 w-full">
                    <h4 className="text-2xl font-semibold text-cyan-900">Nombre</h4>
                    <hr className="w-full border border-gray-300 my-2" />
                    <p className="text-gray-500">Sector:</p>
                    <p className="text-gray-500">Punto de salida:</p>
                    <p className="text-gray-500">Punto de llegada:</p>
                    <p className="text-gray-500">Maquinista:</p>
                    <p className="text-gray-500">Detalles:</p>
                    <div className='flex justify-between mt-3 lg:justify-end md:justify-end gap-3'>
                        <button className='bg-sky-900 text-white px-6 py-1 rounded-full'>Actualizar</button>
                        <button className='bg-red-900 text-white px-6 py-1 rounded-full'>Eliminar</button>
                    </div>
                </div>
            </div>
            <div className="p-2 rounded-xl sm:flex gap-12 bg-gray-200 shadow-xl">

                <img src={logoMetro} alt="art cover" className="sm:w-3/12 object-cover rounded-lg" />

                <div className="h-auto p-3 w-full">
                    <h4 className="text-2xl font-semibold text-cyan-900">Nombre</h4>
                    <hr className="w-full border border-gray-300 my-2" />
                    <p className="text-gray-500">Sector:</p>
                    <p className="text-gray-500">Punto de salida:</p>
                    <p className="text-gray-500">Punto de llegada:</p>
                    <p className="text-gray-500">Maquinista:</p>
                    <p className="text-gray-500">Detalles:</p>
                    <div className='flex justify-between mt-3 lg:justify-end md:justify-end gap-3'>
                        <button className='bg-sky-900 text-white px-6 py-1 rounded-full'>Actualizar</button>
                        <button className='bg-red-900 text-white px-6 py-1 rounded-full'>Eliminar</button>
                    </div>
                </div>
            </div>
            <div className="p-2 rounded-xl sm:flex gap-12 bg-gray-200 shadow-xl">

                <img src={logoMetro} alt="art cover" className="sm:w-3/12 object-cover rounded-lg" />

                <div className="h-auto p-3 w-full">
                    <h4 className="text-2xl font-semibold text-cyan-900">Nombre</h4>
                    <hr className="w-full border border-gray-300 my-2" />
                    <p className="text-gray-500">Sector:</p>
                    <p className="text-gray-500">Punto de salida:</p>
                    <p className="text-gray-500">Punto de llegada:</p>
                    <p className="text-gray-500">Maquinista:</p>
                    <p className="text-gray-500">Detalles:</p>
                    <div className='flex justify-between mt-3 lg:justify-end md:justify-end gap-3'>
                        <button className='bg-sky-900 text-white px-6 py-1 rounded-full'>Actualizar</button>
                        <button className='bg-red-900 text-white px-6 py-1 rounded-full'>Eliminar</button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Listar