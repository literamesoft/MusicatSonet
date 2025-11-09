import Naveg from "../components/Navegacion";
import Busqueda from "../components/Busqueda";


const Inicio = () => {

    return(
        <div>
            <Naveg textoCabecera="Buenos dias">

                <ion-icon name="notifications-outline"></ion-icon>
                <ion-icon name="time-outline"></ion-icon>
            </Naveg>
        
           <Busqueda/>
           
        </div>
    )
}
export default Inicio;