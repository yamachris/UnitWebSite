'use client'

import React from "react";
import useSWR from 'swr';
import {UserType} from "@/app/pages";

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function Testimonials() {

    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/users?_limit=5', fetcher)

    if (error) return <div>Error loading data</div>;
    if (!data) return <div>Loading...</div>;

    return (
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
                        {data && data?.map((user: UserType) => <p key={user.id}>fdfdfdf</p>)}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}








