import { useState, useEffect } from "react";

import "./assets/App.css";
import CartillaPago from "./content/components/CartillaPagos.jsx";
import AlbumDiseño from "./content/components/Album.jsx";
import SplasScreenApp from "./content/components/SplashScreen";

function App() {
  const [cargando, setCargando] = useState(true);

  useEffect(()=> {
    const temporizador = setTimeout(()=>setCargando(false),  3000);
    return () => clearTimeout(temporizador);
  }, []);



setTimeout(()=>setCargando(false),  3000);

  return <>
  {cargando ? 
  <SplasScreenApp /> : 
  <div>Bienvenido a la app de musica macarena</div>}</>;
}

export default App;
