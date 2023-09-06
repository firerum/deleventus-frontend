'use client';
import { useState } from 'react';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { AnimateContent } from '@utils/framer-motion/AnimateContent';
import { EventList } from '@sections/events/EventList';
import { useEventFetching } from '@helper/useEventFetching';
import { SearchBox } from '@sections/events/SearchBox';

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

    const API_URL = process.env.API_URL;
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const { data, isLoading, isError, isPreviousData } = useEventFetching(
        page,
        pageSize,
        API_URL
    );

    return (
        <main className="bg-pry-purple min-h-screen text-center pt-20 pb-12 px-6 md:px-16 overflow-clip">
            <section>
                <div className="sticky top-[63px] z-20 bg-pry-purple">
                    <WebAppSubnav tabs={tabs} setTab={setTab} tab={tab} />
                    <div className="w-full md:w-1/2 pt-6 pb-2">
                        <SearchBox
                            className="bg-white w-full px-14 py-2 rounded-default shadow-default"
                            placeholder="search event"
                        />
                    </div>
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
