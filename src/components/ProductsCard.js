import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({ products }) => {
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
        <div onClick={toProduct} className='productscard'>
            <div className='productscard-name'>{products.name.stringValue}</div>
            <img className='productscard-image' src={products.image.stringValue} alt="" />
            <div className='productscard-price'>Price: ${products.price.integerValue}</div>
            <button>Add to cart</button>
        </div>
    )
}

export default ProductsCard