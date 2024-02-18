'use client'

import image1 from "../../../public/portfolio/portfolio-1.jpg";
import image2 from "../../../public/portfolio/portfolio-2.jpg";
import image3 from "../../../public/portfolio/portfolio-3.jpg";
import image4 from "../../../public/portfolio/portfolio-4.jpg";
import image5 from "../../../public/portfolio/portfolio-5.jpg";
import image6 from "../../../public/portfolio/portfolio-6.jpg";
import image7 from "../../../public/portfolio/portfolio-7.jpg";
import React, {useReducer} from "react";
import {Gallery} from "react-grid-gallery";

type Image = {
    src: string;
    width: number;
    height: number;
    tags: { value: string; title: string }[];
};


type State = {
    images: Image[];
};

type Action = { type: 'FILTER_TODO'; text: string };

export function Portfolio() {

    const images: Image[] = [
        {
            src: image1.src,
            width: 416,
            height: 421,
            tags: [
                {value: "app", title: "Ocean"}
            ]
        },
        {
            src: image2.src,
            width: 440,
            height: 278,
            tags: [
                {value: "card", title: "Ocean"}
            ]
        },
        {
            src: image3.src,
            width: 440,
            height: 234,
            tags: [
                {value: "web", title: "Ocean"}
            ]
        },
        {
            src: image4.src,
            width: 416,
            height: 421,
            tags: []
        },
        {
            src: image5.src,
            width: 440,
            height: 620,
            tags: [
                {value: "app", title: "Ocean"},
                {value: "card", title: "People"},
            ],
        },
        {
            src: image6.src,
            width: 416,
            height: 421,
            tags: [
                {value: "card", title: "Ocean"},
                {value: "web", title: "People"},
            ],
        },
        {
            src: image7.src,
            width: 416,
            height: 270,
            tags: [
                {value: "app", title: "Ocean"},
                {value: "web", title: "People"},
            ],
        }

    ];

    function reducer(state: any, action: any): State {
        switch (action.type) {
            case 'FILTER_TODO': {
                return {
                    ...state,
                    images: action.text === 'all'
                        ? images
                        : images
                            .filter(img => img.tags && img.tags.some((tag) => tag.value === action.text)
                        )
                };
            }
        }
        throw Error('Action non reconnue: ' + action.type);
    }


    const [state, dispatch] = useReducer(reducer, {images: images})

    return (

        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                        quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                        impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li onClick={() => dispatch({type: 'FILTER_TODO', text: 'all'})}
                                className="filter-active">All
                            </li>
                            <li onClick={() => dispatch({type: 'FILTER_TODO', text: 'app'})}>App</li>
                            <li onClick={() => dispatch({type: 'FILTER_TODO', text: 'card'})}>Card</li>
                            <li onClick={() => dispatch({type: 'FILTER_TODO', text: 'web'})}>Web</li>
                        </ul>
                    </div>
                </div>

                <Gallery enableImageSelection={false} rowHeight={430} maxRows={3} margin={3} images={state.images}/>
            </div>
        </section>

    );
}