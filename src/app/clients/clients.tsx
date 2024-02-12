import Image from "next/image";

export function Clients(){
    return (
        <section id="clients" className="clients section-bg">
        <div className="container">

            <div className="row">

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                >
                    <Image
                        width={50}
                        height={50}
                        src="/clients/client-1.png"
                        className="img-fluid"
                        alt="Picture of the author"
                    />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                >
                    <Image
                        width={50}
                        height={50}
                        src="/clients/client-2.png"
                        className="img-fluid"
                        alt="Picture of the author"
                    />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                >
                    <Image
                        width={50}
                        height={50}
                        src="/clients/client-3.png"
                        className="img-fluid"
                        alt="Picture of the author"
                    />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                >
                    <Image
                        width={50}
                        height={50}
                        src="/clients/client-4.png"
                        className="img-fluid"
                        alt="Picture of the author"
                    />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                >
                    <Image
                        width={50}
                        height={50}
                        src="/clients/client-5.png"
                        className="img-fluid"
                        alt="Picture of the author"
                    />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                >
                    <Image
                        width={50}
                        height={50}
                        src="/clients/client-6.png"
                        className="img-fluid"
                        alt="Picture of the author"
                    />
                </div>

            </div>

        </div>
    </section>
    );
}