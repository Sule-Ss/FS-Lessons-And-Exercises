import React, { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "./ProductContext";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  console.log(products)
  
  return (
    <div>
       {products.map((product) => (
        <Product
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
