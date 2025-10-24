// components/Carousel.jsx
import React, { useState, useEffect } from "react";

export const Carousel = ({ items = [], interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    // Autoplay
    useEffect(() => {
        if (items.length === 0) return;
        const timer = setInterval(() => {
            nextSlide();
        }, interval);
        return () => clearInterval(timer);
    }, [currentIndex, interval, items]);

    if (!items || items.length === 0)
        return (
            <div className="w-full h-[30vh] flex items-center justify-center bg-gray-100 text-gray-600 rounded-xl">
                Loading carousel...
            </div>
        );

    return (
        <div className="relative w-full overflow-hidden rounded-xl">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[20vh] sm:h-[25vh] md:h-[30vh] object-cover"
                        />
                        <div className="px-4 py-2 bg-white">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 z-10"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 z-10"
            >
                &#10095;
            </button>
        </div>
    );
};
