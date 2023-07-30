'use client';
import { useState } from 'react';
import { EventSummaryCard } from './EventSummaryCard';
import { ViewFormatter } from '@components/ViewFormatter';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function EventDetails() {
    const [tab, setTab] = useState('Overview');
    const param = useParams();

    return (
        <div className="p-6 lg:p-0 lg:pr-6">
            <div className="py-4">
                My Events &gt; <span className="font-bold">Event Name</span>
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
                    tabs={['Overview', 'Guest List', 'Media']}
                    setTab={setTab}
                    tab={tab}
                />
                <div>
                    <ViewFormatter />
                    {tab === 'Overview' && (
                        <article className="w-full">
                            <Image
                                src="/images/featured_event_image_2.jpeg"
                                width={600}
                                height={100}
                                alt="event name"
                                className="w-full h-40 object-cover"
                                placeholder="blur"
                                blurDataURL="/images/featured_event_image_2.jpeg"
                            />
                            <div className="mt-4 max-w-lg">
                                <div>
                                    <h3 className="mb-0">Description</h3>
                                    <p className="bg-white p-3">
                                        Unite for a Cause, an impactful charity
                                        event dedicated to making a positive
                                        difference in the lives of those in
                                        need. This inspiring evening brings
                                        together compassionate individuals and
                                        organizations, aiming to create lasting
                                        change and transform communities.
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </article>
                    )}
                    {tab === 'Guest List' && <div>Guest List</div>}
                    {tab === 'Media' && <div>Media</div>}
                </div>
            </section>
        </div>
    );
}
