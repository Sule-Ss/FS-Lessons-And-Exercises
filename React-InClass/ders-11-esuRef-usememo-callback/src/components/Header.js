import React, { memo } from "react";
import cw from "../assets/cw_logo.png";

const Header = ({ img }) => {
  console.log("Header Rendered");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="cw_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
};

//* react.memo 2.kullanım
// const Header = memo(({ img }) => {
//   console.log("Header Rendered");
//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="cw_logo"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// });

//* react.memo 1.kullanım
// const Header = React.memo(({ img }) => {
//   console.log("Header Rendered");
//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="cw_logo"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// });

export default memo(Header);
