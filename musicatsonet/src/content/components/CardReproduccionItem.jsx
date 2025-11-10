import "../../assets/css/CardReproduccion.css";

function CardReproduccionItem({titulo , imagen}){
    return (
        <div>
            <div className="portada-imagen">
                <img  className="img-reproduccion" src={imagen} alt="" />
            </div>
            <div>
                <p className="texto-reproduccion">{titulo}</p>
            </div>
            
        </div>
    )

}

export default CardReproduccionItem;