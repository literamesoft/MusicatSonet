import Naveg from "../components/Navegacion";
import TagsItem from "../components/TagsItem";
import FooterBar from "../components/FooterBar";
import CardReproduccion from "../components/CardReproduccion";

import Mana from "../../assets/img/mana.jfif";
import Michael from "../../assets/img/michael.jpg";
import LinkinPark from "../../assets/img/linkinpark.jpg"

import "../../assets/css/Inicio.css";
const Inicio = () => {
   const Colecciones = [
    { titulo: "Mana", imagen: Mana },
    { titulo: "Michael Jackson", imagen: Michael },
    { titulo: "Linkin Park", imagen: LinkinPark },
  ];

     const ColeccionesHit = [
    { titulo: "Bruno Mar", imagen: Mana },
    { titulo: "BTS", imagen: Michael },
    { titulo: "CRO", imagen: LinkinPark },
  ];

  return (
    <div>
      <Naveg textoCabecera="Buenos dias">
        <ion-icon name="notifications-outline"></ion-icon>
        <ion-icon name="time-outline"></ion-icon>
      </Naveg>

      <section className="TagsContenedor">
        <TagsItem texto="Rock" />
        <TagsItem texto="Punk" />
      </section>

      <main>
     
        <CardReproduccion
          TituloColeccion="Estaciones Populares"
          listaColeccion={Colecciones}
        />

        <CardReproduccion  TituloColeccion="Hits Del Momento"
          listaColeccion={ColeccionesHit}/>

        <CardReproduccion  TituloColeccion="Hits Del Momento"
          listaColeccion={ColeccionesHit}/>
                  <CardReproduccion  TituloColeccion="Hits Del Momento"
          listaColeccion={ColeccionesHit}/>
      </main>



      <FooterBar />
    </div>
  );
};
export default Inicio;
