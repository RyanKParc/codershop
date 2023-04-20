import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux'

const Cart = () => {
    const productData = useSelector((state) => state.coder.productData);
    const userInfo = useSelector((state) => state.coder.userInfo);
    const [totalAmount, setTotalAmount] = useState("");
    const [pay, setPay] = useState(false);

    useEffect(() => {
        let price = 0;
        productData.map((item) => {
            price += item.price * item.quantity;
            return price;
        });
        setTotalAmount(price)
    }, [productData])

    const handleCheckout = () => {
        if (userInfo) {
            setPay(true)
        } else {
            alert("Sign in to checkout")
        }
    }

    return (
        <div>
            <CartItem />
            <div>
                <p>Total Amount: ${totalAmount}</p>
                <button onClick={handleCheckout}>Check Out</button>
            </div>

        </div>
    )
}

export default Cart