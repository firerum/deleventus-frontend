'use client';
import { useState } from 'react';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { useParams } from 'next/navigation';
import { EventOverview } from '@sections/events/EventOverview';
import { EventMedia } from '@sections/events/EventMedia';
import { Button } from '@components/Button';
import { FaTicketAlt, FaShareAlt } from 'react-icons/fa';
import { AnimateContent } from '@utils/framer-motion/AnimateContent';

export default function EventDetails() {
    const [tab, setTab] = useState('Gallery');
    const param = useParams();

    return (
        <div className="bg-pry-purple pt-24 pb-6 px-6 md:px-16 overflow-clip">
            <div className="flex justify-between items-center">
                <div>
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
                        onClick={() => console.log('clicked')}
                    >
                        <span className="hidden md:inline order-2">
                            {' '}
                            Get Ticket
                        </span>
                        <FaTicketAlt />
                    </Button>
                </div>
            </div>
            <section>
                <AnimateContent>
                    <EventOverview />
                </AnimateContent>
            </section>

            <section>
                <div className="bg-pry-purple sticky top-[63px] z-20">
                    <WebAppSubnav
                        tabs={['Gallery']}
                        setTab={setTab}
                        tab={tab}
                    />
                </div>
                <div>
                    {tab === 'Gallery' && (
                        <AnimateContent>
                            <EventMedia />
                        </AnimateContent>
                    )}
                </div>
            </section>
        </div>
    );
}
