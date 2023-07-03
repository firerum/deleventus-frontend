import React from 'react';

const faqs = [
    {
        question: `Can I customize the event registration process?`,
        answer: `Yes, you can customize the event registration process
    to align with your specific needs. Deleventus allows you
    to create personalized registration forms, gather
    attendee information, set ticket prices, and even offer
    discounts or promotional codes to enhance the
    registration experience for your attendees.`,
    },
    {
        question: `Does Deleventus support online ticket sales?`,
        answer: `Absolutely! Deleventus integrates with popular payment gateways, enabling you to sell tickets online securely. Whether it's a paid event, donation-based gathering, or free admission, our platform offers a seamless ticketing solution to facilitate transactions and provide attendees with a convenient booking experience.`,
    },
    {
        question: `Does Deleventus offer features for virtual events?`,
        answer: `Absolutely! Deleventus recognizes the importance of virtual events and offers features to support them. From live streaming capabilities to interactive virtual experiences, our platform enables you to engage remote attendees and provide a seamless virtual event experience.`,
    },
];

export default function Faq() {
    return (
        <section>
            <div>
                <h2>Frequently Asked Questions</h2>
                <p>
                    Welcome to our FAQ section where we address common queries
                    about Deleventus. Find answers to your questions below, and
                    if you don't see what you're looking for, feel free to reach
                    out to our support team for further assistance.
                </p>
            </div>
            {faqs.map((faq, idx) => (
                <div className="text-start" key={idx}>
                    <h4>{faq.question}</h4>
                    <p>
                        <span>{idx + 1}.</span>
                        {faq.answer}
                    </p>
                </div>
            ))}
        </section>
    );
}
