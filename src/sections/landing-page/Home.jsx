import React from 'react';
import Image from 'next/image';
import { Button } from '@components/Button';
import Faq from '@sections/FAQ/Faq';

const CreateAccountCard = ({ title, text }) => {
    return (
        <section>
            <header>step 01</header>
            <h3>{title}</h3>
            <p>{text}</p>
        </section>
    );
};

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
    return (
        <div className="px-6 md:text-center md:px-16 mt-24">
            <section className="text-center">
                <div>
                    <h1>
                        <span className="text-xs font-semibold md:text-base rounded-3xl py-2 px-6 mb-4 inline-block bg-pry-purple text-secondary-gold">
                            #1 Award-winning memory curation platform
                        </span>
                        <br />
                        Preserve
                        <span className="text-btn-color ml-1">
                            Every Moment
                        </span>
                        , <br /> Uncover the Full Story
                    </h1>
                    <p className="my-4">
                        Capture, curate, and share every detail of your events -
                        from photos and videos to ticket sales and attendee
                        interactions. With Deleventus, create and document a
                        complete narrative of your memories, bringing your
                        events to life.
                    </p>
                </div>
                <div className="flex flex-col justify-center md:flex-row">
                    <Button title="Get Started" />
                    <Button outlined={'true'} title="Watch Demo" />
                </div>
            </section>
            <section className="">
                <div className="xl:grid grid-cols-2">
                    <h2>Getting started with us is easy and free</h2>
                    <p>
                        Getting started is a breeze - sign up for free and
                        embark on your event planning venture. Start your event
                        planning journey with ease and unlock the potential of
                        our platform.
                    </p>
                </div>
                <div>
                    <Image />
                </div>
                <div>
                    <CreateAccountCard
                        title="Create Account"
                        text="You’ll be asked to submit your name, email address and other relevant information"
                    />
                </div>
            </section>
            <section className="bg-pry-purple px-6 md:px-16 -mx-6 md:-mx-16">
                <div className="xl:grid grid-cols-2">
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
                <div className="xl:grid grid-cols-2">
                    <h2>What Our Clients Say</h2>
                    <p>
                        We take pride in providing a seamless event planning
                        experience for our clients. Don't just take our word for
                        it—see what our clients have to say about their
                        experiences with Deleventus.
                    </p>
                </div>
            </section>
            <section className="">
                <Faq />
            </section>
            <section className="text-center bg-pry-purple py-12 px-6 md:px-16 -mx-6 md:-mx-16">
                <div className="bg-btn-color py-8 px-6 rounded-lg">
                    <h4 className="text-pry-purple">
                        Get started with Deleventus today
                    </h4>
                    <p className="text-contact-text-color">
                        Join Deleventus today to curate unforgettable event
                        memories. Say goodbye to scattered albums and fragmented
                        documentation.
                    </p>
                    <div>
                        <Button title="Get Started Free" />
                    </div>
                </div>
            </section>
        </div>
    );
}
