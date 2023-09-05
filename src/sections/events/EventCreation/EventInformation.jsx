import { Button } from '@components/Button';
import { InputField, InputDateTimeField } from '@components/InputField';
import { SelectField } from '@components/SelectField';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    FaPencilAlt,
    FaMoneyBill,
    FaTicketAlt,
    FaIdBadge,
    FaComments,
} from 'react-icons/fa';

export const EventInformation = () => {
    const [eventName, setEventName] = useState('');
    const [eventAvatar, setEventAvatar] = useState('');
    const [cat, setCat] = useState('wedding');
    const [country, setCountry] = useState('Nigeria');
    const [status, setStatus] = useState('public');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

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
                value={eventName}
                placeholder="event name"
                required
                onChange={(e) => setEventName(e.target.value)}
            >
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                    <FaIdBadge />
                </span>
            </InputField>
            <div className="lg:flex gap-4">
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
