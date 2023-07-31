'use client';
import { useState } from 'react';
import { MdCreate } from 'react-icons/md';
import { EventSummaryCard } from './EventSummaryCard';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { EventCardMini, eventData2 } from './EventCardMini';
import { Button } from '@components/Button';
import { ViewFormatter } from '@components/ViewFormatter';
import { CreateEvent } from './CreateEvent';
import { Modal } from '@components/Modals/Modal';

export default function MyEvents() {
    const [tab, setTab] = useState('All');
    // modal state
    const [isOpen, setIsOpen] = useState(false);

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
                        'In-Progress',
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
                    {tab === 'In-Progress' && <div>In Progress Events</div>}
                    {tab === 'Completed' && <div>Completed Events</div>}
                    {tab === 'Cancelled' && <div>Cancelled Events</div>}
                </div>
            </section>
            <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
                <CreateEvent />
            </Modal>

            <Button
                className="bg-white fixed right-4 bottom-6 flex items-center border-1 px-4 py-4 mb-4 rounded-full shadow-sm"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {/* <span className="order-2">Create Event</span> */}
                <MdCreate />
            </Button>
        </main>
    );
}
