import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Item() {
  const { itemid } = useParams();
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useContext(CartContext);

  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState([]);
  const itemCollectionRef = collection(db, "stock");

  const onAdd = (cantidad) => {
    setGoToCart(true);
    addProduct(item, cantidad);
  };

  useEffect(() => {
    getDocs(itemCollectionRef)
      .then(async (response) => {
        const filteredData = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setStock(filteredData);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  /////////////
  const item = stock.find((prod) => {
    return prod.id === itemid;
  });
  return (
    <>
      <div className="item__layout">
        <article key={item.id} className="card__item card">
          <h2>{item.nombre}</h2>
          <img src={item.img} alt={item.nombre}></img>
          <p>{item.descripcion}</p>
          <ItemCount cantidad={item.cantidad} />
          <div>${item.precio}</div>
          <Link to={"/"}>
            <button className=" btn btn-primary">Volver al inicio</button>
          </Link>
          {goToCart ? (
            <Link to={"/cart"}>
              <button className=" btn btn-primary">Terminar Compra</button>
            </Link>
          ) : (
            <Link to={"/cart"}>
              <button
                className=" btn btn-primary"
                onClick={onAdd(item.cantidad)}
              >
                Agregar al carrito
              </button>
            </Link>
          )}
        </article>
      </div>
    </>
  );
}

export default Item;
