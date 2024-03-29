'use client';
import Image from 'next/image';
import { FaRegBell } from 'react-icons/fa';
import { SearchBox } from '@sections/events/SearchBox';
import { useAuth } from '@sections/authentication/AuthProtect';

const WebAppHeader = () => {
    const { user } = useAuth();

    return (
        <header className="fixed right-0 left-0 z-40 lg:left-56 flex gap-4 justify-between items-center p-4 bg-white shadow-sm">
            <div className="hidden md:block">
                {/* <span>{new Date().toLocaleDateString()}</span> */}
                <span className="text-pry-header-title text-sm font-medium">
                    Welcome, {user?.first_name || 'John Doe'}
                </span>
            </div>
            <div className="w-full md:w-2/3 flex gap-4 justify-end items-center">
                <div className="hidden md:block md:w-2/3">
                    <SearchBox
                        className="bg-pry-purple w-full px-14 py-2 rounded-md shadow-default"
                        placeholder="search by keyword e.g events"
                    />
                </div>
                <span className="h-11 w-11 ml-auto md:ml-0 bg-pry-purple rounded-full flex justify-center items-center">
                    <FaRegBell className="lg:text-2xl" />
                </span>
                <figure className="flex gap-4">
                    <Image
                        src="/images/universal_DP.jpeg"
                        width={30}
                        height={30}
                        alt="user image"
                        priority={true}
                        className="rounded-full h-8 w-8 lg:h-10 lg:w-10"
                    />
                    <figcaption className="text-sm flex items-center">
                        <span className="font-medium">
                            {user?.email || user?.username}
                        </span>
                    </figcaption>
                </figure>
            </div>
        </header>
    );
};

export default WebAppHeader;
