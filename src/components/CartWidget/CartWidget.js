import carritoSvg from "./img/carrito.svg";
import "./cartWidget.css";
function CartWidget() {
  return (
    <div>
      <img
        src={carritoSvg}
        className="icon__carrito"
        alt="carrito de compras"
      />
      <span>0</span>
    </div>
  );
}

export default CartWidget;
