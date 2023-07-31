import Link from 'next/link';
import Image from 'next/image';
import { FaLink } from 'react-icons/fa';

export const eventData2 = [
    {
        name: 'Artistry Pro Met Gala',
        desc: `Immerse yourself in a night of artistic brilliance at the Artistry Gala,
         featuring captivating performances, stunning exhibits, and an opportunity
          to celebrate the beauty of art.
        `,
        date_of_event: 'Jan 17, 2023',
        avatar: '/images/featured_event_image1.jpeg',
        icon: '',
    },
    {
        name: 'Green Tech Summit',
        desc: `Dive into the world of sustainable technologies at the Green Tech Summit, 
        where experts gather to discuss about innovative and conservative solutions 
        for a greener future generation.
        `,
        date_of_event: 'Jan 17, 2023',
        avatar: '/images/featured_event_image_2.jpeg',
        icon: '',
    },
    {
        name: 'Startup Launchpad Of the Silicon Valley is Here',
        desc: `Join aspiring entrepreneurs, founders and industry experts at the Startup Launchpad, 
        where groundbreaking startups pitch their ideas, network, and seek investment opportunities.
        `,
        date_of_event: 'Jan 17, 2023',
        avatar: '/images/featured_event_image_3.jpeg',
        icon: '',
    },
];

export const EventCardMini = ({ name, date, avatar }) => {
    return (
        <article className="max-w-[300px] text-left">
            <Image
                src={avatar}
                width={350}
                height={50}
                alt="featured event one"
                className="inline-block w-full h-auto"
                placeholder="blur"
                blurDataURL={avatar}
            />
            <Link href={`/events/${name}`} className="hover:no-underline">
                <div className="flex flex-col gap-2 justify-start p-4 bg-white shadow-sm rounded-b-xl cursor-pointer">
                    <h3 className="text-xs order-2 whitespace-nowrap text-ellipsis overflow-hidden">
                        {name}
                    </h3>
                    <div className="flex justify-between items-center order-1">
                        <span className="text-[#29194a] text-xs order-2">
                            <FaLink />
                        </span>
                        <span className="font-semibold text-[10px] text-secondary-gold">
                            {date}
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    );
};
