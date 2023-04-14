import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
  const [productPageInfo, setProductPageInfo] = useState({});
  const location = useLocation();
  useEffect(() => {
    setProductPageInfo(location.state.item);
  }, []);

  const productName = location.state.item.name.stringValue;
  const productImage = location.state.item.image.stringValue;
  const productDescription = location.state.item.description.stringValue;
  const productPrice = location.state.item.price.integerValue;

  //   console.log(productPageInfo.name.stringValue);

  return (
    <div>
      <div>Product Info page</div>
      <h2>{productName}</h2>
      <div>
        <img style={{ width: "150px" }} src={productImage} alt="" />
        <p>{productDescription}</p>
        <p>${productPrice}</p>
      </div>
      <div>
        Quantity: <span>0</span>
      </div>

      <button>Add to cart</button>
    </div>
  );
};

export default Product;
