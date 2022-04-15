import { useState } from "react";
import ProductList from "./ProductList";

const initialProducts = [
  { id: 0, product: "Basketball", price: 12 },
  { id: 1, product: "Baseball", price: 9 },
  { id: 2, product: "Tennis Racquet", price: 89 },
];

const WithPropsApp = () => {
  const [products, setProducts] = useState(initialProducts);

  const increasePrice = (event) => {
    console.log("increasePrice", event.target.id);
    const newProducts = [...products];
    newProducts[event.target.id].price += 1
    setProducts(newProducts);
  };

  const decreasePrice = (event) => {
    console.log("decreasePrice");
    const newProducts = [...products];
    newProducts[event.target.id].price -= 1
    setProducts(newProducts);
  };

  return (
    <div>
      <h3>WithPropsApp</h3>
      <ProductList
        products={products}
        decreasePrice={decreasePrice}
        increasePrice={increasePrice}
      />
    </div>
  );
};

export default WithPropsApp;
