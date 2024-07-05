import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
import { Link } from 'react-router-dom';
const UploadBooks = () => {
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
    const handleBookSubmit = (event) => {
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
        console.log(bookObj)

        //send data to db

        fetch("http://localhost:8000/upload-book", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(bookObj)

        }).then(res => res.json()).then(data => {
            //console.log(data)
            alert("Book uploaded successfully!!!!")
            form.reset();
        })
    }
    return (
        <div className='px-4 my12'>
            <h2 className='mb-8 text-3xl font-bold ' >Upload A book</h2>
            <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                <div className='flex gap-8'>
                    {/* First Row */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="Book Title" />
                        </div>
                        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="Author Name" />
                        </div>
                        <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
                    </div>
                </div>
                <div className='flex gap-8'>
                    {/* Second Row */}
                    {/* imageUrl */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageUrl" value="Book Image URL" />
                        </div>
                        <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Image URL" required />
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
                        row={6} />
                </div>
                {/* book pdf link */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookpdfUrl" value="Book PDF URL" />
                    </div>
                    <TextInput id="bookpdfUrl" name="bookpdfUrl" type="text" placeholder="URL of your book" required />
                </div>
                <Button type="submit" >Submit</Button>
            </form>
        </div>
    )
}

export default UploadBooks