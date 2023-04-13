import React from 'react'
import Products from '../components/Products'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

    const data = useLoaderData();
    console.log(data)

    return (
        <div>
            This Home
            <Products />
        </div>
    )
}

export default Home