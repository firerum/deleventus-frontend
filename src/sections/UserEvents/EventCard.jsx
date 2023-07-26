import Link from 'next/link';
import Image from 'next/image';
import { FaExternalLinkAlt, FaEllipsisV } from 'react-icons/fa';

export const eventData = [
    {
        name: 'Artistry Pro Met Gala',
        desc: `Immerse yourself in a night of artistic brilliance at the Artistry Gala,
         featuring captivating performances, stunning exhibits, and an opportunity
          to celebrate the beauty of art.
        `,
        date_of_event: 'Jan 17',
        avatar: '/images/featured_event_image1.jpeg',
        icon: '',
    },
    {
        name: 'Green Tech Summit',
        desc: `Dive into the world of sustainable technologies at the Green Tech Summit, 
        where experts gather to discuss about innovative and conservative solutions 
        for a greener future generation.
        `,
        date_of_event: 'Jan 17',
        avatar: '/images/featured_event_image_2.jpeg',
        icon: '',
    },
    {
        name: 'Startup Launchpad',
        desc: `Join aspiring entrepreneurs, founders and industry experts at the Startup Launchpad, 
        where groundbreaking startups pitch their ideas, network, and seek investment opportunities.
        `,
        date_of_event: 'Jan 17',
        avatar: '/images/featured_event_image_3.jpeg',
        icon: '',
    },
];

export const EventCard = ({ name, desc, date, avatar }) => {
    return (
        <article className="max-w-[300px] mx-auto text-left">
            <Image
                src={avatar}
                width={350}
                height={50}
                alt="featured event one"
                className="inline-block w-full h-auto"
                priority={true}
                placeholder="blur"
                blurDataURL={avatar}
            />
            <Link href="#" className="hover:no-underline">
                <div className="flex justify-start bg-white shadow-sm rounded-b-xl cursor-pointer">
                    <div className="px-4 py-8 order-2 relative">
                        <h3 className="text-base">{name}</h3>
                        <p className="text-pry-text-color-1 text-sm lg:text-xs">{desc}</p>
                        <span className="absolute right-6 text-[#29194a] top-0 pt-[2.3rem]">
                            <FaExternalLinkAlt />
                        </span>
                    </div>
                    <span className="order-1 py-8 pl-4 font-semibold text-secondary-gold">
                        {date}
                    </span>
                </div>
            </Link>
        </article>
    );
};
