import { useState } from 'react';
import { InputField } from '@components/InputField';
import { SelectField } from '@components/SelectField';
import Image from 'next/image';
import { FaPencilAlt, FaIdBadge } from 'react-icons/fa';

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

export const EventInformation = ({
    register,
    errors,
    setEventCategory,
    setVisibility,
    setEventLocation,
}) => {
    const [eventAvatar, setEventAvatar] = useState('');

    const handleImage = (e) => {
        const blobURL = URL.createObjectURL(e.target.files[0]);
        setEventAvatar(blobURL);
    };

    return (
        <div>
            <h2 className="mt-12 text-base">Event Information</h2>
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
            <div className="lg:flex">
                <InputField
                    type="date"
                    placeholder={'date'}
                    {...register('date_of_event')}
                    errors={errors}
                />
                <InputField
                    type={'time'}
                    placeholder={'Time'}
                    onChange={(e) => console.log(e)}
                />
            </div>
            <SelectField
                header={'event category'}
                setOption={setEventCategory}
                required
            >
                {category.map((cat, index) => (
                    <option key={index} value={cat}>
                        {cat}
                    </option>
                ))}
            </SelectField>
            <SelectField
                header={'event location'}
                setOption={setEventLocation}
                required
            >
                {countries.map((country, index) => (
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))}
            </SelectField>
            <SelectField
                header={'privacy status'}
                setOption={setVisibility}
                required
            >
                {privacyStatus.map((status, index) => (
                    <option key={index} value={status}>
                        {status}
                    </option>
                ))}
            </SelectField>
        </div>
    );
};
