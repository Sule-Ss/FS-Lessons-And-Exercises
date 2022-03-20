import React from "react";
import Message from "./Message";

function Person({ name, img, tel }) {
  //   const { name, img, tel } = props;
  return (
    <div>
      <Message ad={name} />
      <h2>{name}</h2>
      <img src={img} alt="" />
      <h3>{tel}</h3>
    </div>
  );
}

export default Person;
