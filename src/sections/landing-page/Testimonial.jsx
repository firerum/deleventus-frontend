import styled from 'styled-components';
import Image from 'next/image';

export const testimonialData = [
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

const _Testimonial = styled.div`
    margin-top: 2rem;
    padding-inline: 2rem;
    padding-top: 2rem;
    border-radius: 8px;
    clip-path: polygon(
        0% 0%,
        100% 0%,
        100% 80%,
        65px 80%,
        50px 92%,
        35px 80%,
        0% 80%
    );
`;

export const Testimonial = ({ name, title, content }) => {
    return (
        <div>
            <_Testimonial className="bg-purple-base h-80 md:h-64 lg:h-72">
                <p className="max-w-lg mx-auto text-gray-200 font-light text-left">
                    {content}
                </p>
            </_Testimonial>
            <figure className="flex gap-4 pl-6">
                <Image
                    className="rounded-full"
                    src="/images/universal_DP.jpeg"
                    width={50}
                    height={50}
                    alt={name}
                />
                <figcaption className="flex flex-col gap-2 text-left">
                    <span className="font-medium font-general">{name}</span>
                    <span className="text-sm">{title}</span>
                </figcaption>
            </figure>
        </div>
    );
};
