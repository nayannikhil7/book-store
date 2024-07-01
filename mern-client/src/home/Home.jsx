import React from 'react'
import Banner1 from '../components/Banner1'
import FavouriteBooks from './BestSellerBooks'
import BestSellerBooks from './BestSellerBooks'
import FavouriteBook from './FavouriteBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

const Home = () => {
    return (
        <div><Banner1 />
            <BestSellerBooks />
            <FavouriteBook />
            <PromoBanner />
            <OtherBooks />
            <Review />
        </div>
    )
}

export default Home
