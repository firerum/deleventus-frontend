import { EventCard, eventData } from '@sections/UserEvents/EventCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
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
            },
        },
    ],
};

export const EventCardSlider = () => {
    return (
        <div className="">
            <Slider {...settings}>
                {eventData.map((data, index) => (
                    <div className="mr-6">
                        <EventCard
                            key={index}
                            name={data.name}
                            desc={data.desc}
                            date={data.date_of_event}
                            avatar={data.avatar}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};
