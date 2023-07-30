'use client';
import { useState } from 'react';
import { EventSummaryCard } from './EventSummaryCard';
import { ViewFormatter } from '@components/ViewFormatter';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default function EventDetails() {
    const [tab, setTab] = useState('Overview');
    const param = useParams();

    // Google Map Init
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'YOUR_API_KEY',
    });
    const containerStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
    };

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
                    tabs={['Overview', 'Guest List', 'Media']}
                    setTab={setTab}
                    tab={tab}
                />
                <div>
                    <ViewFormatter />
                    {tab === 'Overview' && (
                        <article className="w-full flex justify-start">
                            <div className="md:w-1/2">
                                <Image
                                    src="/images/featured_event_image_2.jpeg"
                                    width={600}
                                    height={100}
                                    alt="event name"
                                    className="w-full rounded-lg"
                                    placeholder="blur"
                                    blurDataURL="/images/featured_event_image_2.jpeg"
                                />
                                <div className="mt-4 max-w-lg">
                                    <h3 className="">Description</h3>
                                    <p className="bg-white py-3 px-6 rounded-lg">
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
                            <div className="hidden md:block w-1/2 pl-8">
                                <h3 className="mb-0">Location</h3>
                                {isLoaded ? (
                                    <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        zoom={10}
                                    ></GoogleMap>
                                ) : (
                                    <Image
                                        src="/images/map.svg"
                                        width={200}
                                        height={200}
                                        blurDataURL="/images/map.svg"
                                        placeholder="blur"
                                        className="w-full inline-block"
                                    />
                                )}
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
