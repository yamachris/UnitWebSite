'use client'

import React from "react";
import useSWR from 'swr';
import {UserType} from "@/app/pages";
import {Testimonial} from "@/app/testimonials/testimonial";
import Slider from "react-slick";

export default function Testimonials() {

    const {data, error} = useSWR(
        'https://jsonplaceholder.typicode.com/users?_limit=3',
        (url: string) => fetch(url).then(r => r.json())
    )

    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <>

            <section id="testimonials" className="testimonials">

                <div className="container">
                    <div className="section-title">
                        <h2>Testimonials</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                            quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                            impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="testimonials-slider swiper">
                        <div className="swiper-wrapper">


                            <Slider {...settings}>
                                <div>
                                    <Testimonial key={data[0].id} user={data[0]}></Testimonial>
                                </div>
                                <div>
                                    <Testimonial key={data[1].id} user={data[1]}></Testimonial>
                                </div>
                                <div>
                                    <Testimonial key={data[2].id} user={data[2]}></Testimonial>
                                </div>
                                <div>
                                    <Testimonial key={data[0].id} user={data[0]}></Testimonial>
                                </div>
                                <div>
                                    <Testimonial key={data[1].id} user={data[1]}></Testimonial>
                                </div>
                                <div>
                                    <Testimonial key={data[2].id} user={data[2]}></Testimonial>
                                </div>
                            </Slider>


                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </>
    );
}








