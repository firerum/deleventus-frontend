'use client';
import { useState } from 'react';
import { InputField } from '@components/InputField';
import { Button } from '@components/Button';

export const CreateEvent = () => {
    const [eventName, setEventName] = useState('');

    return (
        <div className="lg:flex w-full text-base max-w-4xl">
            <section className="hidden p-8 lg:w-1/2 lg:block bg-purple-base">
                <ol
                    className="text-[#E0DFE3] gap-8 text-sm list-decimal"
                    type="i"
                >
                    <li className="flex flex-col mb-8">
                        <span className="text-white mb-2">
                            EVENT INFORMATION
                        </span>
                        <span>
                            This section captures the fundamental information
                            needed to identify and schedule the event
                            accurately.
                        </span>
                    </li>
                    <li className="flex flex-col mb-8">
                        <span className="text-white mb-2">
                            EVENT DESCRIPTION
                        </span>
                        <span>
                            Provide a description or summary of the event,
                            conveying its purpose, theme, or important
                            information that attendees should know.
                        </span>
                    </li>
                    <li className="flex flex-col mb-8">
                        <span className="text-white mb-2">
                            GUEST LIST MANAGEMENT
                        </span>
                        <span>
                            Manage guest list, including adding or importing
                            contacts, sending invitations, and managing RSVPs.
                        </span>
                    </li>
                    <li className="flex flex-col mb-8">
                        <span className="text-white mb-2">
                            TICKETING AND PAYMENT
                        </span>
                        <span>
                            If applicable, set ticket prices, create ticket
                            types, and integrate a payment gateway for secure
                            online ticket sales.
                        </span>
                    </li>
                    <li className="flex flex-col">
                        <span className="text-white mb-2">SAVE & PREVIEW</span>
                        <span>
                            Preview so your guest can see how their event
                            details will be presented to before finalizing the
                            creation process.
                        </span>
                    </li>
                </ol>
            </section>
            <section className="bg-white max-w-md mx-auto p-8 lg:w-1/2 overflow-hidden">
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
                            className="absolute inset-0"
                        />
                    </div>
                    <InputField
                        type="text"
                        value={eventName}
                        placeholder="event name"
                        required
                        onChange={(e) => setEventName(e.target.value)}
                    />
                    <div className="">
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
                    <select name="" id="" className="w-full text-lg">
                        <option value="">WEDDING</option>
                        <option value="">BIRTHDAY</option>
                    </select>
                </form>
                <div className="bg-[#FAFAFB] flex pt-4 justify-end gap-4">
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
