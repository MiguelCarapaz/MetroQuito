

const Mensajes = ({tipo, children}) => {
    return (
        <div className={`${tipo} text-white text-left font-bold mb-2`}>{children}</div>
    )
}

export default Mensajes