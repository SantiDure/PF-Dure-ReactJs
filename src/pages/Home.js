import { Link } from "react-router-dom";
import "./Home.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
function Home({ greeting }) {
  // CONSUMO DE BD
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState([]);
  const itemCollectionRef = collection(db, "stock");
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

  return (
    <>
      <h1 className="home__title">{greeting}</h1>
      <div className="home__container">
        {stock.map((item) => {
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
