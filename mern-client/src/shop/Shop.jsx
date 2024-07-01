import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import './Shop.css'; // Import the CSS file
import { Link } from 'react-router-dom'
const Shop = () => {
    const [books, setBooks] = useState([]);
    const [expandedBookId, setExpandedBookId] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/all-books")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []); // Add an empty dependency array to avoid infinite re-renders

    const toggleReadMore = (bookId) => {
        setExpandedBookId(prevBookId => (prevBookId === bookId ? null : bookId));
    };

    return (
        <div className='mt-28 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center'>All Books are here</h2>

            <div className='gap-8 my-12 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
                {
                    books.map((book) => (
                        <Card className="book-card" key={book.id}>
                            <img src={book.imageUrl} alt="" className='book-image h-96' />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white book-title">
                                <p>{book.bookTitle}</p>
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400 book-description">
                                {expandedBookId === book.id ? (
                                    <p>{book.bookDescription} <a onClick={() => toggleReadMore(book.id)} className="read-more">Show less</a></p>
                                ) : (
                                    <p>{book.bookDescription.length > 100 ? book.bookDescription.substring(0, 100) + "..." : book.bookDescription} <a onClick={() => toggleReadMore(book.id)} className="read-more">Read more</a></p>
                                )}
                            </p>
                            <Link to={`/book/${book._id}`}><button className='bg-blue-700 font-semibold text-white py-3 px-5 rounded hover:bg-teal-900 transition-all duration-300'>Buy Now</button></Link>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
};

export default Shop;
