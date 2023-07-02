import { Link, useParams } from "react-router-dom";
import stock from "../../data";
import ItemCount from "../ItemCount/ItemCount";

function Item() {
  const { itemid } = useParams();
  const item = stock.find((prod) => {
    return prod.id === itemid;
  });

  return (
    <>
      <article key={item.id}>
        <h2>{item.nombre}</h2>
        <div>{item.marca}</div>
        <ItemCount cantidad={item.cantidad} />
        <div>{item.precio}</div>
        <Link to={"/productos"}>Volver</Link>
      </article>
    </>
  );
}

export default Item;
