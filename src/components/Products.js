import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({ products }) => {
    return (
        <div>
            <h1>Products</h1>
            <div className='products-card-box'>
                {products.map((item) => {
                    return <ProductsCard key={item.name} products={item.fields} />
                }
                )}
            </div>
        </div>
    )
}

export default Products