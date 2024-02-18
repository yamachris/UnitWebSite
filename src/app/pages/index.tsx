import Header from "@/app/header/header";
import {Main} from "@/app/main/main";
import {Page} from "@/app/about/page";
import {Counts} from "@/app/counts/counts";
import {Clients} from "@/app/clients/clients";
import Testimonials from "@/app/testimonials/testimonials";
import {Services} from "@/app/services/services";
import {Cta} from "@/app/cta/cta";
import {Portfolio} from "@/app/portfolio/portfolio";
import {Pricing} from "@/app/pricing/pricing";
import {Faq} from "@/app/faq/faq";
import {Footer} from "@/app/footer/footer";
import React from "react";
import {Contact} from "@/app/contact/contact";

export type UserType = {
    id: string;
}

export type HomeProps = {
    users: UserType[];
};

export default function Index() {

    return (
        <>
            <Header/>
            <Main/>
            <main id="main">
                <Page/>
                <Counts/>
                <Cta/>
                <Clients/>

                <Testimonials />

                <Services/>

                <Portfolio/>

                <Pricing/>

                <Faq/>

                <Contact />
            </main>


            <Footer/>

        </>
    );
}

