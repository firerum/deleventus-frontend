'use client';
import { useState } from 'react';
import WebAppNav from '@layouts/WebAppNav';
import Image from 'next/image';
import { FaRegBell } from 'react-icons/fa';
import { MdGridView, MdFilterAlt } from 'react-icons/md';
import { SearchBox } from './SearchBox';
import { EventSummaryCard } from '@sections/UserEvents/EventSummaryCard';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { EventCard, eventData } from '@sections/UserEvents/EventCard';

const ViewFormatter = () => {
    return (
        <div className="flex gap-8 py-6">
            <div className="w-1/2">
                <SearchBox
                    className="bg-white w-full px-14 py-2 rounded-md shadow-default"
                    placeholder="search event"
                />
            </div>
            <div className="flex gap-2 md:gap-8">
                <button className="flex gap-2 items-center px-4 border-1 rounded-md">
                    <MdGridView />
                    <span>Grid</span>
                </button>
                <button className="flex gap-2 items-center px-4 border-1 rounded-md">
                    <MdFilterAlt />
                    <span>Filter</span>
                </button>
            </div>
        </div>
    );
};

export default function UserDashboard() {
    const [tab, setTab] = useState('All');

    return (
        <div className="bg-pry-purple min-h-screen overflow-hidden">
            <div className="lg:pl-56">
                <header className="flex gap-4 justify-between items-center p-4 bg-white shadow-sm">
                    <div className="hidden md:block">
                        {/* <span>{new Date().toLocaleDateString()}</span> */}
                        <span className="text-pry-header-title text-sm font-medium">
                            Good Morning, John Doe
                        </span>
                    </div>
                    <div className="md:w-2/3 flex gap-4 justify-center items-center">
                        <div className="w-2/3">
                            <SearchBox
                                className="bg-pry-purple w-full px-14 py-2 rounded-md shadow-default"
                                placeholder="search by keyword e.g events"
                            />
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
                <main className="p-6 lg:p-0">
                    <section className="hidden lg:block">
                        <h2 className="text-xl">Events Summary</h2>
                        <div className="flex flex-wrap gap-6">
                            <EventSummaryCard />
                            <EventSummaryCard />
                            <EventSummaryCard />
                            <EventSummaryCard />
                        </div>
                    </section>
                    <section>
                        <h2 className="text-xl">Events</h2>
                        <WebAppSubnav
                            tabs={[
                                'All',
                                'Upcoming',
                                'In-Progress',
                                'Completed',
                                'Cancelled',
                            ]}
                            setTab={setTab}
                        />
                        <div>
                            <ViewFormatter />
                            {tab === 'All' && (
                                <div className="flex flex-wrap gap-6">
                                    {eventData.map((ev, index) => (
                                        <EventCard
                                            key={index}
                                            name={ev.name}
                                            desc={ev.desc}
                                            date={ev.date_of_event}
                                            avatar={ev.avatar}
                                        />
                                    ))}
                                </div>
                            )}
                            {tab === 'Upcoming' && <div>Upcoming Events</div>}
                            {tab === 'In-Progress' && (
                                <div>In Progress Events</div>
                            )}
                            {tab === 'Completed' && <div>Completed Events</div>}
                            {tab === 'Cancelled' && <div>Cancelled Events</div>}
                        </div>
                    </section>
                </main>
            </div>
            <aside className="fixed left-0 bottom-0 bg-white top-0 z-50 shadow-sm">
                <WebAppNav />
            </aside>
        </div>
    );
}
