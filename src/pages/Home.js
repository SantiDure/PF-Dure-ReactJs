import { Link } from "react-router-dom";
import stock from "../data";
import "./Home.css";
function Home({ greeting }) {
  function tomarDosElementosAlAzar(array) {
    const elementosAlAzar = [];

    while (elementosAlAzar.length < 3) {
      const indiceAleatorio = Math.floor(Math.random() * array.length);
      const elemento = array[indiceAleatorio];

      if (!elementosAlAzar.includes(elemento)) {
        elementosAlAzar.push(elemento);
      }
    }

    return elementosAlAzar;
  }

  const elementosInicio = tomarDosElementosAlAzar(stock);

  return (
    <>
      <h1 className="home__title">{greeting}</h1>
      <div className="home__container">
        {elementosInicio.map((item) => {
          return (
            <div key={item.id} className="card carta__home">
              <div>
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.nombre}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.nombre}</h5>
                  <p className="card-text">${item.precio}</p>
                  <Link to={`productos/${item.id}`} className="btn btn-primary">
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
