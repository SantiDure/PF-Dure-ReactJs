import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ cantidad, onAdd }) {
  const [cant, setCant] = useState(cantidad);

  function handleClickSumar() {
    setCant(cant + 1);
  }

  function handleClickRestar() {
    if (cant > 1) {
      setCant(cant - 1);
    }
  }

  return (
    <>
      <div className="count__container">
        <button
          onClick={handleClickRestar}
          type="button"
          className="btn btn-primary"
        >
          -
        </button>
        <p>{cant}</p>
        <button
          onClick={handleClickSumar}
          type="button"
          className="btn btn-primary"
        >
          +
        </button>
      </div>
      <div>
        <button className=" btn btn-primary" onClick={() => onAdd(cant)}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
}
export default ItemCount;
