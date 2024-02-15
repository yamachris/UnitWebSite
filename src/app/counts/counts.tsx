'use client'

import {useEffect, useState} from "react";

export function Counts(){

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [number4, setNumber4] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setNumber1((t) => t < 36 ? t + 1 : t);
            setNumber2((t) => t < 56 ? t + 1 : t);
            setNumber3((t) => t < 29 ? t + 1 : t);
            setNumber4((t) => t < 78 ? t + 1 : t);
        }, 10);
        return () => {
            clearInterval(timer);
        };
    }, [number1])

    return (
        <section id="counts" className="counts section-bg">
            <div className="container">

                <div className="row justify-content-end">

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <span className="purecounter">{number1}</span>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <span className="purecounter">{number2}</span>
                            <p>Projects</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <span className="purecounter">{number3}</span>
                            <p>Years of experience</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <span className="purecounter">{number4}</span>
                            <p>Awards</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}