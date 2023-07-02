import { useState } from "react";

function ItemCount({ cantidad }) {
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
    <div>
      <button
        onClick={handleClickSumar}
        type="button"
        className="btn btn-primary"
      >
        +
      </button>
      <p>{cant}</p>
      <button
        onClick={handleClickRestar}
        type="button"
        className="btn btn-primary"
      >
        -
      </button>
    </div>
  );
}

export default ItemCount;
