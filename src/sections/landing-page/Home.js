import React from 'react';
import Image from 'next/image';
import { Button } from '@components/Button';

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
            <Image />
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </article>
    );
};

export default function Home() {
    return (
        <div className="px-10 pb-20">
            <section className="hero-section text-center">
                <h1>
                    <span className='text-sm rounded-md bg-gradient-to-r text-secondary-gold'>#1 Award-winning memory curation platform</span>{' '}
                    <br />
                    Preserve{' '}
                    <span className="text-btn-color">Every Moment</span>, <br />{' '}
                    Uncover the Full Story
                </h1>
                <p className="my-4">
                    Capture, curate, and share every detail of your events -
                    from photos and videos to ticket sales and attendee
                    interactions. With Deleventus, create a complete narrative
                    of your memories, bringing your events to life.
                </p>
                <div className="flex flex-col">
                    <Button title="Get Started" />
                    <Button title="Watch Demo" />
                </div>
            </section>
            <section className="service-section">
                <div>
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
            <section className="feature-section bg-pry-purple px-10 -mx-10">
                <div>
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
            <section className="testimonial">
                <div>
                    <h2>What Our Clients Say</h2>
                    <p>
                        We take pride in providing a seamless event planning
                        experience for our clients. Don't just take our word for
                        it—see what our clients have to say about their
                        experiences with Deleventus.
                    </p>
                </div>
            </section>
            <section className="FAQ">
                <div>
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
                    <h4>Can I customize the event registration process?</h4>
                    <p>
                        A: Yes, you can customize the event registration process
                        to align with your specific needs. Deleventus allows you
                        to create personalized registration forms, gather
                        attendee information, set ticket prices, and even offer
                        discounts or promotional codes to enhance the
                        registration experience for your attendees.
                    </p>
                </div>
            </section>
        </div>
    );
}
