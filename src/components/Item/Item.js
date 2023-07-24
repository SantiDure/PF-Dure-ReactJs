import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import stock from "../../data";
import "./Item.css";
function Item() {
  const { itemid } = useParams();

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
          <Link to={"/productos"}>
            <button className=" btn btn-primary">
              Ver todos los productos
            </button>
          </Link>
          <Link to={"/cart"}>
            <button className=" btn btn-primary">Agregar al carrito</button>
          </Link>
        </article>
      </div>
    </>
  );
}

export default Item;
