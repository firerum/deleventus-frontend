'use client';
import { useState } from 'react';
import { EventSummaryCard } from './EventSummaryCard';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { useParams } from 'next/navigation';
import { EventGuests } from './EventGuests';
import { EventMedia } from './EventMedia';
import { EventOverview } from './EventOverview';
import { EditEvent } from './EditEvent';
import { Button } from '@components/Button';
import { FaPencilAlt, FaShareAlt } from 'react-icons/fa';
import { Modal } from '@components/Modals/Modal';

export default function EventDetails() {
    const [tab, setTab] = useState('Overview');
    const [isOpen, setIsOpen] = useState(false);
    const param = useParams();

    return (
        <div className="p-6 lg:p-0 lg:pr-6">
            <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
                <EditEvent />
            </Modal>
            <div className="flex justify-between items-center py-4">
                <div>
                    <span className="text-[#726D7C] hidden md:inline">
                        My Events &gt;{' '}
                    </span>
                    <span className="font-bold">Event Name</span>
                </div>
                <div className="flex gap-2 text-xs md:text-sm">
                    <Button className="border-1 px-4 py-2 flex items-center gap-2 shadow-sm rounded-default">
                        <span className="hidden md:inline order-2">
                            Share Event
                        </span>
                        <FaShareAlt />
                    </Button>
                    <Button
                        className="bg-btn-color text-white px-4 py-2 flex items-center gap-2 shadow-sm rounded-default"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <span className="hidden md:inline order-2">
                            {' '}
                            Edit Event
                        </span>
                        <FaPencilAlt />
                    </Button>
                </div>
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
                <div className="bg-pry-purple sticky top-[75px] z-20">
                    <WebAppSubnav
                        tabs={['Overview', 'Guest List', 'Gallery', 'Payment']}
                        setTab={setTab}
                        tab={tab}
                    />
                </div>
                <div>
                    {tab === 'Overview' && <EventOverview />}
                    {tab === 'Guest List' && <EventGuests />}
                    {tab === 'Gallery' && <EventMedia />}
                    {tab === 'Payment' && <div>Payment Section</div>}
                </div>
            </section>
        </div>
    );
}
