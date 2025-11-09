import "../../assets/css/FooterBar.css";
import FooterItem from "./FooterItem";

const FooterBar = () => {
  return <footer className="contenedor-footer">
    <FooterItem icon="home-outline" text="Inicio"/>
    <FooterItem icon="search-outline" text="Buscar"/>
    <FooterItem icon="options-outline" text="Perfil"/>

  </footer>;
};

export default FooterBar;
