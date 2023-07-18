'use client';
import { useState } from 'react';
import { Button } from '@components/Button';
import Faq from '@sections/FAQ/Faq';
import { faqs } from '@faq';
import { CreateAccountCard } from '@sections/landing-page/CreateAccountCard';
import Link from 'next/link';
import { Testimonial, testimonialData } from './Testimonial';
import { EventCard, eventData } from '@sections/UserEvents/EventCard';
import { Carousel } from '@components/Carousels/Carousel';
import { CreateAccountCarousel } from './CreateAccountCarousel';
import { FirstProcess } from './getting-started/FirstProcess';
import { SecondProcess } from './getting-started/SecondProcess';
import { ThirdProcess } from './getting-started/ThirdProcess';
import { FourthProcess } from './getting-started/FourthProcess';
import { HomeAnimation } from './Animation/HomeAnimation';
import { motion } from 'framer-motion';

const processCard = [
    {
        id: 1,
        title: 'Create Account',
        step: 'Step 01',
        content:
            'You’ll be asked to submit your name, email address and other relevant information',
    },
    {
        id: 2,
        title: 'Create and Manage Events',
        step: 'Step 02',
        content:
            'Provide event details, manage RSVPs, and send invitations seamlessly.',
    },
    {
        id: 3,
        title: 'Ticketing and Secure Payments',
        step: 'Step 03',
        content:
            'Set ticket prices, manage sales, and offer secure payment for your event. Track ticket sales.',
    },
    {
        id: 4,
        title: 'Upload Precious Memories',
        step: 'Step 04',
        content:
            'Upload and share photos, videos, and other media to create a comprehensive album of event memories.',
    },
];

export default function Home() {
    /* count to change get started step on button click */
    const [count, setCount] = useState(0);

    return (
        <div className="px-6 md:text-center md:px-16">
            <section className="banner bg-pry-purple text-center xl:h-screen pt-24 px-6 md:px-16 -mx-6 md:-mx-16 ">
                <HomeAnimation>
                    <div>
                        <motion.h1>
                            <span className="text-xs font-semibold md:text-base rounded-3xl py-2 px-6 mb-4 inline-block bg-[#fefbf4] text-secondary-gold">
                                #1 Award-winning memory curation platform
                            </span>
                            <br />
                            Preserve
                            <span className="text-btn-color ml-1">
                                Every Moment
                            </span>
                            , <br /> Uncover the Full Story
                        </motion.h1>
                        <p className="my-4 max-w-3xl mx-auto">
                            Capture, curate, and share every detail of your
                            events - from photos and videos to ticket sales and
                            attendee interactions. With Deleventus, create and
                            document a complete narrative of your memories,
                            bringing your events to life.
                        </p>
                    </div>
                </HomeAnimation>
                <div className="flex flex-col justify-center md:flex-row gap-4 mt-8">
                    <Link
                        href="/signup"
                        className="py-4 px-8 font-medium rounded-default text-pry-purple bg-btn-color"
                    >
                        Get Started
                    </Link>
                    <Button outlined={'true'} title="Watch Demo" />
                </div>
            </section>
            <section className="">
                <div className="mb-20 xxl:grid grid-cols-2 justify-between xxl:text-left">
                    <h2 className="xxl:w-2/3">
                        Getting started with us is easy and free
                    </h2>
                    <p>
                        Getting started is a breeze - sign up for free and
                        embark on your event planning venture. Start your event
                        planning journey with ease and unlock the potential of
                        our platform.
                    </p>
                </div>
                <div className="pointer-events-none">
                    <CreateAccountCarousel count={count}>
                        <FirstProcess />
                        {/* slide 2 */}
                        <SecondProcess />
                        {/* slide 3 */}
                        <ThirdProcess />
                        {/* slide 4 */}
                        <FourthProcess />
                    </CreateAccountCarousel>
                </div>
                <div className="grid grid-cols-2 gap-4 py-8 xl:grid-cols-3 xxl:grid-cols-4">
                    {processCard.map((pc, index) => (
                        <CreateAccountCard
                            key={pc.id}
                            title={pc.title}
                            step={pc.step}
                            content={pc.content}
                            setCount={setCount}
                            index={index}
                            count={count}
                        />
                    ))}
                </div>
            </section>
            <section className="bg-pry-purple px-6 md:px-16 -mx-6 md:-mx-16 ">
                <div className="xxl:grid grid-cols-2 xxl:text-left mb-16">
                    <h2>Featured Events</h2>
                    <p>
                        Explore a curated collection of remarkable gatherings,
                        conferences, parties, fundraisers, and more. Whether
                        you're looking for networking opportunities,
                        entertainment, or a chance to support a worthy cause,
                        our featured events offer something for everyone.
                    </p>
                </div>
                <div className="">
                    <Carousel>
                        {eventData.map((data, index) => (
                            <EventCard
                                key={index}
                                name={data.name}
                                desc={data.desc}
                                date={data.date_of_event}
                                avatar={data.avatar}
                            />
                        ))}
                    </Carousel>
                </div>
                <div className="swiper-custom-pagination"></div>
            </section>
            <section className="">
                <div className="xxl:grid grid-cols-2 xxl:text-left mb-12">
                    <h2>What Our Clients Say</h2>
                    <p>
                        We take pride in providing a seamless event planning
                        experience for our clients. Don't just take our word for
                        it—see what our clients have to say about their
                        experiences with Deleventus.
                    </p>
                </div>
                <div className="">
                    <Carousel>
                        {testimonialData.map((data, index) => (
                            <Testimonial
                                key={index}
                                name={data.name}
                                title={data.title}
                                content={data.content}
                                avatar={data.image}
                            />
                        ))}
                    </Carousel>
                </div>
            </section>
            <section className="max-w-3xl mx-auto faq">
                <div className="mb-16">
                    <h2>Frequently Asked Questions</h2>
                    <p>
                        Welcome to our FAQ section where we address common
                        queries about Deleventus. Find answers to your questions
                        below, and if you don't see what you're looking for,
                        feel free to reach out to our support team for further
                        assistance.
                    </p>
                </div>
                <div>
                    {faqs.map((faq, index) => (
                        <Faq
                            key={index}
                            title={faq.question}
                            content={faq.answer}
                            index={index}
                        />
                    ))}
                </div>
            </section>
            <section className="text-center bg-pry-purple py-16 px-6 md:px-16 -mx-6 md:-mx-16">
                <div className="font-medium py-12 px-6 max-w-3xl mx-auto rounded-lg contact">
                    <h2 className="text-pry-purple">
                        Get started with Deleventus today
                    </h2>
                    <p className="text-sm text-contact-text-color font-light md:text-base md:w-3/4 md:mx-auto">
                        Join Deleventus today to curate unforgettable event
                        memories. Capture and share photos/videos, manage ticket
                        sales, engage with attendees, and preserve valuable
                        remarks. Say goodbye to scattered albums and fragmented
                        documentation.
                    </p>
                    <div className="mt-8">
                        <Link
                            href="/signup"
                            className="py-4 px-8 font-medium rounded-default text-pry-purple bg-btn-color"
                        >
                            Get Started Free
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
