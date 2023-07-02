import { Link } from "react-router-dom";
import stock from "../data";

function Productos() {
  return (
    <div>
      <h2>Productos</h2>
      <div>
        {stock.map((prod) => {
          return (
            <>
              <div key={prod.id}>
                <h4>{prod.nombre}</h4>
                <div>{prod.id}</div>
                <Link to={`${prod.id}`}>Mas info</Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Productos;
