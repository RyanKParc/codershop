import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/coderSlice';

const ProductsCard = ({ products }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pageId = products.name.stringValue.toLowerCase();
    console.log(pageId)
    const toProduct = () => {
        navigate(`/product/${pageId}`, {
            state: {
                item: products,
            }
        })
    }

    return (
        <div>
            <div onClick={toProduct} className='productscard'>
                <div className='productscard-name'>{products.name.stringValue}</div>
                <img className='productscard-image' src={products.image.stringValue} alt="" />
                <div className='productscard-price'>Price: ${products.price.integerValue}</div>

            </div>
            <button onClick={() => {
                dispatch(addToCart({
                    name: products.name.stringValue,
                    image: products.image.stringValue,
                    price: products.price.integerValue,
                    category: products.category.stringValue,
                    description: products.description.stringValue,
                    quantity: 1,
                }))
            }}>Add to cart</button>
        </div>
    )
}

export default ProductsCard