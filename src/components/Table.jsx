import React, { useContext } from "react";
import MyContext from "../context/MyContext";

function Table() {
  const { handleColor, arrayTable } = useContext(MyContext);
  return (
    <section className="pallete-ph">
      <section className="pallete">
        {arrayTable.map((e, i) => (
          <div key={i} className="vector">
            {arrayTable.map((f, j) => (
              <div key={`${e}o${j}`} onClick={handleColor} className="colum" />
            ))}
          </div>
        ))}
      </section>
    </section>
  );
}

export default Table;
