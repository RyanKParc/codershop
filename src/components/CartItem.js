import React, { useState } from 'react';
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
            <div >
                {
                    productData.map((item) => (
                        <div key={item.name}>
                            <div className='cartitem-row'>
                                <div onClick={() => dispatch(deleteItem(item.name))} className='cartitem-delete'>delete</div>
                                <img className='cartitem-image' src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <div>
                                    <button onClick={() => dispatch(decrementQuant({
                                        name: item.name,
                                        image: item.image,
                                        price: item.price,
                                        category: item.category,
                                        description: item.description,
                                        quantity: 1,
                                    }
                                    ))}>decrease quantity</button>
                                    <span>Quantity: {item.quantity}</span>
                                    <button onClick={() => dispatch(incrementQuant({
                                        name: item.name,
                                        image: item.image,
                                        price: item.price,
                                        category: item.category,
                                        description: item.description,
                                        quantity: 1,
                                    }))}>increase quantity</button>
                                </div>
                                <p>${item.quantity * item.price}</p>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default CartItem