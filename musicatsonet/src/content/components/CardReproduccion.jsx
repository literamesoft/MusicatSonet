import CardReproduccionItem from "./CardReproduccionItem.jsx";
import "../../assets/css/CardReproduccion.css";

function CardReproduccion({ TituloColeccion, listaColeccion }) {
    return (
        <div className="ctn-CardReproduccion">
            <h2>{TituloColeccion}</h2>

            <div className="ctn-item-reproduccion">
        {listaColeccion.map((element, index) => (
          <CardReproduccionItem
            key={index}
            titulo={element.titulo}
            imagen={element.imagen}
          />
        ))}
      </div>


        </div>

    )

}

export default CardReproduccion;