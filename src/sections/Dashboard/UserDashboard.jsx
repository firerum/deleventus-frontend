'use client';
import WebAppNav from '@layouts/WebAppNav';
import Image from 'next/image';
import { FaRegBell } from 'react-icons/fa';
import { SearchBox } from './SearchBox';
import { EventSummaryCard } from '@sections/UserEvents/EventSummaryCard';

export default function UserDashboard() {
    return (
        <div className="bg-pry-purple h-screen overflow-hidden relative">
            <div className="lg:absolute top-0 bottom-0 left-56 right-0">
                <header className="flex gap-4 justify-between items-center p-4 bg-white shadow-sm">
                    <div className="hidden md:block">
                        {/* <span>{new Date().toLocaleDateString()}</span> */}
                        <span className="text-pry-header-title text-sm font-medium">
                            Good Morning, John Doe
                        </span>
                    </div>
                    <div className="w-2/3 flex gap-4 justify-center items-center">
                        <div className="w-2/3">
                            <SearchBox />
                        </div>
                        <span className="h-12 w-12 bg-pry-purple rounded-full flex justify-center items-center">
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
                                <span className="font-medium">John Doe</span>
                            </figcaption>
                        </figure>
                    </div>
                </header>
                <main>
                    <section>
                        <h2 className='text-xl'>Events Summary</h2>
                        <div className='grid grid-cols-2 lg:flex flex-wrap gap-6'>
                            <EventSummaryCard />
                            <EventSummaryCard />
                            <EventSummaryCard />
                            <EventSummaryCard />
                        </div>
                    </section>
                    <section>
                        <h2 className='text-xl'>Events</h2>
                        <div>sub navs</div>
                    </section>
                </main>
            </div>
            <aside className="fixed left-0 bottom-0 bg-white top-0 z-50 ">
                <WebAppNav />
            </aside>
        </div>
    );
}
