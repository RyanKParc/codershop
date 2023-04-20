import React, { useState, useEffect } from 'react'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const [products, setProducts] = useState([]);
    const data = useLoaderData();
    useEffect(() => {
        setProducts(data.data.documents)
    }, [data]);
    return (
        <div>
            Our products
            <Products products={products} />
        </div>
    )
}

export default Home