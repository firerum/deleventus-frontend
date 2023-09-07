'use client';
import { useState } from 'react';
import { EventDescription } from './EventCreation/EventDescription';
import { EventInformation } from './EventCreation/EventInformation';
import { EventTicket } from './EventCreation/EventTicket';
import { Button } from '@components/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createEventSchema } from '@utils/validation/validateEvent';

export const EditEvent = () => {
    const [eventName, setEventName] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(createEventSchema),
    });

    return (
        <section className="bg-white p-8 h-full w-full max-w-4xl overflow-auto">
            <form>
                <div className="text-center mb-4">
                    <h1 className="text-3xl">Edit Event</h1>
                    <p className="">
                        Make updates and changes, fine-tune details, and keep
                        your events on track with ease.
                    </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl">Event Details</h2>
                    <EventInformation register={register} errors={errors} />
                </div>
                <div className="mb-4">
                    <h2 className="text-xl">Event Description</h2>
                    <EventDescription register={register} errors={errors} />
                </div>
                <div className="mb-4">
                    <h2 className="text-xl">Event Ticket</h2>
                    <EventTicket register={register} errors={errors} />
                </div>
                <Button
                    className="w-full bg-btn-color text-white py-3 px-4 rounded-default"
                    onClick={(e) => e.preventDefault()}
                >
                    Save
                </Button>
            </form>
        </section>
    );
};
