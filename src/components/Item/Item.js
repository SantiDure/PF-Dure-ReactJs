import { Link, useParams } from "react-router-dom";
import stock from "../../data";
function Item() {
  const { itemid } = useParams();
  const item = stock.find((prod) => {
    return prod.id === itemid;
  });

  return (
    <>
      <div>
        <h2>{item.nombre}</h2>
        <div>{item.marca}</div>
        <div>{item.precio}</div>
        <Link to={"/productos"}>Volver</Link>
      </div>
    </>
  );
}

export default Item;
