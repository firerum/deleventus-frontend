'use client';
import { useState } from 'react';
import { MdCreate } from 'react-icons/md';
import { EventSummaryCard } from './EventSummaryCard';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { EventCard } from './EventCard';
import { Button } from '@components/Button';
import { ViewFormatter } from '@components/ViewFormatter';
import { CreateEvent } from './CreateEvent';
import { Modal } from '@components/Modals/Modal';
import { useAuth } from '@sections/authentication/AuthProtect';
import Link from 'next/link';
import { AnimateContent } from '@utils/framer-motion/AnimateContent';
import { EventList } from './EventList';

export default function MyEvents() {
    const [tab, setTab] = useState('All');
    // modal state
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();

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
                        <AnimateContent>
                            <div className="flex flex-wrap justify-center gap-4 lg:grid grid-cols-2 xl:grid-cols-4">
                                {user &&
                                    user?.events?.map((ev, index) => (
                                        <Link
                                            href={`events/${ev.id}`}
                                            className="w-full"
                                            key={index}
                                        >
                                            <EventCard
                                                name={ev?.name}
                                                desc={ev?.description}
                                                date={ev?.date_of_event}
                                                avatar={ev?.avatar}
                                            />
                                        </Link>
                                    ))}
                            </div>
                        </AnimateContent>
                    )}
                    {tab === 'Upcoming' && (
                        <AnimateContent>Upcoming Events</AnimateContent>
                    )}
                    {tab === 'In-Progress' && (
                        <AnimateContent>In Progress Events</AnimateContent>
                    )}
                    {tab === 'Completed' && (
                        <AnimateContent>Completed Events</AnimateContent>
                    )}
                    {tab === 'Cancelled' && (
                        <AnimateContent>Cancelled Events</AnimateContent>
                    )}
                </div>
            </section>
            <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
                <CreateEvent />
            </Modal>

            <Button
                className="bg-white fixed right-4 bottom-4 flex items-center border-1 px-4 py-4 mb-4 rounded-full shadow-sm"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {/* <span className="order-2">Create Event</span> */}
                <MdCreate />
            </Button>
        </main>
    );
}
