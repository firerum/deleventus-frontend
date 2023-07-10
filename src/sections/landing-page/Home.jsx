'use client';
import Image from 'next/image';
import { Button } from '@components/Button';
import Faq from '@sections/FAQ/Faq';
import { faqs } from '@faq';
import { CreateAccountCard } from '@sections/landing-page/CreateAccountCard';
import { FaCheckCircle } from 'react-icons/fa';
import { TestimonialSlider, sliderData } from './TestimonialSlider';
import Link from 'next/link';
import { Testimonial } from './Testimonial';
import { useWindowSize } from '@utils/useWindowSize';

const processCard = [
    { id: 1, title: 'Create Account', step: 'Step 01' },
    { id: 2, title: 'Create Account', step: 'Step 02' },
    { id: 3, title: 'Create Account', step: 'Step 03' },
    { id: 4, title: 'Create Account', step: 'Step 04' },
];

const EventCard = ({ title, desc }) => {
    return (
        <article>
            {/* <Image src="" width={50} height={50} alt="" /> */}
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </article>
    );
};

export default function Home() {
    const size = useWindowSize(360);

    return (
        <div className="px-6 md:text-center md:px-16">
            <section className="banner bg-pry-purple text-center xl:h-screen pt-24 px-6 md:px-16 -mx-6 md:-mx-16 ">
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
                    <p className="my-4 max-w-3xl mx-auto">
                        Capture, curate, and share every detail of your events -
                        from photos and videos to ticket sales and attendee
                        interactions. With Deleventus, create and document a
                        complete narrative of your memories, bringing your
                        events to life.
                    </p>
                </div>
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
                <div className="lg:flex justify-start gap-10">
                    <div className="get-started-image-bg mb-4 pt-20 px-6 xl:px-8 xl:pt-24 rounded-2xl">
                        <Image
                            src="/images/universal_DP.jpeg"
                            width={750}
                            height={200}
                            alt="sign up process visuals"
                            className="rounded-2xl rounded-b-none"
                        />
                    </div>
                    <div className="xl:mt-8">
                        <div className="text-left border-b pb-8">
                            <header className="font-general font-medium text-[#645F6E]">
                                Step 01
                            </header>
                            <h3 className="font-semibold my-2">
                                Create Account
                            </h3>
                            <p className="text-pry-text-color-1 flex items-start">
                                You’ll be asked to submit your name, email
                                address and other relevant informations
                            </p>
                        </div>
                        <div className="text-left">
                            <div className="pt-8">
                                <p className="text-pry-text-color-1 mb-6 relative pl-6">
                                    With our lightning-fast{' '}
                                    <span className="text-purple-base font-medium">
                                        30 Seconds Sign-Up Process,
                                    </span>{' '}
                                    you'll be ready to organize events in no
                                    time.
                                    <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                                </p>
                            </div>
                            <p className="text-pry-text-color-1 mb-6 relative pl-6">
                                Take full control of your{' '}
                                <span className="text-purple-base font-medium">
                                    Privacy Settings
                                </span>{' '}
                                while effortlessly creating an account.
                                <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                            </p>
                            <p className="text-pry-text-color-1 mb-6 relative pl-6">
                                Experience the convenience of{' '}
                                <span className="text-purple-base font-medium">
                                    Passwordless Integration
                                </span>{' '}
                                with leading platforms like Google, Apple, and
                                more.
                                <FaCheckCircle className="text-btn-color absolute left-0 top-1" />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 py-8 xxl:grid-cols-4">
                    {processCard.map((pc) => (
                        <CreateAccountCard
                            key={pc.id}
                            title={pc.title}
                            step={pc.step}
                        />
                    ))}
                </div>
            </section>
            <section className="bg-pry-purple px-6 md:px-16 -mx-6 md:-mx-16">
                <div className="xxl:grid grid-cols-2 xxl:text-left mb-16">
                    <h2>Featured Events</h2>
                    <p className="text-pry-text-color-2">
                        Explore a curated collection of remarkable gatherings,
                        conferences, parties, fundraisers, and more. Whether
                        you're looking for networking opportunities,
                        entertainment, or a chance to support a worthy cause,
                        our featured events offer something for everyone.
                    </p>
                    <EventCard />
                </div>
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
                <div className="max-w-lg mx-auto overflow-hidden xl:grid xl:grid-cols-2 xxl:grid-cols-3 gap-6">
                    {size <= 960 ? (
                        <TestimonialSlider>
                            {sliderData.map((data, index) => (
                                <Testimonial
                                    key={index}
                                    name={data.name}
                                    title={data.title}
                                    content={data.content}
                                />
                            ))}
                        </TestimonialSlider>
                    ) : (
                        sliderData.map((data, index) => (
                            <Testimonial
                                key={index}
                                name={data.name}
                                title={data.title}
                                content={data.content}
                            />
                        ))
                    )}
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
                    <p className="text-xs text-contact-text-color font-light md:text-base md:w-3/4 md:mx-auto">
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
