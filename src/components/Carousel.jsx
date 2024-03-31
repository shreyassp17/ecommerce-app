/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';

const Carousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const changeSlide = (index) => {
        setCurrentSlide(index)
    }

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, [currentSlide]);

    return (
        <div className="relative w-full overflow-hidden h-60 sm:h-96">
            <div className="flex h-full" ref={slideRef}>
                {slides.map((slide, index) => (
                    <div className="w-full flex-shrink-0" key={index}>
                        <img src={slide.image} alt={slide.title} className="w-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className={`w-8 cursor-pointer absolute top-[95%] left-4 h-1 ${currentSlide === 0 ? "bg-slate-50" : "bg-gray-600"}`} onClick={() => changeSlide(0)}></div>
            <div className={`w-8 cursor-pointer absolute top-[95%] left-14 h-1 ${currentSlide === 1 ? "bg-slate-50" : "bg-gray-600"}`} onClick={() => changeSlide(1)}></div>
            <div className={`w-8 cursor-pointer absolute top-[95%] left-24 h-1 ${currentSlide === 2 ? "bg-slate-50" : "bg-gray-600"}`} onClick={() => changeSlide(2)}></div>
        </div >
    );
};

export default Carousel;
