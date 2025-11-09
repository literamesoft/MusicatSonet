import "../../assets/css/Navegacion.css"

function Naveg({textoCabecera, children}) {
    return (
        <div className="contenedor-Navegacion">
            <div className="cabecera">
                <div className="titulo-Navegacion">L</div>
                <p className="texto-Navegacion">{textoCabecera}</p>
            </div>
            <div className="icono-Navegacion">
                {children}
            </div>
        </div>
    )
}

export default Naveg;