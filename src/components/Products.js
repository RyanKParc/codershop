import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({ products }) => {
    console.log(products)
    return (
        <div>
            <h1>Products</h1>
            <div className='products-card-box'>
                {products.map((item) => {
                    console.log("This line", item.fields);
                    return <ProductsCard key={item.name} products={item.fields} />
                }
                )}
            </div>
        </div>
    )
}

export default Products