import React from 'react';
import Image from 'next/image';

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
        <div>
            <section className="hero-section">
                <h1>Preserve Every Moment, Uncover the Full Story</h1>
                <p>
                    Capture, curate, and share every detail of your events -
                    from photos and videos to ticket sales and attendee
                    interactions. With Deleventus, create a complete narrative
                    of your memories, bringing your events to life.
                </p>
                <div>
                    <button type="button">Get Started</button>
                    <button type="button">Watch Demo</button>
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
            <section className="feature-section">
                <div>
                    <h2>Featured Events</h2>
                    <p>
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
