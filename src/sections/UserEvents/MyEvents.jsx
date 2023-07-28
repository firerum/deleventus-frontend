'use client';
import { useState } from 'react';
import { MdUpload, MdCreate } from 'react-icons/md';
import { EventSummaryCard } from './EventSummaryCard';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { EventCardMini, eventData2 } from './EventCardMini';
import { Button } from '@components/Button';
import { ViewFormatter } from '@components/ViewFormatter';

export default function MyEvents() {
    const [tab, setTab] = useState('All');

    return (
        <main className="p-6 lg:p-0 lg:pr-6">
            <section className="hidden lg:block">
                <h2 className="text-xl pb-2">Events Summary</h2>
                <div className="flex flex-wrap gap-6">
                    <EventSummaryCard />
                    <EventSummaryCard />
                    <EventSummaryCard />
                    <EventSummaryCard />
                </div>
            </section>
            <section className="py-0">
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
                    tab={tab}
                />
                <div>
                    <ViewFormatter />
                    {tab === 'All' && (
                        <div className="flex flex-wrap gap-4">
                            {eventData2.map((ev, index) => (
                                <div className="w-40" key={index}>
                                    <EventCardMini
                                        name={ev.name}
                                        date={ev.date_of_event}
                                        avatar={ev.avatar}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    {tab === 'Upcoming' && <div>Upcoming Events</div>}
                    {tab === 'Happening' && <div>In Progress Events</div>}
                    {tab === 'Completed' && <div>Completed Events</div>}
                    {tab === 'Cancelled' && <div>Cancelled Events</div>}
                </div>
            </section>
            <div className="fixed right-4 bottom-6">
                <Button className="bg-white flex items-center border-1 px-4 py-4 mb-4 rounded-full shadow-sm">
                    {/* <span className="order-2">Create Event</span> */}
                    <MdCreate />
                </Button>
                <Button className="bg-btn-color text-white flex items-center gap-2 border-1 px-4 py-4 rounded-full shadow-premium">
                    {/* <span className="order-2">Upload Memories</span> */}
                    <MdUpload />
                </Button>
            </div>
        </main>
    );
}
