import { Link, useParams } from "react-router-dom";
import stock from "../../data";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
function Item() {
  const { itemid } = useParams();
  const item = stock.find((prod) => {
    return prod.id === itemid;
  });
  return (
    <>
      <div className="item__layout">
        <article key={item.id} className="item__container card">
          <h2>{item.nombre}</h2>
          <img src={item.img} alt={item.nombre}></img>
          <ItemCount cantidad={item.cantidad} />
          <div>${item.precio}</div>
          <Link to={"/productos"}>
            <button className=" btn btn-primary">
              Ver todos los productos
            </button>
          </Link>
        </article>
      </div>
    </>
  );
}

export default Item;
