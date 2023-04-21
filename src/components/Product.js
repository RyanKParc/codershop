import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/coderSlice";

const Product = () => {
  const dispatch = useDispatch();
  const [productPageInfo, setProductPageInfo] = useState({});
  const [baseQuant, setBaseQuant] = useState(1);
  const location = useLocation();
  useEffect(() => {
    setProductPageInfo(location.state.item);
  }, []);

  const handleProductInfo = (e) => {
    return (
      {
        name: e.name.stringValue,
        image: e.image.stringValue,
        price: e.price.integerValue,
        category: e.category.stringValue,
        description: e.description.stringValue,
      }
    )
  }

  const productName = location.state.item.name.stringValue;
  const productImage = location.state.item.image.stringValue;
  const productDescription = location.state.item.description.stringValue;
  const productPrice = location.state.item.price.integerValue;

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
        <button onClick={() => setBaseQuant(baseQuant > 1 ? baseQuant - 1 : 1)}>decrease quantity</button>
        Quantity: <span>{baseQuant}</span>
        <button onClick={() => setBaseQuant(baseQuant + 1)}>increase quantity</button>
      </div>

      <button onClick={() => {
        dispatch(addToCart(handleProductInfo(productPageInfo)))
      }}>Add to cart</button>
    </div>
  );
};

export default Product;