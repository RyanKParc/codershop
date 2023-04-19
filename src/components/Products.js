import React from 'react'
import ProductCard from './ProductCard'

const Products = ({ product }) => {
    return (
        <div>
            <h1>Products</h1>
            <div className='product-card-box'>
                {product.map((item) => (
                    product.length > 0 ?
                        <ProductCard key={item.name} product={item.fields} /> :
                        "Products out of stock"
                )
                )}
            </div>
        </div>
    )
}

export default Products