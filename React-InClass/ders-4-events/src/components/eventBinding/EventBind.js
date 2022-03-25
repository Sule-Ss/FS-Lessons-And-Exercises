import { Component } from "react";

export default class EventBind extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { message: 'Hello' };
  //   // this.handleClick = this.handleClick.bind(this); //[3]
  // }
  state = { message: "Hello" };
  //! arrow fonksiyon kullanılmadığında bind işlemi gerekli
  // handleClick() {
  //   console.log("click");
  //   this.setState({ message: "Goodbye" });
  // };[method1]

  //! arrow foksiyon kullanıldığında bind işlemine gerek yok
  handleClick = () => {
    console.log("click");
    this.setState({ message: "Goodbye" });
  };

  render() {
    return (
      <div>
        <h2>EventBinding</h2>
        <p>{this.state.message}</p>
        {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}
        {/* [method1]*/}
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
