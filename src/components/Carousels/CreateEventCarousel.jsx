'use client';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const settings = {
    spaceBetween: 40,
    slidesPerView: 1,
    allowTouchMove: false,
};

export const CreateEventCarousel = ({ children, count }) => {
    const sliderRef = useRef();
    const [sliderIndex, setSliderIndex] = useState(0);

    // to initialize the first index to zero because swiper is undefined at mount && change swiper index to count
    useEffect(() => {
        setSliderIndex(count);
        sliderRef.current.swiper.slideTo(sliderIndex);
    }, [sliderIndex, count]);

    return (
        <Swiper {...settings} ref={sliderRef}>
            {children.map((child, index) => (
                <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}
        </Swiper>
    );
};
