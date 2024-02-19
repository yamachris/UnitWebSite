import logo from "../../../public/logo.svg";
import Image from "next/image";

export default function Header() {
    return (
        <div id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">

                <h1 className="logo">
                    <Image
                        src={logo}
                        className="img-fluid"
                        alt="logo du site"
                    />
                </h1>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link scrollto o" href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </div>
    );
}