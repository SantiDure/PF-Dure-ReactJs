import { useParams } from "react-router-dom";
import stock from "../data";
import { Link } from "react-router-dom";

function Categorias() {
  const { categoria } = useParams();
  const itemsFiltrados = stock.filter((prod) => {
    return prod.categoria === categoria;
  });

  const items = itemsFiltrados.map((item) => {
    return (
      <>
        <div key={item.id} className="item__layout">
          <article className="item__container card">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre}></img>

            <div>${item.precio}</div>
            <Link to={`/productos/${item.id}`}>
              <button className=" btn btn-primary">Ver detalles</button>
            </Link>
          </article>
        </div>
      </>
    );
  });
  return <div>{items}</div>;
}
export default Categorias;
