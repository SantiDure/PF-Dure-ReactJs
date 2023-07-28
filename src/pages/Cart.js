import Swal from "sweetalert2";
import ItemCart from "../components/ItemCart/ItemCart";
import { useCartContext } from "../context/CartContext";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
function Cart() {
  const { cart, totalPrice } = useCartContext();

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
  };

  if (cart.length === 0) {
    return (
      <>
        <div>CARRITO VACIO</div>
        <div>
          {cart.map((prod) => (
            <div>{prod.nombre}</div>
          ))}
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
      <div>
        <button className="btn btn-success" onClick={handleEmitirCompra}>
          Emitir compra
        </button>
      </div>
      <div>{cards}</div>
    </>
  );
}

export default Cart;
