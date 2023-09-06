'use client';
import { useState } from 'react';
import { Button } from '@components/Button';
import { CreateEventCarousel } from '@components/Carousels/CreateEventCarousel';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createEventSchema } from '@utils/validation/validateEvent';
import { useMutation } from '@tanstack/react-query';
import { EventInformation } from './EventCreation/EventInformation';
import { EventTicket } from './EventCreation/EventTicket';
import { EventDescription } from './EventCreation/EventDescription';

const eventSteps = [
    {
        title: ' EVENT INFORMATION',
        content: `This section captures the fundamental information
            needed to identify and schedule the event
            accurately.`,
    },
    {
        title: 'EVENT DESCRIPTION',
        content: `Provide a description or summary of the event,
            conveying its purpose, theme, or important
            information that attendees should know.`,
    },
    {
        title: ' GUEST LIST MANAGEMENT',
        content: `Manage guest list, including adding or importing
            contacts, sending invitations, and managing RSVPs.`,
    },
    {
        title: 'TICKETING AND PAYMENT',
        content: `If applicable, set ticket prices, create ticket
            types, and integrate a payment gateway for secure
            online ticket sales.`,
    },
    {
        title: 'SAVE & PREVIEW',
        content: `Preview so you can see how your event
            details will be presented to your guest before finalizing the
            creation process.`,
    },
];

export const CreateEvent = () => {
    const [carouselCount, setCarouselCount] = useState(0);
    const [ticketType, setTicketType] = useState('PAID');
    const [eventCategory, setEventCategory] = useState('wedding'); // State for event category
    const [eventLocation, setEventLocation] = useState('nigeria'); // State for event location
    const [privacyStatus, setPrivacyStatus] = useState('public');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(createEventSchema),
    });

    const onSubmitData = (data) => {
        console.log({
            ...data,
            ticketType: ticketType?.props?.children,
            category: eventCategory?.props?.value,
            venue: eventLocation?.props?.value,
            status: privacyStatus?.props?.value,
        });
    };

    return (
        <div className="w-full h-full md:flex text-sm max-w-4xl">
            <section className="hidden px-8 md:w-1/2 md:block bg-purple-base">
                <ol className="text-[#E0DFE3] gap-8 list-decimal" type="i">
                    {eventSteps.map((step, index) => (
                        <li key={index} className="flex flex-col mb-8">
                            <span className="text-dashboard-gold font-medium mb-2 ">
                                {step.title}
                            </span>
                            <span>{step.content}</span>
                        </li>
                    ))}
                </ol>
            </section>
            <section className="bg-[#f8fafc] px-8 pt-8 mb-0 md:w-1/2 overflow-y-scroll">
                <h1 className="text-xl">Create Event</h1>
                <form
                    className="text-pry-text-color-1 w-full pb-12"
                    onSubmit={handleSubmit(onSubmitData)}
                >
                    <CreateEventCarousel count={carouselCount}>
                        <EventInformation
                            register={register}
                            errors={errors}
                            setEventCategory={setEventCategory}
                            setEventLocation={setEventLocation}
                            setPrivacyStatus={setPrivacyStatus}
                        />
                        <EventDescription register={register} errors={errors} />
                        <EventTicket
                            register={register}
                            errors={errors}
                            setTicketType={setTicketType}
                        />
                    </CreateEventCarousel>
                    <div className="flex py-4 -mx-8 px-8 justify-end gap-4">
                        <Button
                            disabled={carouselCount === 0 && true}
                            className="border-1 text-pry-header-title py-2 px-4 rounded-default disabled:bg-gray-300 disabled:text-white"
                            onClick={() =>
                                setCarouselCount((prev) =>
                                    prev <= 0 ? 0 : prev - 1
                                )
                            }
                        >
                            Back
                        </Button>
                        <Button
                            disabled={carouselCount === 2 && true}
                            className="bg-btn-color py-2 px-4 rounded-default text-white disabled:bg-gray-300"
                            onClick={() =>
                                setCarouselCount((prev) =>
                                    prev >= 2 ? 2 : prev + 1
                                )
                            }
                        >
                            Next
                        </Button>
                    </div>
                    {carouselCount === 2 && (
                        <Button
                            className={
                                'bg-btn-color w-full text-white font-semibold py-default px-4 mt-2 rounded-default'
                            }
                        >
                            Finish
                        </Button>
                    )}
                </form>
            </section>
        </div>
    );
};
