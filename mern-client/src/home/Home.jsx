import React from 'react'
import Banner1 from '../components/Banner1'
import FavouriteBooks from './BestSellerBooks'
import BestSellerBooks from './BestSellerBooks'
import FavouriteBook from './FavouriteBook'

const Home = () => {
    return (
        <div><Banner1 />
            <BestSellerBooks />
            <FavouriteBook />
        </div>
    )
}

export default Home
