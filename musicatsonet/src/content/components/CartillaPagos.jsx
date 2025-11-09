import "../../assets/CartillaPago.css"

// componente mediante function flecha
const CartillaPago = () => {

    const unColor = "red";
    const colorB = "lila";

  return (
    <div className={ true ? `card ${colorB}` : unColor}>
      <h2>Cartilla de Pago</h2>
      <p>Detalles de la cartilla de pago...</p>
    </div>
  )
}


export default CartillaPago;