import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const settings = {
    direction: 'vertical',
    autoHeight: true,
    pagination: {
        clickable: true,
    },
    modules: [Pagination],
    onSlideChange: () => console.log('slide change'),
    className: 'mySwiper',
};

export const CreateAccountCarousel = ({ children }) => {
    return (
        <Swiper {...settings}>
            {children.map((child, index) => (
                <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}
        </Swiper>
    );
};
