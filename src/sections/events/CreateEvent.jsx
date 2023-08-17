'use client';
import { useState } from 'react';
import { InputField } from '@components/InputField';
import { Button } from '@components/Button';
import {
    FaPencilAlt,
    FaMoneyBill,
    FaTicketAlt,
    FaIdBadge,
    FaComments,
} from 'react-icons/fa';
import Image from 'next/image';
import { CreateEventCarousel } from '@components/Carousels/CreateEventCarousel';
import { SelectField } from '@components/SelectField';
import { InputDateTimeField } from '@components/InputField';
import { DateField } from '@components/DateField';

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

const category = [
    'wedding',
    'birthday',
    'convocation',
    'anniversary',
    'concert',
    'festival',
    'other',
];
const countries = [
    'Nigeria',
    'Ghana',
    'Canada',
    'Cameroon',
    'Senegal',
    'United States',
    'United Kingdom',
];
const privacyStatus = ['public', 'private', 'personal'];

export const EventInformation = () => {
    const [eventName, setEventName] = useState('');
    const [eventAvatar, setEventAvatar] = useState('');
    const [cat, setCat] = useState('wedding');
    const [country, setCountry] = useState('Nigeria');
    const [status, setStatus] = useState('public');
    const [date, setDate] = useState('');

    const handleImage = (e) => {
        const blobURL = URL.createObjectURL(e.target.files[0]);
        setEventAvatar(blobURL);
    };

    return (
        <div>
            <div className="relative mb-4 border-1 rounded-md overflow-hidden">
                <label
                    className="font-bold cursor-pointer text-xl text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 text-white bg-btn-color p-4 shadow-default rounded-full"
                    htmlFor="file"
                >
                    <FaPencilAlt />
                </label>
                <Image
                    src={eventAvatar || '/images/universal_DP.jpeg'}
                    width={80}
                    height={80}
                    alt="event image"
                    loading="lazy"
                    blurDataURL="loading"
                    placeholder="blur"
                    className="w-full max-w-full h-auto max-h-56"
                />
                <input
                    type="file"
                    id="file"
                    className="hidden"
                    onChange={(e) => handleImage(e)}
                />
            </div>
            <div className="relative">
                <InputField
                    type="text"
                    value={eventName}
                    placeholder="event name"
                    required
                    onChange={(e) => setEventName(e.target.value)}
                />
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                    <FaIdBadge />
                </span>
            </div>
            <div className="lg:flex gap-4">
                <DateField
                    placeholder={'Date'}
                    selected={date}
                    setSelected={setDate}
                />
                <InputDateTimeField
                    type="time"
                    placeholder="time"
                    required={true}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>
            <SelectField header={'event category'} setOption={setCat}>
                {category.map((cat, index) => (
                    <div key={index}>{cat}</div>
                ))}
            </SelectField>
            <SelectField header={'event location'} setOption={setCountry}>
                {countries.map((country, index) => (
                    <div key={index}>{country}</div>
                ))}
            </SelectField>
            <SelectField header={'privacy status'} setOption={setStatus}>
                {privacyStatus.map((country, index) => (
                    <div key={index}>{country}</div>
                ))}
            </SelectField>
        </div>
    );
};
export const EventDescription = () => {
    return (
        <div>
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="enter event description"
                className="border-1 w-full p-4"
            ></textarea>
        </div>
    );
};
export const EventTicket = () => {
    const [ticketName, setTicketName] = useState('');
    const [desc, setDesc] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [ticketType, setTicketType] = useState('PAID');
    const [date, setDate] = useState('');

    return (
        <div>
            <div className="relative">
                <InputField
                    type="text"
                    value={ticketName}
                    placeholder="ticket name"
                    required
                    onChange={(e) => setTicketName(e.target.value)}
                />
                <span className="absolute left-0 top-[16px] pl-6 pr-2 border-r-1 border-solid">
                    <FaIdBadge />
                </span>
            </div>
            <div className="relative">
                <InputField
                    type="text"
                    value={desc}
                    placeholder="description"
                    required
                    onChange={(e) => setDesc(e.target.value)}
                />
                <span className="absolute left-0 top-[16px] pl-6 pr-2 border-r-1 border-solid">
                    <FaComments />
                </span>
            </div>
            <div className="bg-white">
                <SelectField header={'TICKET TYPE'} setOption={setTicketType}>
                    <div>Free</div>
                    <div>Paid</div>
                </SelectField>
            </div>
            <div className="relative">
                <InputField
                    type="number"
                    value={quantity}
                    placeholder="available quantity"
                    required
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <span className="absolute left-0 top-[16px] pl-6 pr-2 border-r-1 border-solid">
                    <FaTicketAlt />
                </span>
            </div>
            <div className="relative">
                <InputField
                    type="number"
                    value="price"
                    placeholder="price"
                    required
                    onChange={(e) => setTicketName(e.target.value)}
                />
                <span className="absolute left-0 top-[16px] pl-6 pr-2 border-r-1 border-solid">
                    <FaMoneyBill />
                </span>
            </div>
            <div className="lg:flex gap-4 justify-between">
                <DateField
                    placeholder={'Start Date'}
                    selected={date}
                    setSelected={setDate}
                />
                <InputDateTimeField
                    type="time"
                    placeholder="time"
                    required={true}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>
            <div className="lg:flex gap-4 justify-between">
                <DateField
                    placeholder={'sales end'}
                    selected={date}
                    setSelected={setDate}
                />
                <InputDateTimeField
                    type="time"
                    placeholder="time"
                    required={true}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>
        </div>
    );
};

export const CreateEvent = () => {
    const [carouselCount, setCarouselCount] = useState(0);

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
                <form className="text-pry-text-color-1 w-full pb-12">
                    <CreateEventCarousel count={carouselCount}>
                        <EventInformation />
                        <EventDescription />
                        <EventTicket />
                    </CreateEventCarousel>
                </form>
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
            </section>
        </div>
    );
};
