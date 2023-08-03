import React from "react";
import "./FooterPag.css";
import facebook from './assets/bxl-facebook-circle.png';
import twitter from './assets/bxl-twitter.png';
import instagram from './assets/bxl-instagram.png';


export default function Footer() {
    return (
        <footer>

            <div className="footer-container">
                <p>
                    Copyright © 2023
                    All rights reserved
                </p>
                <div className="social-links">
                    <a href="https://es-la.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" />
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="facebook" />
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="facebook" />
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};


