import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({ product }) => {
    const navigate = useNavigate();
    const pageId = product.name.stringValue.toLowerCase();
    const toProduct = () => {
        navigate(`/product/${pageId}`, {
            state: {
                item: product,
            }
        })
    }

    return (
        <div onClick={toProduct} className='productscard'>
            <div className='productscard-name'>{product.name.stringValue}</div>
            <img className='productscard-image' src={product.image.stringValue} alt="" />
            <div className='productscard-price'>Price: ${product.price.integerValue}</div>
            <button>Add to cart</button>
        </div>
    )
}

export default ProductsCard