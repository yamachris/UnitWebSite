export function Contact(){
    return (
            <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                        quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                        impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div>
                    {/*<iframe*/}
                    {/*    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"*/}
                    {/*    allowFullScreen={true}></iframe>*/}
                </div>

                <div className="row mt-5">

                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@example.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+1 5589 55488 55s</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">

                        <form className="php-email-form">
                            <div className="row gy-2 gx-md-3">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name"
                                           placeholder="Your Name" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="email" className="form-control" name="email" id="email"
                                           placeholder="Your Email" />
                                </div>
                                <div className="form-group col-12">
                                    <input type="text" className="form-control" name="subject" id="subject"
                                           placeholder="Subject" />
                                </div>
                                <div className="form-group col-12">
                                    <textarea className="form-control" name="message" rows={5}
                                              placeholder="Message"
                                              required></textarea>
                                </div>
                                <div className="my-3 col-12">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center col-12">
                                    <button type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}