import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa6'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Avatar } from "flowbite-react";
// import { proPic } from "../assets/profile.jpg"

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className=''>Our Customers</h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <div>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci natus facilis esse nulla aut ea hic animi possimus at, dolorum quam ullam alias cumque quas a quo quod voluptas ipsum.
                                </p>
                                {/* <Avatar img={proPic} rounded /> */}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Review