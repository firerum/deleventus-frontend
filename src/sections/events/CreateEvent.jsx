'use client';
import { useState } from 'react';
import { InputField } from '@components/InputField';
import { Button } from '@components/Button';
import { SelectField } from '@components/SelectField';

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
    const [eventName, setEventName] = useState('');

    return (
        <div className="w-full md:flex text-sm max-w-4xl">
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
            <section className="bg-white px-8 pt-8 mb-0 md:w-1/2 overflow-hidden">
                <h1 className="text-xl">Create Event</h1>
                <form className="text-pry-text-color-1 w-full pb-12">
                    <div className="relative mb-4 h-40">
                        <label
                            className="font-bold text-xl text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 text-pry-header-title"
                            htmlFor="file"
                        >
                            Choose Event Image
                        </label>
                        <input
                            type="file"
                            id="file"
                            className="create-event absolute inset-0"
                            onChange={(e) => console.log(e.target.files[0])}
                        />
                    </div>
                    <InputField
                        type="text"
                        value={eventName}
                        placeholder="event name"
                        required
                        onChange={(e) => setEventName(e.target.value)}
                    />
                    <div className="lg:flex justify-between">
                        <InputField
                            type="date"
                            placeholder="date"
                            required
                            onChange={(e) => console.log(e.target.value)}
                        />
                        <InputField
                            type="time"
                            placeholder="time"
                            required
                            onChange={(e) => console.log(e.target.value)}
                        />
                    </div>
                    {/* TODO work on the select component */}
                    <SelectField>{['wedding', 'birthday']}</SelectField>
                    {/* <SelectField>{['Nigeria', 'Ghana']}</SelectField> */}
                </form>
                <div className="bg-[#FAFAFB] flex py-4 -mx-8 px-8 justify-end gap-4">
                    <Button className="border-1 text-pry-header-title py-2 px-4 rounded-default">
                        Back
                    </Button>
                    <Button className="bg-btn-color py-2 px-4 rounded-default text-white">
                        Next
                    </Button>
                </div>
            </section>
        </div>
    );
};
