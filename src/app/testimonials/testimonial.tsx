import Image from "next/image";
import testi1 from "../../../public/testimonials/testimonials-1.jpg";
import {UserType} from "@/app/pages";

export function Testimonial({user}: any){


    const imagePath = require(`../../../public/testimonials/${user.photo}`).default;

    return (

        <div className="swiper-slide">
            <div className="testimonial-item">
                <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {user.comment}
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <Image
                    style={{borderRadius: "50%", display: "inline"}}
                    src={imagePath}
                    width={100}
                    height={100}
                    className="img-fluid"
                    alt="Picture of the author"
                />
                <h3>{user.name}</h3>
                <h4>{user.role}</h4>
            </div>
        </div>
    );
}