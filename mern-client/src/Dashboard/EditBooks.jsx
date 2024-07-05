import { Button, Label, Select, Textarea, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const EditBooks = () => {
    const { id } = useParams();
    const { authorName, imageUrl, category, bookDescription, bookTitle, bookpdfUrl } = useLoaderData();

    const bookCategories = [
        "choose below",
        "Fiction",
        "Non-Fiction",
        "Mistery",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Bibliography",
        "Autobiography",
        "History",
        "Self-help",
        "Memoir",
        "Business",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design",
        "love",
        "romance"
    ]
    const [selectedBookCategory, setselectedBookCategory] = useState(bookCategories[0]);

    const handleChangeSelectedValue = (event) => {
        // console.log(event.target.value);
        setselectedBookCategory(event.target.value);
    }

    //handle book submission
    const handleBookUpdate = (event) => {
        event.preventDefault();
        const form = event.target;


        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageUrl = form.imageUrl.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookpdfUrl = form.bookpdfUrl.value;

        const bookObj = {
            bookTitle, authorName, imageUrl, category, bookDescription, bookpdfUrl
        }
        // console.log(bookObj)

        // update book data

        fetch(`http://localhost:8000/book/${id}`, {
            method: "PATCH", headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookObj)
        }).then(res => res.json()).then(data => {
            //console.log(data)
            alert("Book updated successfully!!!!")
        })

    }
    return (
        <div className='px-4 my12'>
            <h2 className='mb-8 text-3xl font-bold ' >Update your book data</h2>
            <form onSubmit={handleBookUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                <div className='flex gap-8'>
                    {/* First Row */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required defaultValue={bookTitle} />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={authorName} />
                    </div>
                </div>
                <div className='flex gap-8'>
                    {/* Second Row */}
                    {/* imageUrl */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageUrl" value="Book Image URL" />
                        </div>
                        <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Image URL" required defaultValue={imageUrl} />
                    </div>
                    {/* category */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>
                        <Select id="inputState" name='categoryName' className='w-full rounded' value={selectedBookCategory}
                            onChange={handleChangeSelectedValue}>
                            {
                                bookCategories.map((option) => <option key={option}>{option}</option>)
                            }
                        </Select>
                    </div>



                </div>
                {/* Book Description */}
                <div>
                    <div className='mb-2 block'>
                        <Label
                            htmlFor='bookDescription'
                            value="Book Description" />
                    </div>
                    <Textarea
                        id="bookDescription"
                        name='bookDescription'
                        placeholder="Write Something about your book"
                        required
                        className='w-full'
                        row={6} defaultValue={bookDescription} />
                </div>
                {/* book pdf link */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookpdfUrl" value="Book PDF URL" />
                    </div>
                    <TextInput id="bookpdfUrl" name="bookpdfUrl" type="text" placeholder="URL of your book" required defaultValue={bookpdfUrl} />
                </div>
                <Button type="submit" >Submit</Button>
            </form>
        </div>
    )
}

export default EditBooks