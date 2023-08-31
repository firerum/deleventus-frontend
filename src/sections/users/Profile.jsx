'use client';
import { useState } from 'react';
import { Button } from '@components/Button';
import { InputField } from '@components/InputField';
import { FaLock, FaPhoneAlt, FaUser } from 'react-icons/fa';
import Image from 'next/image';
import { useAuth } from '@sections/authentication/AuthProtect';
import { DeactivateAccount } from './DeactivateAccount';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { updateUserSchema } from '@utils/validation/validateUser';

export const Profile = () => {
    const [avatar, setAvatar] = useState('');
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            first_name: user?.first_name,
            last_name: user?.last_name,
            password: user?.password,
            city: user?.city,
            country: user?.country,
            phone_no: user?.phone_no,
            avatar: user?.avatar,
            username: user?.username,
        },
        resolver: yupResolver(updateUserSchema),
    });

    const handleImage = (e) => {
        const blobURL = URL.createObjectURL(e.target.files[0]);
        setAvatar(blobURL);
    };

    const mutation = useMutation({
        mutationFn: (data) => {
            return axios.post(`${process.env.url}/users/${user?.id}`, data);
        },
    });

    const onSubmitData = (data) => {
        console.log(data);
        axios.post(`${process.env.API_URL}/users/${user?.id}`, data);
    };

    return (
        <section className="mt-4">
            <h2 className="text-base">Profile Settings</h2>
            <form
                onSubmit={handleSubmit(onSubmitData)}
                className="bg-white px-4 py-8 shadow-sm rounded-lg"
            >
                <div className="border-b-1">
                    <h3>Personal Details</h3>
                    <div className="flex flex-col border-b-1 mb-8">
                        <label
                            htmlFor="avatar"
                            className="order-3 text-center w-max my-4 cursor-pointer rounded-default bg-btn-color text-white text-sm py-2 px-4 lg:px-8"
                        >
                            Upload
                        </label>
                        <Image
                            src={avatar || '/images/universal_DP.jpeg'}
                            width={80}
                            height={80}
                            alt="user image"
                            className="h-20 w-20 lg:h-32 lg:w-32 rounded-full"
                        />
                        <input
                            type="file"
                            name=""
                            id="avatar"
                            {...register('avatar')}
                            className="hidden"
                        />
                    </div>
                    <div className="md:flex justify-between gap-8">
                        <div className="relative md:w-1/2">
                            <InputField
                                type="text"
                                placeholder="first name"
                                {...register('first_name')}
                                errors={errors}
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaUser />
                            </span>
                        </div>
                        <div className="relative md:w-1/2">
                            <InputField
                                type="text"
                                placeholder="last name"
                                {...register('last_name')}
                                errors={errors}
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaUser />
                            </span>
                        </div>
                    </div>
                    <div className="md:flex justify-between gap-8">
                        <div className="relative md:w-1/2">
                            <InputField
                                type="text"
                                placeholder="city"
                                {...register('city')}
                                errors={errors}
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaUser />
                            </span>
                        </div>
                        <div className="relative md:w-1/2">
                            <InputField
                                type="text"
                                placeholder="country"
                                {...register('country')}
                                errors={errors}
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaUser />
                            </span>
                        </div>
                    </div>
                    <div className="md:flex justify-between gap-8">
                        <div className="relative md:w-1/2">
                            <InputField
                                type="telephone"
                                placeholder="(+237) 696 88 77 55"
                                {...register('phone_no')}
                                errors={errors}
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaPhoneAlt />
                            </span>
                        </div>
                        <div className="relative md:w-1/2">
                            <InputField
                                type="text"
                                placeholder="username"
                                {...register('username')}
                                errors={errors}
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaUser />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="my-8 border-b-1">
                    <header className="mb-4 font-medium">Password</header>
                    <div className="relative md:w-1/2">
                        <InputField
                            type="password"
                            placeholder="password"
                            {...register('password')}
                            errors={errors}
                        />
                        <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                            <FaLock />
                        </span>
                    </div>
                </div>
                <Button
                    className={`w-full max-w-[200px] bg-btn-color text-white py-default px-4 rounded-default`}
                >
                    Save
                </Button>
            </form>
            <DeactivateAccount />
        </section>
    );
};
