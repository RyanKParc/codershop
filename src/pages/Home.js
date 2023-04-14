import React, { useState, useEffect } from 'react'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const [products, setProducts] = useState([]);
    const data = useLoaderData();
    console.log(data.data.documents)
    useEffect(() => {
        setProducts(data.data.documents)
    }, [data]);
    return (
        <div>
            This Home
            <Products products={products} />
        </div>
    )
}

export default Home