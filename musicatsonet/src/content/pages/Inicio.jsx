import Naveg from "../components/Navegacion";
import TagsItem from "../components/TagsItem";
import FooterBar from "../components/FooterBar";

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

      <main>//aqui va el contenido principal</main>

      
      
      <FooterBar />
    </div>
  );
};
export default Inicio;
