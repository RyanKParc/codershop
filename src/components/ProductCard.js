import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/coderSlice';

const ProductsCard = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pageId = product.name.stringValue.toLowerCase();
    const toProduct = () => {
        navigate(`/product/${pageId}`, {
            state: {
                item: product,
            }
        })
    }
    const handleProductInfo = (e) => {
        return (
            {
                name: e.name.stringValue,
                image: e.image.stringValue,
                price: e.price.integerValue,
                category: e.category.stringValue,
                description: e.description.stringValue,
                quantity: 1,
            }
        )
    }

    return (
        <div>
            <div onClick={toProduct} className='productscard'>
                <div className='productscard-name'>{product.name.stringValue}</div>
                <img className='productscard-image' src={product.image.stringValue} alt="" />
                <div className='productscard-price'>Price: ${product.price.integerValue}</div>

            </div>
            <button onClick={() => {
                dispatch(addToCart(handleProductInfo(product)))
            }}>Add to cart</button>
        </div>
    )
}

export default ProductsCard