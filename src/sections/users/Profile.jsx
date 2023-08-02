'use client';
import { useState } from 'react';
import { Button } from '@components/Button';
import { InputField } from '@components/InputField';
import { FaEnvelope, FaLock, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { Modal } from '@components/Modals/Modal';

export const Profile = () => {
    const [firstName, setFirstName] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const DeactivateAccount = () => {
        return (
            <div className="bg-btn-color p-8 flex flex-col justify-center items-center text-white text-center">
                Are you sure you want to Deactivate your Account ?
                <div className="flex gap-4 mt-4">
                    <Button className="py-2 px-4 bg-purple-base text-white rounded-default">
                        Yes
                    </Button>
                    <Button className="py-2 px-4 bg-red-700 text-white">
                        No
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <section className="mt-4">
            <h2 className="text-base">Profile Settings</h2>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="bg-white px-4 py-8 shadow-sm rounded-lg"
            >
                <div className="border-b-1">
                    <h3>Personal Details</h3>
                    <div>
                        <label htmlFor="avatar"></label>
                        <input type="file" name="" id="avatar" />
                    </div>
                    <div className="md:flex justify-between gap-8">
                        <div className="relative md:w-1/2">
                            <InputField
                                type="text"
                                value=""
                                placeholder="first name"
                                required
                                onChange={(e) => console.log(e.target.value)}
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaUser />
                            </span>
                        </div>
                        <div className="relative md:w-1/2">
                            <InputField
                                type="text"
                                value=""
                                placeholder="last name"
                                required
                                onChange={(e) => console.log(e.target.value)}
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaUser />
                            </span>
                        </div>
                    </div>
                    <div className="md:flex justify-between gap-8">
                        <div className="relative md:w-1/2">
                            <InputField
                                type="email"
                                value=""
                                placeholder="email"
                                required
                                onChange={(e) => console.log(e.target.value)}
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaEnvelope />
                            </span>
                        </div>
                        <div className="relative md:w-1/2">
                            <InputField
                                type="text"
                                value=""
                                placeholder="username"
                                required
                                onChange={(e) => console.log(e.target.value)}
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
                                value=""
                                placeholder="(+237) 696 88 77 55"
                                required
                                onChange={(e) => console.log(e.target.value)}
                            />
                            <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                                <FaPhoneAlt />
                            </span>
                        </div>
                        <div className="relative md:w-1/2">
                            <InputField
                                type="text"
                                value=""
                                placeholder="username"
                                required
                                onChange={(e) => console.log(e.target.value)}
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
                            value=""
                            placeholder="password"
                            required
                            onChange={(e) => console.log(e.target.value)}
                        />
                        <span className="absolute left-0 top-[19px] pl-6 pr-2 border-r-1 border-solid">
                            <FaLock />
                        </span>
                    </div>
                </div>
                <div>
                    <h3>Deactive Account</h3>
                    <p className="text-sm mb-4">
                        "We're sorry to see you go. If you wish to take a break
                        or leave Deleventus, you can deactivate your account
                        temporarily or permanently. By deactivating your
                        account, your event data and preferences will be
                        temporarily hidden from others. You can reactivate your
                        account at any time by simply logging back in. If you
                        still wish to proceed, click the 'Deactivate Account'
                        button below. Remember, you can always return to
                        Deleventus and resume your event planning journey
                        whenever you're ready. We hope to see you back soon!"
                    </p>
                    <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
                        <DeactivateAccount />
                    </Modal>
                    <Button
                        className={
                            'bg-red-700 text-white border-1 py-2 px-4 rounded-default'
                        }
                        onClick={(e) => {
                            e.preventDefault(), setIsOpen((prev) => !prev);
                        }}
                    >
                        Deactive Account
                    </Button>
                </div>
            </form>
        </section>
    );
};
