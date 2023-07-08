import { PricingCard } from './PricingCard';
import Faq from '@sections/FAQ/Faq';
import { pricingData } from './pricingData';

export default function Pricing() {
    const faqs = [
        {
            title: 'What is Deleventus ?',
            content: `Deleventus is your one-stop hub to curate and organize all your events, 
            eliminating the frustration of scattered albums and documents.
            Our platform also offers services to assist you in planning and automating future events effortlessly.`,
        },
        {
            title: 'How do I cancel ?',
            content: `Deleventus offers a high level of flexibility without any bothersome contracts or obligations. 
            Cancelling your subscription is a breeze with just two simple clicks 
            through our online platform. We don't impose any cancellation fees, 
            allowing you to start or end your subscription whenever you please.`,
        },
        {
            title: 'How secure is Deleventus ?',
            content: `At Deleventus, safeguarding your trusted data is our utmost priority. 
            We employ a robust combination of physical, procedural, and 
            technical measures to ensure the integrity and security of your information. 
            With regular data backups in place, we provide reliable protection against loss and swift recovery options. 
            Rest assured, your data is in competent hands.`,
        },
    ];

    return (
        <section className="pt-24 px-6 md:px-16">
            <div className="text-center">
                <h1 className="font-semibold">Pricing</h1>
                <p>Centralize all of your events with ease. Start free.</p>
                <p>Access Deleventus's features. No credit card required.</p>
            </div>
            <section>
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
                    {pricingData.map((data, index) => (
                        <PricingCard
                            key={index}
                            title={data?.title}
                            sub_title={data?.sub_title}
                            price={data?.price}
                            info_header={data?.info_header}
                            info={data?.info}
                        />
                    ))}
                </div>
            </section>
            <section className="max-w-3xl mx-auto">
                <div>
                    <h2 className="mb-16 md:text-center">
                        Frequently Asked Questions
                    </h2>
                    {faqs.map((faq, index) => (
                        <Faq
                            key={index}
                            title={faq.title}
                            content={faq.content}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </section>
    );
}
