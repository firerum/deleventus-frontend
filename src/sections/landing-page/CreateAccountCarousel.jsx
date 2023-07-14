import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const CreateAccountCarousel = ({ children, count }) => {
    // console.log(count);
    const settings = {
        direction: 'vertical',
        autoHeight: true,
        activeIndex: null,
        initialSlide: 0,
        pagination: {
            clickable: true,
        },
        modules: [Pagination],
        // onBeforeDestroy: (s) => console.log(s),
        // onSwiper: (swiper) => console.log(swiper),
        onSlideChange: (d) => console.log(d.slides),
        // onClick: (d) => console.log(d),
        className: 'mySwiper',
    };

    return (
        <Swiper {...settings}>
            {children.map((child, index) => (
                <SwiperSlide key={index} style={{ height: '100%' }}>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
