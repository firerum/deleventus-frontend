'use client';
import { useState } from 'react';
import { Button } from '@components/Button';
import { SelectField } from '@components/SelectField';
import { InputField } from '@components/InputField';
import { FaLock, FaPhoneAlt, FaUser } from 'react-icons/fa';
import Image from 'next/image';
import { useAuth } from '@sections/authentication/AuthProtect';
import { DeactivateAccount } from './DeactivateAccount';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { updateUser } from '@helper/auth';
import { updateUserSchema } from '@utils/validation/validateUser';
import { ButtonLoader } from '@components/Spinner';

const gender = ['male', 'female', 'non-binary', 'transgender', 'other'];

export const Profile = () => {
    const [option, setOption] = useState('male');
    const { user, accessToken } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            first_name: user?.first_name,
            last_name: user?.last_name,
            password: user?.password,
            city: user?.city,
            country: user?.country,
            phone_no: user?.phone_no || '990645095',
            avatar: user?.avatar,
            username: user?.username,
        },
        resolver: yupResolver(updateUserSchema),
    });

    const imagery = watch('avatar')?.[0];
    const blobURL = imagery && URL.createObjectURL(imagery);

    const { isError, isLoading, mutate } = useMutation({
        mutationFn: (data) => {
            return updateUser(
                user?.id,
                { ...data, avatar: data?.avatar?.[0]?.name },
                accessToken
            );
        },
        onSuccess: async () => {
            alert('Update Successful');
        },
    });

    const onSubmitData = (data) => {
        const user = { ...data, gender: option?.props?.children };
        mutate(user);
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
                            src={blobURL || '/images/universal_DP.jpeg'}
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
                            <span className="absolute top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
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
                            <span className="absolute top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
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
                            <span className="absolute top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
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
                            <span className="absolute top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
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
                            <span className="absolute top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
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
                            <span className="absolute top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                                <FaUser />
                            </span>
                        </div>
                    </div>
                    <div>
                        <SelectField
                            header={user?.gender || 'gender'}
                            setOption={setOption}
                        >
                            {gender.map((g, index) => (
                                <div key={index}>{g}</div>
                            ))}
                        </SelectField>
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
                        <span className="absolute top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                            <FaLock />
                        </span>
                    </div>
                </div>
                <Button
                    className={`w-full max-w-[200px] bg-btn-color text-white py-default px-4 rounded-default`}
                >
                    {isLoading ? <ButtonLoader></ButtonLoader> : 'Save'}
                </Button>
            </form>
            <DeactivateAccount />
        </section>
    );
};
