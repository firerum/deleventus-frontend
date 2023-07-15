import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const CreateAccountCarousel = ({ children, count }) => {
    const sliderRef = useRef();
    const [sliderIndex, setSliderIndex] = useState(0);

    // to initialize the first index to zero because swiper is undefined at mount && change swiper index to count
    useEffect(() => {
        setSliderIndex(count);
        sliderRef.current.swiper.slideTo(sliderIndex);
    }, [sliderIndex, count]);

    const settings = {
        direction: 'vertical',
        autoHeight: true,
        speed: 850,
        className: 'mySwiper',
    };

    return (
        <Swiper {...settings} ref={sliderRef} className="banner-slide">
            {children.map((child, index) => (
                <SwiperSlide key={index}>{child}</SwiperSlide>
            ))}
        </Swiper>
    );
};
