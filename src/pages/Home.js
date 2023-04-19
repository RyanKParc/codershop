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
            This Home
            <Products product={products} />
        </div>
    )
}

export default Home