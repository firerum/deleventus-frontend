'use client';
import { useState } from 'react';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { EventCard, eventData } from '@sections/events/EventCard';

export default function Explore() {
    const [tab, setTab] = useState('All');

    return (
        <main className="bg-pry-purple min-h-screen text-center pt-20 pb-12 px-6 md:px-16 overflow-clip">
            <section>
                <div className="sticky top-[63px] z-20 bg-pry-purple">
                    <WebAppSubnav
                        tabs={[
                            'All',
                            'Wedding',
                            'Birthday',
                            'Anniversary',
                            'Convocation',
                            'Concert',
                            'Other',
                        ]}
                        setTab={setTab}
                        tab={tab}
                    />
                </div>
                <div className="mt-6">
                    {tab === 'All' && (
                        <div className="flex flex-wrap gap-4 xl:grid grid-cols-4">
                            {eventData.map((eve, index) => (
                                <EventCard
                                    key={index}
                                    name={eve.name}
                                    desc={eve.desc}
                                    date={eve.date_of_event}
                                    avatar={eve.avatar}
                                />
                            ))}
                        </div>
                    )}
                    {tab === 'Wedding' && <div>All Public Weddings</div>}
                    {tab === 'Birthday' && <div>All Public Birthdays</div>}
                    {tab === 'Anniversary' && (
                        <div>All Public Anniversaries</div>
                    )}
                    {tab === 'Convocation' && (
                        <div>All Public Convocations</div>
                    )}
                    {tab === 'Other' && <div>All Other Events</div>}
                </div>
            </section>
        </main>
    );
}
