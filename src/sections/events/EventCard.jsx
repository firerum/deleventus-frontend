import Image from 'next/image';

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
        date_of_event: 'Jan 20',
        avatar: '/images/featured_event_image_2.jpeg',
        icon: '',
    },
    {
        name: 'Startup Launchpad',
        desc: `Join aspiring entrepreneurs, founders and industry experts at the Startup Launchpad, 
        where groundbreaking startups pitch their ideas, network, and seek investment opportunities.
        `,
        date_of_event: 'Feb 11',
        avatar: '/images/featured_event_image_3.jpeg',
        icon: '',
    },
    {
        name: 'Simbi & Omogbolahan',
        desc: `Amidst a sea of love and joy, two souls entwined their destinies on this 
        enchanting day of love. With hearts brimming with excitement and eyes locked in a timeless gaze, 
        they embarked on a journey of togetherness, promising to cherish and uphold each other through 
        life's every twist and turn. Surrounded by the warmth of family and friends, laughter echoed 
        through the air as they exchanged vows, sealing their love in an unbreakable bond. 
        As the sun dipped below the horizon, casting a golden glow over the celebration, t
        he world seemed to stand still, honoring the beauty of love's pure union. 
        And so, a new chapter unfolded, overflowing with dreams, hopes, and the promise of an 
        everlasting love story, etched in the hearts of all who bore witness to their extraordinary union.
        `,
        date_of_event: 'Dec 18',
        avatar: '/images/wedding-reduced.jpeg',
        icon: '',
    },
];

export const EventCard = ({ name, desc, date, avatar }) => {
    return (
        <article className="max-w-[330px] mx-auto text-left rounded-xl zoom-over">
            <div className="overflow-hidden rounded-xl">
                <Image
                    src={avatar}
                    width={350}
                    height={50}
                    alt="featured event one"
                    className="inline-block w-full h-44 object-fill rounded-xl transition-all transform-gpu"
                    placeholder="blur"
                    blurDataURL={avatar}
                />
            </div>
            <div className="flex justify-start bg-white shadow-sm rounded-b-xl cursor-pointer">
                <div className="px-4 py-8 order-2 relative">
                    <h3 className="title text-base">{name}</h3>
                    <p className="desc text-pry-text-color-1 text-sm lg:text-xs">
                        {desc}
                    </p>
                </div>
                <span className="order-1 py-8 pl-4 font-semibold text-secondary-gold">
                    {date}
                </span>
            </div>
        </article>
    );
};
