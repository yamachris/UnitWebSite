import Image from "next/image";
import about from "../../../public/about-video.jpg";

export function AboutVideo(){
    return (
        <section id="about-video" className="about-video mt-2">
            <div className="container">

                <div className="row">

                    <div className="col-lg-6 video-box align-self-baseline"
                    >
                        <Image
                            src={about}
                            className="img-fluid"
                            alt="Picture of the author"
                        />
                        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                           className="glightbox play-btn mb-4"></a>
                    </div>

                    <div className="col-lg-6 pt-3 pt-lg-0 content">
                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <ul>
                            <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea
                                commodo
                                consequat.
                            </li>
                            <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in
                                voluptate velit.
                            </li>
                            <li><i className="bx bx-check-double"></i> Voluptate repellendus pariatur
                                reprehenderit
                                corporis sint.
                            </li>
                            <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea
                                commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate trideta
                                storacalaperda mastiro dolore eu fugiat nulla pariatur.
                            </li>
                        </ul>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}