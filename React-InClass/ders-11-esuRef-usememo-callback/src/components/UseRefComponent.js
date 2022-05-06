import React from "react";
import { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  const [value, setValue] = useState(0);
  console.log(value);

  //* useRef birinci kullanım
  //* DOM elementlerine ulaşmamızı sağlar
  const inputRef = useRef(null);
  const divRef = useRef(null);

  // const valueObj = { current: 0 };
  //* useRef ikinci kullanım
  //* hafızada yeri değişmeyen bir obje oluşturur
  const valueRef = useRef(0);
  console.log("valueRef", valueRef);
  // console.log(inputRef.current.value);
  useEffect(() => {
    // document.querySelector("input").focus();
    // console.log(document.querySelector("input"));
    // inputRef.current.focus();
    // inputRef.current.parentNode.style.backgroundColor = "red";
  }, []);

  const changeBGColor = () => {
    // divRef.current.style.backgroundColor = "orange";[1]
    // const colors = [
    //   "orange",
    //   "pink",
    //   "purple",
    //   "red",
    //   "#00ff00",
    //   "rgb(150,150,150)",
    // ];
    // const random = Math.trunc(Math.random() * colors.length);
    // console.log(random);
    // divRef.current.style.backgroundColor = colors[random];[2]
    // console.log(inputRef.current.value);
    // divRef.current.style.backgroundColor = inputRef.current.value;[3]
  };

  const increase = () => {
    setValue(value + 1);
    valueRef.current += 1;
  };

  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component</h2>
      <input ref={inputRef} placeholder="Enter text..." />
      <button onClick={changeBGColor}>ChangeBGColor</button>
      <button onClick={increase}>increase</button>
    </div>
  );
};

export default UseRefComponent;
