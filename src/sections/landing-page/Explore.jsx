'use client';
import { useState } from 'react';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { EventCard, eventData } from '@sections/events/EventCard';
import Link from 'next/link';
import { AnimateContent } from '@utils/framer-motion/AnimateContent';
import { TabSwipe } from '@utils/tab-swipe';

export default function Explore() {
    const tabs = [
        'All',
        'Wedding',
        'Birthday',
        'Anniversary',
        'Convocation',
        'Concert',
        'Other',
    ];
    const [tab, setTab] = useState(tabs[0]);
    const [swipedTabIndex, setSwipedTabIndex] = useState(0);

    return (
        <main className="bg-pry-purple min-h-screen text-center pt-20 pb-12 px-6 md:px-16 overflow-clip">
            <section>
                <div className="sticky top-[63px] z-20 bg-pry-purple">
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
                                            key={index}
                                            href={`/explore/${eve.name}`}
                                            className="hover:no-underline"
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
                        {tab === 'Wedding' && <div>All Public Weddings</div>}
                        {tab === 'Birthday' && <div>All Public Birthdays</div>}
                        {tab === 'Anniversary' && (
                            <div>All Public Anniversaries</div>
                        )}
                        {tab === 'Convocation' && (
                            <div>All Public Convocations</div>
                        )}
                        {tab === 'Other' && <div>All Other Events</div>}
                    </TabSwipe>
                </div>
            </section>
        </main>
    );
}
