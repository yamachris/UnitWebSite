import {useId} from "react";
import {Square} from "@/app/main/main";
import Service from "@/app/services/service";

export function Services(){

    const id = useId()

    const services: Square[] = [
        {id: id, icon: 'fa-brands fa-tiktok', title: 'Lorem Ipsum', description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'},
        {id: id, icon: 'fa-brands fa-facebook', title: 'Sed Perspiciatis', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'},
        {id: id, icon: 'fa-brands fa-instagram', title: 'Magni Dolores', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'},
        {id: id, icon: 'fa-brands fa-google', title: 'Nemo Enim', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'},
        {id: id, icon: 'fa-brands fa-instagram', title: 'Dele Cardo', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'},
        {id: id, icon: 'fa-brands fa-google', title: 'Divera Don', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'},
    ]

    return (
        <section id="services" className="services section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Sevices</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                        quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                        impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    {services.map(service => <Service  key={service.id} service={service} />)}
                </div>

            </div>
        </section>
    );
}