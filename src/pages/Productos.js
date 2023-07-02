import { Link } from "react-router-dom";
import stock from "../data";

function Productos() {
  return stock.map((prod) => {
    return (
      <div key={prod.id}>
        <div>
          <h4>{prod.nombre}</h4>
          <div>{prod.id}</div>
          <Link to={`${prod.id}`}>Mas info</Link>
        </div>
      </div>
    );
  });
}

export default Productos;
