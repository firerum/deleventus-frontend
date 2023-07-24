'use client';
import WebAppNav from '@layouts/WebAppNav';
import Image from 'next/image';
import { FaRegBell } from 'react-icons/fa';
import { SearchBox } from './SearchBox';

export default function UserDashboard() {
    return (
        <div className="bg-pry-purple h-screen overflow-hidden relative">
            <div className="lg:absolute top-0 bottom-0 left-56 right-0">
                <header className="flex gap-4 justify-between items-center p-4 bg-white">
                    <div className="flex flex-col">
                        <span>{new Date().toLocaleDateString()}</span>
                        <span className="text-pry-header-title text-sm font-medium">
                            Good Morning, John Doe
                        </span>
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
                        <figcaption className="text-sm">
                            <span className="font-medium">Joh Doe</span>
                            {/* <span>profession</span> */}
                        </figcaption>
                    </figure>
                </header>
                <main className="clear-right">
                    Who is in the garden? A little fine girl. Can I come and see
                    her? No no no no.
                </main>
            </div>
            <aside className="fixed left-0 bottom-0 bg-white top-0 z-50 ">
                <WebAppNav />
            </aside>
        </div>
    );
}
