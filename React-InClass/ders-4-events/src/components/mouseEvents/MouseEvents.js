import { useState } from "react";
import "./styles.css";

const MouseEvents = () => {
  const [coordX, setCoordX] = useState(198);
  const [coordY, setCoordY] = useState(200);
  // console.log("coordX", coordX);
  // click event
  const handleClick = (e) => {
    // console.log(e);
    // console.log(e.type);
    console.log("target", e.target);
    console.log("currentTarget", e.currentTarget);
    e.target.tagName === "SPAN" && e.currentTarget.remove();
    console.log(e.target.tagName);
  };
  // doubleClick event
  const handleDoubleClick = (e) => console.log("innerText", e.target.innerText);

  // mouseMove event
  const handleMouseMove = (e) => {
    // console.log(e.nativeEvent.offsetX);
    // console.log(e.pageX);
    setCoordX(e.pageX);
    setCoordY(e.pageY);
  };
  return (
    <>
      <h2>MouseEvents</h2>
      <p>
        <span>X {coordX} </span> and Y {coordY}
      </p>
      <p>
        <span></span> and
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          <li id="todo-1" onClick={handleClick}>
            todo item 1 <span>X</span>
          </li>
          <li id="todo-2 " onDoubleClick={handleDoubleClick}>
            todo item 2 <span>X</span>
          </li>
          <li onMouseMove={handleMouseMove}>
            todo item 3 <span>X</span>
          </li>
          <li>
            todo item 4 <span>X</span>
          </li>
          <li>
            todo item 5 <span>X</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MouseEvents;
