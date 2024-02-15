import Image from "next/image";
import image1 from "../../../public/portfolio/portfolio-1.jpg";
import image2 from "../../../public/portfolio/portfolio-2.jpg";
import image3 from "../../../public/portfolio/portfolio-3.jpg";
import image4 from "../../../public/portfolio/portfolio-4.jpg";
import image5 from "../../../public/portfolio/portfolio-5.jpg";
import image6 from "../../../public/portfolio/portfolio-6.jpg";
import image7 from "../../../public/portfolio/portfolio-7.jpg";
import image8 from "../../../public/portfolio/portfolio-8.jpg";
import image9 from "../../../public/portfolio/portfolio-9.jpg";

export function Portfolio(){
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
                            <li className="filter-active">All</li>
                            <li>App</li>
                            <li>Card</li>
                            <li>Web</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <Image
                                width={416}
                                height={270}
                                src={image1}
                                className="img-fluid"
                                alt="Picture of the author"
                            />
                            <div className="portfolio-info">
                                <h4>App 1</h4>
                                <p>App</p>
                                <div className="portfolio-links">
                                    <a href="#"
                                       className="portfolio-lightbox"
                                       title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i
                                        className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <Image
                                src={image2}
                                className="img-fluid"
                                alt="Picture of the author"
                            />
                            <div className="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <div className="portfolio-links">
                                    <a href="#"
                                       className="portfolio-lightbox"
                                       title="Web 3"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i
                                        className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <Image
                                src={image3}
                                className="img-fluid"
                                alt="Picture of the author"
                            />
                            <div className="portfolio-info">
                                <h4>App 2</h4>
                                <p>App</p>
                                <div className="portfolio-links">
                                    <a href="#"
                                       className="portfolio-lightbox"
                                       title="App 2"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i
                                        className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <Image
                                src={image4}
                                className="img-fluid"
                                alt="Picture of the author"
                            />
                            <div className="portfolio-info">
                                <h4>Card 2</h4>
                                <p>Card</p>
                                <div className="portfolio-links">
                                    <a href="#"
                                       className="portfolio-lightbox"
                                       title="Card 2"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i
                                        className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <Image
                                src={image5}
                                className="img-fluid"
                                alt="Picture of the author"
                            />
                            <div className="portfolio-info">
                                <h4>Web 2</h4>
                                <p>Web</p>
                                <div className="portfolio-links">
                                    <a href="#"
                                       className="portfolio-lightbox"
                                       title="Web 2"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i
                                        className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <Image
                                src={image6}
                                className="img-fluid"
                                alt="Picture of the author"
                            />
                            <div className="portfolio-info">
                                <h4>App 3</h4>
                                <p>App</p>
                                <div className="portfolio-links">
                                    <a href="#"
                                       className="portfolio-lightbox"
                                       title="App 3"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i
                                        className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <Image
                                src={image7}
                                className="img-fluid"
                                alt="Picture of the author"
                            />
                            <div className="portfolio-info">
                                <h4>Card 1</h4>
                                <p>Card</p>
                                <div className="portfolio-links">
                                    <a href="#"
                                       className="portfolio-lightbox"
                                       title="Card 1"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i
                                        className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <Image
                                src={image8}
                                className="img-fluid"
                                alt="Picture of the author"
                            />
                            <div className="portfolio-info">
                                <h4>Card 3</h4>
                                <p>Card</p>
                                <div className="portfolio-links">
                                    <a href="#"
                                       className="portfolio-lightbox"
                                       title="Card 3"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i
                                        className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <Image
                                src={image9}
                                className="img-fluid"
                                alt="Picture of the author"
                            />
                            <div className="portfolio-info">
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <div className="portfolio-links">
                                    <a href="#"
                                       className="portfolio-lightbox"
                                       title="Web 3"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i
                                        className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}