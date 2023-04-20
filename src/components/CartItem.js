import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, incrementQuant, decrementQuant } from '../redux/coderSlice';



const CartItem = () => {
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.coder.productData);

    return (
        <div>
            <div>
                <h2>Cart Review</h2>
            </div>
            <div >{
                productData.length === 0 ?
                    <div>
                        <p>Your cart is empty</p>
                        <Link to={'/'}>
                            <p>go back to the main page</p>
                        </Link>
                    </div> :
                    productData.map((item) => {
                        const productInfo = {
                            name: item.name,
                            image: item.image,
                            price: item.price,
                            category: item.category,
                            description: item.description,
                            quantity: 1,
                        }


                        return (
                            <div key={item.name}>
                                <div className='cartitem-row'>
                                    <div onClick={() => dispatch(deleteItem(item.name))} className='cartitem-delete'>delete</div>
                                    <img className='cartitem-image' src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <div>
                                        <button onClick={() => dispatch(decrementQuant(productInfo))}>decrease quantity</button>
                                        <span>Quantity: {item.quantity}</span>
                                        <button onClick={() => dispatch(incrementQuant(productInfo))}>increase quantity</button>
                                    </div>
                                    <p>${item.quantity * item.price}</p>
                                </div>
                            </div>)
                    }
                    )
            }
            </div>
        </div>
    )
}

export default CartItem