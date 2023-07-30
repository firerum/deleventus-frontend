'use client';
import { useState } from 'react';
import { EventSummaryCard } from './EventSummaryCard';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { useParams } from 'next/navigation';
import { EventGuests } from './EventGuests';
import { EventMedia } from './EventMedia';
import { EventOverview } from './EventOverview';

export default function EventDetails() {
    const [tab, setTab] = useState('Overview');
    const param = useParams();

    return (
        <div className="p-6 lg:p-0 lg:pr-6">
            <div className="py-4">
                <span className="text-[#726D7C]">My Events </span>&gt;{' '}
                <span className="font-bold">Event Name</span>
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
