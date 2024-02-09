import React from "react";
import logo from "../images/Logo .svg";

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna
                        aliqua.</p>
                </div>

                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Adress: <br />1234 South Street, New York, NY 10001</li>
                        <li>Phone: <br />123-456-7890</li>
                        <li>Email: <br />littlelomon@littlelemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>


            </section>
        </footer>
    );
}

export default Footer;