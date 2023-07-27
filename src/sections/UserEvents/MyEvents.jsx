'use client';
import { useState } from 'react';
import { MdUpload, MdCreate } from 'react-icons/md';
import { EventSummaryCard } from './EventSummaryCard';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { EventCard, eventData } from './EventCard';
import { Button } from '@components/Button';
import { ViewFormatter } from '@components/ViewFormatter';

export default function MyEvents() {
    const [tab, setTab] = useState('All');

    return (
        <main className="p-6 lg:p-0 lg:pr-6">
            <div className="flex md:justify-end gap-4 py-4 text-xs md:text-sm">
                <Button className="flex items-center gap-2 border-1 px-4 py-3 rounded-md shadow-sm">
                    <span className="order-2">Create Event</span>
                    <MdCreate />
                </Button>
                <Button className="bg-btn-color text-white flex items-center gap-2 border-1 px-4 py-3 rounded-md shadow-premium">
                    <span className="order-2">Upload Memories</span>
                    <MdUpload />
                </Button>
            </div>
            <section className="hidden lg:block">
                <h2 className="text-xl pb-2">Events Summary</h2>
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
                        'Happening',
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
                    {tab === 'Happening' && <div>In Progress Events</div>}
                    {tab === 'Completed' && <div>Completed Events</div>}
                    {tab === 'Cancelled' && <div>Cancelled Events</div>}
                </div>
            </section>
        </main>
    );
}
