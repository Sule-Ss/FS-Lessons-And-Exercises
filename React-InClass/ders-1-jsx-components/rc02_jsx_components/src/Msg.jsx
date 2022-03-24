import Clock from "./Clock";
import "./Msg.css"
// import Pic from "../img"

const Msg = () => {
  return (
    <div>
      <h1>Wlcome to our React Courses</h1>
      <img className="msg-img" src="https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584__340.jpg" alt="" />
      {/* <img src={Pic} alt="" /> */}
      <h2 style={{textAlign:"center"}}><Clock/></h2>
    </div>
  );
};

export default Msg;
