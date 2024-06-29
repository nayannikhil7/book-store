import React from 'react'
import BannerCard from '../home/BannerCard'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
const Banner1 = () => {
    return (
        <div className='px-4 lg:px-24 bg-teal-100 items-center'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-12 py-40'>
                {/* left side */}
                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the best Prices</span></h2>

                    <p className='md:w-4/5 font-semibold'>Welcome to <span ><Link to="/" className='text-2xl font-bold text-blue-700 gap-2'><FaBlog className='inline-block' />Books</Link></span>
                        . Discover a world of stories, knowledge, and imagination. Here, we offer a curated selection of books across all genres to inspire and entertain readers of all ages.</p>
                    <div>
                        <input type="search" name="search" id='search' placeholder='Searcha a book' className='py-2 px-2 rounded-s-sm outline-none' />
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-teal-900 transition-all ease-in duration-200'>Search</button>
                    </div>
                </div>
                {/* right side */}
                <div><BannerCard>

                </BannerCard></div>
            </div>
        </div>
    )
}

export default Banner1
