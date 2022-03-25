import React from "react";

const AddEvents = () => {
  function shoot(e, name) {
    console.log(e);
    alert(`Hello ${name}`);
  }

  return (
    <div>
      {/* <button onClick={shoot}>Take the shoot</button> */}
      <button onClick={(e) => shoot(e, "Jane")}>Take the shoot</button>
    </div>
  );
};

export default AddEvents;
