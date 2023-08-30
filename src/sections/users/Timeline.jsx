'use client';
import { useState } from 'react';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { Button } from '@components/Button';
import { Modal } from '@components/Modals/Modal';
import { CreateEvent } from '@sections/events/CreateEvent';
import { MdCreate } from 'react-icons/md';
import { AnimateContent } from '@utils/framer-motion/AnimateContent';
import { EventList } from '@sections/events/EventList';
import { useEventFetching } from '@helper/useEventFetching';

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

    const API_URL = process.env.API_URL;
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const { data, isLoading, isError, isPreviousData } = useEventFetching(
        page,
        pageSize,
        API_URL
    );

    return (
        <main className="p-6 lg:pl-0 lg:pr-6">
            <section className="py-0">
                <div className="sticky top-[75px] left-0 z-20 bg-pry-purple">
                    <WebAppSubnav tabs={tabs} setTab={setTab} tab={tab} />
                </div>
                <div className="mt-6">
                    {tab === 'All' && (
                        <AnimateContent>
                            <EventList
                                events={data?.events}
                                isLoading={isLoading}
                                isError={isError}
                                isPreviousData={isPreviousData}
                                page={page}
                                setPage={setPage}
                            />
                        </AnimateContent>
                    )}
                    {tab === 'Wedding' && (
                        <AnimateContent>Public Weddings</AnimateContent>
                    )}
                    {tab === 'Birthday' && (
                        <AnimateContent>All Public Birthdays</AnimateContent>
                    )}
                    {tab === 'Anniversary' && (
                        <AnimateContent>Public Anniversaries</AnimateContent>
                    )}
                    {tab === 'Convocation' && (
                        <AnimateContent>Public Convocations</AnimateContent>
                    )}
                    {tab === 'Other' && (
                        <AnimateContent>All Other Events</AnimateContent>
                    )}
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
