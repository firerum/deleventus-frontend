import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const settings = {
    spaceBetween: 40,
    slidesPerView: 1,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: true,
    // },
    // pagination: {
    //     clickable: true,
    //     el: '.swiper-custom-pagination',
    // },
    // modules: [Pagination, Autoplay],
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
                <div className="swiper-slide" key={index}>
                    <SwiperSlide key={index}>{child}</SwiperSlide>
                </div>
            ))}
        </Swiper>
    );
};

// Carousel.displayName = 'SwiperSlider';
