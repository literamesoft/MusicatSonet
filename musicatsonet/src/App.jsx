import { useState, useEffect } from "react";

import "./assets/css/App.css";
import CartillaPago from "./content/components/CartillaPagos.jsx";
import AlbumDiseño from "./content/components/Album.jsx";
import SplasScreenApp from "./content/components/SplashScreen";
import Inicio from "./content/pages/Inicio.jsx";

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
  <Inicio />}
  
  </>;
}

export default App;
