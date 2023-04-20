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
                                        name: item.name.stringValue,
                                        image: item.image.stringValue,
                                        price: item.price.integerValue,
                                        category: item.category.stringValue,
                                        description: item.description.stringValue,
                                        quantity: item.quantity,
                                    }
                                    ))}>decrease quantity</button>
                                    Quantity: <span>{item.quantity}</span>
                                    <button onClick={() => dispatch(incrementQuant({
                                        name: item.name.stringValue,
                                        image: item.image.stringValue,
                                        price: item.price.integerValue,
                                        category: item.category.stringValue,
                                        description: item.description.stringValue,
                                        quantity: item.quantity,
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