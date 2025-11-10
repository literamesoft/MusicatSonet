import Naveg from "../components/Navegacion";
import TagsItem from "../components/TagsItem";
import FooterBar from "../components/FooterBar";
import CardReproduccion from "../components/CardReproduccion";

import "../../assets/css/Inicio.css";
const Inicio = () => {
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
        <CardReproduccion TituloColeccion={"Estaciones Populares"}/>
         <CardReproduccion TituloColeccion={"Albumnes y Sencillos"}/>

      </main>

      
      
      <FooterBar />
    </div>
  );
};
export default Inicio;
 