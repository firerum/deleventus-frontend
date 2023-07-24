'use client';
import WebAppNav from '@layouts/WebAppNav';
import Image from 'next/image';
import { FaRegBell } from 'react-icons/fa';
import { SearchBox } from './SearchBox';

export default function UserDashboard() {
    return (
        <div className="bg-pry-purple overflow-hidden relative">
            <div className="ml-40 bg-pry-purple ">
                <header className="flex gap-4">
                    <div>
                        <span>{new Date().now}</span>
                    </div>
                    <SearchBox />
                    <span>
                        <FaRegBell />
                    </span>
                    <figure className="flex gap-4">
                        <Image
                            src="/images/universal_DP.jpeg"
                            width={30}
                            height={30}
                            alt="user image"
                            priority={true}
                            className="rounded-full h-8 w-8"
                        />
                        <figcaption>
                            <span>name</span>
                            <span>profession</span>
                        </figcaption>
                    </figure>
                </header>
                <main></main>
            </div>
            <aside className="fixed left-0 bottom-0 top-0 z-50 w-1/3 p-6 ">
                <WebAppNav />
            </aside>
        </div>
    );
}
