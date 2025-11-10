import CarReproduccionItem from "./CardReproduccionItem.jsx";
import Mana from "../../assets/img/mana.jfif";
import Michael from "../../assets/img/michael.jpg";
import LinkinPark from "../../assets/img/linkinpark.jpg"
import "../../assets/css/CardReproduccion.css";

function CardReproduccion({ TituloColeccion }) {
    return (
        <div className="ctn-CardReproduccion">
            <h2>{TituloColeccion}</h2>

            <div className="ctn-item-reproduccion">
                <CarReproduccionItem TextoColeccion={"Maná"} imagenColeccion={Mana} />
                <CarReproduccionItem TextoColeccion={"Michael Jackson"} imagenColeccion={Michael} />
                <CarReproduccionItem TextoColeccion={"Linkin Park"} imagenColeccion={LinkinPark} />
            </div>
        </div>

    )

}

export default CardReproduccion;