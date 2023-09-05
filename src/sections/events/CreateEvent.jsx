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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createEventSchema } from '@utils/validation/validateEvent';
import { useMutation } from '@tanstack/react-query';

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

export const EventInformation = ({ register, errors }) => {
    const [eventAvatar, setEventAvatar] = useState('');
    const [cat, setCat] = useState('wedding');
    const [country, setCountry] = useState('Nigeria');
    const [status, setStatus] = useState('public');

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
            <InputField
                type="text"
                placeholder="event name"
                {...register('name')}
                errors={errors}
            >
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                    <FaIdBadge />
                </span>
            </InputField>
            {/* <div className="lg:flex gap-4">
                <InputDateTimeField
                    type={'date'}
                    placeholder={'date'}
                    onChange={(e) => console.log(e)}
                    required={true}
                    label={'date'}
                />
                <InputDateTimeField
                    type={'time'}
                    placeholder={'Time'}
                    onChange={(e) => console.log(e)}
                    required={true}
                    label={'time'}
                />
            </div> */}
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
export const EventDescription = ({ register, errors }) => {
    return (
        <div>
            {errors && (
                <p className="text-xs text-left text-red-500 mb-1 mt-0">
                    {errors[name]?.message}
                </p>
            )}
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="enter event description"
                className="border-1 w-full p-4"
                {...register('description')}
            ></textarea>
        </div>
    );
};
export const EventTicket = ({ register, errors, setTicketType }) => {
    return (
        <div>
            <div className="bg-white">
                <SelectField header={'TICKET TYPE'} setOption={setTicketType}>
                    <div>Free</div>
                    <div>Paid</div>
                </SelectField>
            </div>
            <InputField
                type="number"
                placeholder="available quantity"
                required
                {...register('ticket_quantity')}
                errors={errors}
            >
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                    <FaTicketAlt />
                </span>
            </InputField>
            <InputField
                type="number"
                placeholder="price"
                required
                {...register('ticket_price')}
                errors={errors}
            >
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                    <FaMoneyBill />
                </span>
            </InputField>

            {/* <div className="lg:flex gap-4 justify-between">
                <InputDateTimeField
                    type="date"
                    placeholder="sales start"
                    required={true}
                    onChange={(e) => console.log(e.target.value)}
                />
                <InputDateTimeField
                    type="time"
                    placeholder="time"
                    required={true}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div> */}
            {/* <div className="lg:flex gap-4 justify-between">
                <InputDateTimeField
                    type="date"
                    placeholder="sales end"
                    required={true}
                    onChange={(e) => console.log(e.target.value)}
                />
                <InputDateTimeField
                    type="time"
                    placeholder="time"
                    required={true}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div> */}
        </div>
    );
};

export const CreateEvent = () => {
    const [carouselCount, setCarouselCount] = useState(0);
    const [ticketType, setTicketType] = useState('PAID');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(createEventSchema),
    });
    console.log(errors);

    const onSubmitData = (data) => {
        console.log({ ...data, ticketType: ticketType?.props?.children });
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
                    {/* <CreateEventCarousel count={carouselCount}> */}
                    <EventInformation register={register} errors={errors} />
                    <EventDescription register={register} errors={errors} />
                    <EventTicket
                        register={register}
                        errors={errors}
                        setTicketType={setTicketType}
                    />
                    {/* </CreateEventCarousel> */}
                    <Button
                        className={'bg-btn-color text-white py-default px-4 '}
                    >
                        Finish
                    </Button>
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
