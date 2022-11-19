import React, { useContext } from "react";
import MyContext from "../context/MyContext";

function Options() {
  const { valNum, handleIpt, setEscal,removeTudo } = useContext(MyContext);
  return (
    <section className="optionsSection">
      <input
        onChange={handleIpt}
        type="number"
        min="2"
        max="11"
        value={valNum}
      />
      <button type="button" className="btn-option" onClick={setEscal}>
        Mudar Escala
      </button>
      <button type="button" className="btn-option" onClick={removeTudo}>
        Limpar
      </button>
    </section>
  );
}

export default Options;
