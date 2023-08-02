'use client';
import { useState } from 'react';
import { EventSummaryCard } from './EventSummaryCard';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { useParams } from 'next/navigation';
import { EventGuests } from './EventGuests';
import { EventMedia } from './EventMedia';
import { EventOverview } from './EventOverview';
import { Button } from '@components/Button';
import { FaPencilAlt, FaShareAlt } from 'react-icons/fa';

export default function EventDetails() {
    const [tab, setTab] = useState('Overview');
    const param = useParams();

    return (
        <div className="p-6 lg:p-0 lg:pr-6">
            <div className="flex justify-between items-center py-4">
                <div>
                    <span className="text-[#726D7C]">My Events </span>&gt;{' '}
                    <span className="font-bold">Event Name</span>
                </div>
                <div className="flex flex-col md:flex-row gap-2 text-xs md:text-sm">
                    <Button className="border-1 px-4 py-2 flex items-center gap-2 rounded-default">
                        <span className="order-2">Share Event</span>
                        <FaShareAlt />
                    </Button>
                    <Button className="bg-btn-color text-white px-4 py-2 flex items-center gap-2 rounded-default">
                        <span className="order-2"> Edit Event</span>
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
                <WebAppSubnav
                    tabs={['Overview', 'Guest List', 'Media', 'Payment']}
                    setTab={setTab}
                    tab={tab}
                />
                <div>
                    {tab === 'Overview' && <EventOverview />}
                    {tab === 'Guest List' && <EventGuests />}
                    {tab === 'Media' && <EventMedia />}
                    {tab === 'Payment' && <div>Payment Section</div>}
                </div>
            </section>
        </div>
    );
}
