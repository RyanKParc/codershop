import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux'

const Cart = () => {
    const productData = useSelector((state) => state.coder.productData);
    const [totalAmount, setTotalAmount] = useState("");

    useEffect(() => {
        let price = 0;
        productData.map((item) => {
            price += item.price * item.quantity;
            return price;
        });
        setTotalAmount(price)
    }, [productData])

    return (
        <div>
            <CartItem />
            <div>
                <p>Total Amount: ${totalAmount}</p>
                <button>Check Out</button>
            </div>

        </div>
    )
}

export default Cart