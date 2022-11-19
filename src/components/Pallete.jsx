import React, { useContext } from "react";
import MyContext from "../context/MyContext";

function Pallete() {
  const { capColor,colorSelect } = useContext(MyContext);
  return (
    <section className="color-pallete">
      <button
        type="button"
        onClick={capColor}
        id="black"
        value="black"
        className={`color black ${colorSelect === 'black' ? 'bordado' : ''}`}
      />
      <button
        type="button"
        onClick={capColor}
        id="red"
        value="red"
        className={`color red ${colorSelect === 'red' ? 'bordado' : ''}`}
      />
      <button
        type="button"
        onClick={capColor}
        id="green"
        value="green"
        className={`color green ${colorSelect === 'green' ? 'bordado' : ''}`}
      />
      <button
        type="button"
        onClick={capColor}
        id="blue"
        value="blue"
        className={`color blue ${colorSelect === 'blue' ? 'bordado' : ''}`}
      />
      <button
        type="button"
        onClick={capColor}
        id="yellow"
        value="yellow"
        className={`color yellow ${colorSelect === 'yellow' ? 'bordado' : ''}`}
      />
      <button
        type="button"
        onClick={capColor}
        id="gray"
        value="gray"
        className={`color gray ${colorSelect === 'gray' ? 'bordado' : ''}`}
      />
    </section>
  );
}

export default Pallete;
