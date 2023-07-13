import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const settings = {
    spaceBetween: 20,
    slidesPerView: 1,
    onSlideChange: () => console.log('slide change'),
    onSwiper: (swiper) => console.log(swiper),
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
    },
};

export const Carousel = ({ children }) => {
    return (
        <Swiper {...settings}>
            {children.map((child, index) => (
                <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}
        </Swiper>
    );
};

// Carousel.displayName = 'SwiperSlider';
