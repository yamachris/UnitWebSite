import Image from "next/image";
import testi1 from "../../../public/testimonials/testimonials-1.jpg";
import {UserType} from "@/app/pages";

export function Testimonial({user}: any){
    return (

        <div className="swiper-slide">
            <div className="testimonial-item">
                <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                    suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.
                    Maecen aliquam, risus at semper. {user.id}
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <Image
                    style={{borderRadius: "50%", display: "inline"}}
                    src={testi1}
                    width={100}
                    height={100}
                    className="img-fluid"
                    alt="Picture of the author"
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
            </div>
        </div>
    );
}