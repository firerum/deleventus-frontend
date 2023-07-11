import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 3,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                infinite: true,
                dots: true,
                focusOnSelect: true,
            },
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
            },
        },
    ],
};

export const CarouselSlider = ({ children }) => {
    return (
        <Slider {...settings}>
            {children.map((child, index) => (
                <div key={index}>{child}</div>
            ))}
        </Slider>
    );
};
