'use client';
import { useState, useRef } from 'react';
import { Button } from '@components/Button';
import Faq from '@sections/FAQ/Faq';
import { faqs } from '@faq';
import { CreateAccountCard } from '@sections/landing-page/CreateAccountCard';
import Link from 'next/link';
import { Testimonial, testimonialData } from './Testimonial';
import { EventCard, eventData } from '@sections/events/EventCard';
import { Carousel } from '@components/Carousels/Carousel';
import { FirstProcess } from './getting-started/FirstProcess';
import { SecondProcess } from './getting-started/SecondProcess';
import { ThirdProcess } from './getting-started/ThirdProcess';
import { FourthProcess } from './getting-started/FourthProcess';
import { FaPause, FaPlay } from 'react-icons/fa';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
    h2PAnimation,
    steps,
    faqPAnimation,
    testimonialContent,
    featuredEvent,
} from '@utils/framer-motion/variants';
import { VerticalCarousel } from '@components/Carousels/VerticalCarousel';
import { ScrollToTopButton } from '@components/ScrollToTopButton';

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
    const [videoDemo, setVideoDemo] = useState(false);
    const targetRef = useRef(null);
    const isInView = useInView(targetRef);
    const switchAnimation = useAnimation();

    if (isInView) {
        switchAnimation.start('visible');
    }

    return (
        <div className="px-6 md:text-center md:px-16 overflow-clip">
            <motion.section
                className="banner bg-pry-purple text-center xl:h-screen pt-24 pb-0 px-6 md:px-16 -mx-6 md:-mx-16 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div>
                    <h1>
                        <span className="text-xs font-semibold md:text-base rounded-3xl py-2 px-6 mb-4 inline-block bg-[#fefbf4] text-secondary-gold">
                            #1 Award-winning memory curation platform
                        </span>
                        <br />
                        Preserve
                        <span className="text-btn-color ml-1">
                            Every Moment
                        </span>
                        , <br /> Uncover the Full Story
                    </h1>
                    <motion.p
                        className="my-4 max-w-3xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Capture, curate, and share every detail of your events -
                        from photos and videos to ticket sales and attendee
                        interactions. With Deleventus, create and document a
                        complete narrative of your memories, bringing your
                        events to life.
                    </motion.p>
                </div>
                <motion.div
                    className="flex flex-col justify-center md:flex-row gap-4 mt-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Link
                        href="/signup"
                        className="py-3 px-8 font-medium rounded-default text-pry-purple bg-btn-color"
                    >
                        Get Started
                    </Link>
                    <Button
                        className="border-1 border-btn-color py-3 px-8 flex justify-center items-center gap-4 font-medium rounded-default"
                        onClick={() => setVideoDemo((prev) => !prev)}
                    >
                        <span className="order-2"> Watch Demo</span>
                        {videoDemo ? <FaPause /> : <FaPlay />}
                    </Button>
                </motion.div>
                <motion.div
                    className="bg-white shadow-sm max-w-3xl mx-auto h-56 mt-8 rounded-t-xl"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                ></motion.div>
            </motion.section>
            <section>
                <div
                    className="mb-20 xxl:grid grid-cols-2 justify-between xxl:text-left"
                    ref={targetRef}
                >
                    <motion.h2
                        className="xxl:w-2/3"
                        initial="hidden"
                        whileInView="visible"
                        variants={h2PAnimation}
                        viewport={{ once: true }}
                    >
                        Getting started with us is easy and free
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={h2PAnimation}
                        viewport={{ once: true }}
                    >
                        Getting started is a breeze - sign up for free and
                        embark on your event planning venture. Start your event
                        planning journey with ease and unlock the potential of
                        our platform.
                    </motion.p>
                </div>
                <motion.div
                    className="relative -z-10"
                    initial="hidden"
                    animate={switchAnimation}
                    variants={steps}
                >
                    <VerticalCarousel currentIndex={count}>
                        <FirstProcess />
                        {/* slide 2 */}
                        <SecondProcess />
                        {/* slide 3 */}
                        <ThirdProcess />
                        {/* slide 4 */}
                        <FourthProcess />
                    </VerticalCarousel>
                </motion.div>
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
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={h2PAnimation}
                        viewport={{ once: true }}
                    >
                        Featured Events
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={h2PAnimation}
                        viewport={{ once: true }}
                    >
                        Explore a curated collection of remarkable gatherings,
                        conferences, parties, fundraisers, and more. Whether
                        you're looking for networking opportunities,
                        entertainment, or a chance to support a worthy cause,
                        our featured events offer something for everyone.
                    </motion.p>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={featuredEvent}
                    viewport={{ once: true }}
                >
                    <Carousel>
                        {eventData.map((data, index) => (
                            <Link href={`explore/${data.name}`} key={index}>
                                <EventCard
                                    name={data.name}
                                    desc={data.desc}
                                    date={data.date_of_event}
                                    avatar={data.avatar}
                                />
                            </Link>
                        ))}
                    </Carousel>
                </motion.div>
                <div className="swiper-custom-pagination"></div>
            </section>
            <section>
                <div className="xxl:grid grid-cols-2 xxl:text-left mb-12">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={h2PAnimation}
                        viewport={{ once: true }}
                    >
                        What Our Clients Say
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={h2PAnimation}
                        viewport={{ once: true }}
                    >
                        We take pride in providing a seamless event planning
                        experience for our clients. Don't just take our word for
                        it—see what our clients have to say about their
                        experiences with Deleventus.
                    </motion.p>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={testimonialContent}
                    viewport={{ once: true }}
                >
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
                </motion.div>
            </section>
            <section className="max-w-3xl mx-auto faq">
                <div className="mb-16">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        variants={h2PAnimation}
                        viewport={{ once: true }}
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={faqPAnimation}
                        viewport={{ once: true }}
                    >
                        Welcome to our FAQ section where we address common
                        queries about Deleventus. Find answers to your questions
                        below, and if you don't see what you're looking for,
                        feel free to reach out to our support team for further
                        assistance.
                    </motion.p>
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
                    <motion.h2
                        className="text-pry-purple"
                        initial="hidden"
                        whileInView="visible"
                        variants={faqPAnimation}
                        viewport={{ once: true }}
                    >
                        Get started with Deleventus today
                    </motion.h2>
                    <motion.p
                        className="text-sm text-contact-text-color font-light md:text-base md:w-3/4 md:mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        variants={faqPAnimation}
                        viewport={{ once: true }}
                    >
                        Join Deleventus today to curate unforgettable event
                        memories. Capture and share photos/videos, manage ticket
                        sales, engage with attendees, and preserve valuable
                        remarks. Say goodbye to scattered albums and fragmented
                        documentation.
                    </motion.p>
                    <motion.div
                        className="mt-8"
                        initial="hidden"
                        whileInView="visible"
                        variants={faqPAnimation}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/signup"
                            className="py-4 px-8 font-medium rounded-default text-pry-purple bg-btn-color"
                        >
                            Get Started Free
                        </Link>
                    </motion.div>
                </div>
            </section>
            <ScrollToTopButton />
        </div>
    );
}
