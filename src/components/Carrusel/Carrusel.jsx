import React, { useState } from 'react';
import './Carrusel.css';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        '/assets/Amsterdam.jpg',
        '/assets/bali.jpeg',
        '/assets/bali2.jpg',
        '/assets/Bangkok.jpg',
        '/assets/berlin1.jpg',
        '/assets/punta2.jpg',
        '/assets/Cancun.jpg',
        '/assets/HongKong.jpg',
        '/assets/NY.jpg',
        '/assets/Miami.jpg',
        '/assets/paris2.jpg',
        '/assets/Rio de janeiro2.jpg',
        '/assets/roma1.jpg',
        '/assets/Las vegas.jpg',
        '/assets/londres4.jpg',
        '/assets/Punta del este.jpg',
        '/assets/vegas2.jpg',
        '/assets/barcelona2.jpg',
        '/assets/Rio de Janeiro.webp',
        '/assets/Tokio.jpg',
        '/assets/punta3.jpg',
    ];

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="carousel">
            <h2>Explore nuestros destinos!!</h2>
            <img className="carousel-image" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            <div className="carousel-buttons">
                <button className="carousel-button prev" onClick={handlePrev}>
                    &lt;
                </button>
                <button className="carousel-button next" onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );
}


