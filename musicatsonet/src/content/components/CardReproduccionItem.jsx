import "../../assets/css/CardReproduccion.css";

function CarReproduccionItem({TextoColeccion , imagenColeccion}){
    return (
        <div>
            <div className="portada-imagen">
                <img  className="img-reproduccion" src={imagenColeccion} alt="" />
            </div>
            <div>
                <p className="texto-reproduccion">{TextoColeccion}</p>
            </div>
            
        </div>
    )

}

export default CarReproduccionItem;