'use client';
import { useState } from 'react';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { EventCard, eventData } from '@sections/events/EventCard';
import { EventCardMini } from '@sections/events/EventCardMini';

export default function Timeline() {
    const [tab, setTab] = useState('All');

    return (
        <div className="p-6 lg:pl-0 flex gap-8">
            <section className="py-0">
                <WebAppSubnav
                    tabs={[
                        'All',
                        'Wedding',
                        'Birthday',
                        'Anniversary',
                        'Convocation',
                        'Other',
                    ]}
                    setTab={setTab}
                    tab={tab}
                />
                <div className="mt-6">
                    {tab === 'All' && (
                        <div className="flex flex-wrap gap-4">
                            {eventData.map((eve, index) => (
                                <EventCardMini
                                    key={index}
                                    name={eve.name}
                                    date={eve.date_of_event}
                                    avatar={eve.avatar}
                                />
                            ))}
                        </div>
                    )}
                    {tab === 'Wedding' && <div>All Public Weddings</div>}
                    {tab === 'Birthday' && <div>All Public Birthdays</div>}
                    {tab === 'Anniversary' && (
                        <div>All Pu1blic Anniversaries</div>
                    )}
                    {tab === 'Convocation' && (
                        <div>All Public Convocations</div>
                    )}
                    {tab === 'Other' && <div>All Other Events</div>}
                </div>
            </section>
            {/* <section className="bg-purple-base w-1/3 h-screen"></section> */}
        </div>
    );
}
