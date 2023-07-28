import Swal from "sweetalert2";
import ItemCart from "../components/ItemCart/ItemCart";
import { useCartContext } from "../context/CartContext";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import UserForm from "../components/UserForm/UserForm";
import "./Cart.css";
import { Link } from "react-router-dom";
import img from "./assets/sad_119546.webp";
function Cart() {
  const { cart, totalPrice, clearCart } = useCartContext();

  const ordenDeCompra = {
    datos: {
      nombreUsuario: "santiago",
      email: "aaa@aaa.com",
      telefono: 1234,
    },
    orden: cart,
    total: totalPrice(),
  };

  const handleEmitirCompra = () => {
    const ordenCollectionRef = collection(db, "ordenes");
    addDoc(ordenCollectionRef, ordenDeCompra).then(({ id }) =>
      Swal.fire({
        title: "Tu orden fue realizada correctamente",
        text: `Numero de pedido: ${id}`,
        icon: "success",
      })
    );
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <>
        <div className="empty__cart">
          <h2>No hay productos actualmente en su carrito en su carrito</h2>
          <div>
            <img src={img}></img>
          </div>
          <Link to={"/productos"}>
            {" "}
            <button className="btn btn-primary">Agregar productos</button>{" "}
          </Link>
          <div>
            {cart.map((prod) => (
              <div>{prod.nombre}</div>
            ))}
          </div>
        </div>
      </>
    );
  }

  const cards = cart.map((prod) => (
    <>
      <ItemCart key={prod.id} producto={prod}></ItemCart>
    </>
  ));

  return (
    <>
      <h3>Completa tus datos para realizar el pedido</h3>
      <div className="cart__container">
        <div className="cart__layout">
          <UserForm />

          <div className="cart__card">{cards}</div>
        </div>
        <button className="btn btn-success" onClick={handleEmitirCompra}>
          Emitir compra
        </button>
        <button className="btn btn-danger" onClick={() => clearCart()}>
          Vaciar carrito
        </button>
      </div>
    </>
  );
}

export default Cart;
