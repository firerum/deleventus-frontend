'use client';
import { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaRegCircle } from 'react-icons/fa';
import { Testimonial } from './Testimonial';

export const sliderData = [
    {
        id: 1,
        name: 'Gbenga Durojaiye',
        content: `Deleventus made our wedding planning journey truly
        memorable. From managing guest lists to personalized
        recommendations, the platform catered to all our needs. The
        virtual reality tours were a standout feature, giving us a
        sneak peek of our dream venue before the big day.`,
        title: 'Newly Weds',
    },
    {
        id: 2,
        name: 'Benjamin Parkinson',
        content: `As a professional event planner, Deleventus has 
        become my go-to platform. Its centralized event management, 
        bulk communication capabilities, and seamless integration 
        with Google Maps have significantly streamlined my workflow.
        It's a must-have tool for any event professional.`,
        title: 'Professional Event Organizer',
    },
    {
        id: 3,
        name: 'John Doe',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Omnis, at placeat nobis cumque fugit expedita sunt. 
        Sunt non laudantium sed.`,
        title: 'Mr Worldwide',
    },
];

export const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((current) =>
            current === sliderData.length - 1 ? 0 : current + 1
        );
    };

    const prevSlide = () => {
        setCurrent((current) =>
            current === 0 ? sliderData.length - 1 : current - 1
        );
    };

    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null;
    }

    return (
        <div className="relative">
            <div className="flex justify-between">
                <FaArrowLeft onClick={prevSlide} />
                <FaArrowRight onClick={nextSlide} />
                {/* <FaRegCircle /> */}
            </div>
            {sliderData.map((testimony, index) => {
                return (
                    <div
                        className={
                            index === current ? 'opacity-100' : 'opacity-0'
                        }
                        key={index}
                    >
                        {index === current && (
                            <Testimonial
                                key={testimony.id}
                                name={testimony.name}
                                title={testimony.title}
                                content={testimony.content}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};
