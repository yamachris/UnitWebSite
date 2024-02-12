import {Square} from "@/app/main/square";
import {useId} from "react";
export interface Square {id: string, icon: string, title:string, description: string}
export function Main() {

    const id = useId()

    const squares: Square[] = [
        {id: id, icon: 'fa-brands fa-tiktok', title: 'Titre 1', description: 'description 1 description 1 description 1 description 1'},
        {id: id, icon: 'fa-brands fa-facebook', title: 'Titre 2', description: 'description 2 description 1 description 1 description 1'},
        {id: id, icon: 'fa-brands fa-instagram', title: 'Titre 3', description: 'description 3 description 1 description 1 description 1'},
        {id: id, icon: 'fa-brands fa-google', title: 'Titre 4', description: 'description 4 description 1 description 1 description 1'},
    ]

    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-9 text-center">
                        <h1>One Page Bootstrap Website Template</h1>
                        <h2>We are team of talented designers</h2>
                    </div>
                </div>
                <div className="text-center">
                    <a href="#" className="btn-get-started scrollto">Get Started</a>
                </div>

                <div className="row icon-boxes">
                    {
                        squares.map(square => <Square key={square.id} square={square} />)
                    }
                </div>
            </div>
        </section>
    );
}