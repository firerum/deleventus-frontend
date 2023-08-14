'use client';
import { useState } from 'react';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { EventCard, eventData } from '@sections/events/EventCard';
import { Button } from '@components/Button';
import { Modal } from '@components/Modals/Modal';
import { CreateEvent } from '@sections/events/CreateEvent';
import { MdCreate } from 'react-icons/md';
import Link from 'next/link';
import { AnimateContent } from '@utils/framer-motion/AnimateContent';
import { TabSwipe } from '@utils/tab-swipe';

export default function Timeline() {
    const [isOpen, setIsOpen] = useState(false);
    const tabs = [
        'All',
        'Wedding',
        'Birthday',
        'Anniversary',
        'Convocation',
        'Other',
    ];
    const [tab, setTab] = useState(tabs[0]);
    const [swipedTabIndex, setSwipedTabIndex] = useState(0);

    return (
        <main className="p-6 lg:pl-0 lg:pr-6">
            <section className="py-0">
                <div className="sticky top-[75px] z-20 bg-pry-purple">
                    <WebAppSubnav tabs={tabs} setTab={setTab} tab={tab} />
                </div>
                <div className="mt-6">
                    <TabSwipe
                        tabs={tabs}
                        setTab={setTab}
                        swipedTabIndex={swipedTabIndex}
                        setSwipedTabIndex={setSwipedTabIndex}
                    >
                        {tab === 'All' && (
                            <AnimateContent>
                                <div className="flex flex-wrap justify-center gap-4 lg:grid grid-cols-2 xl:grid-cols-4">
                                    {eventData.map((eve, index) => (
                                        <Link
                                            href={`events/${eve.name}`}
                                            key={index}
                                        >
                                            <EventCard
                                                name={eve.name}
                                                desc={eve.desc}
                                                date={eve.date_of_event}
                                                avatar={eve.avatar}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </AnimateContent>
                        )}
                        {tab === 'Wedding' && (
                            <AnimateContent>Public Weddings</AnimateContent>
                        )}
                        {tab === 'Birthday' && (
                            <AnimateContent>
                                All Public Birthdays
                            </AnimateContent>
                        )}
                        {tab === 'Anniversary' && (
                            <AnimateContent>
                                Public Anniversaries
                            </AnimateContent>
                        )}
                        {tab === 'Convocation' && (
                            <AnimateContent>Public Convocations</AnimateContent>
                        )}
                        {tab === 'Other' && (
                            <AnimateContent>All Other Events</AnimateContent>
                        )}
                    </TabSwipe>
                </div>
                <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
                    <CreateEvent />
                </Modal>
                <Button
                    className="bg-white fixed right-4 bottom-4 flex items-center border-1 px-4 py-4 mb-4 rounded-full shadow-sm"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <MdCreate />
                </Button>
            </section>
        </main>
    );
}
