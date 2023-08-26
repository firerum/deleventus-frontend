import { EventCard, eventData } from './EventCard';
import Link from 'next/link';
import { Button } from '@components/Button';

export const EventList = ({ events, isLoading, isError, page, setPage }) => {
    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error loading data</div>}
            <div className="w-full flex flex-wrap justify-center gap-4 lg:grid grid-cols-2 xl:grid-cols-4">
                {events?.map((eve, index) => (
                    <div className="w-full max-w-[330px]" key={index}>
                        <Link href={`events/${eve.id}`}>
                            <EventCard
                                name={eve?.name}
                                desc={eve?.description}
                                date={eve?.date_of_event}
                                avatar={eve?.avatar}
                            />
                        </Link>
                    </div>
                ))}
            </div>
            <div className="flex gap-4">
                <Button
                    className={
                        'bg-btn-color text-white mt-8 py-1 px-4 mx-auto disabled:bg-gray-200'
                    }
                    onClick={() => setPage((prev) => prev - 1)}
                    disabled={page === 1}
                >
                    Previous Page
                </Button>{' '}
                <span>{page}</span>
                <Button
                    className={
                        'bg-btn-color text-white mt-8 py-1 px-4 mx-auto disabled:bg-gray-200'
                    }
                    onClick={() => setPage((prev) => prev + 1)}
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Load More'}
                </Button>
            </div>
        </div>
    );
};
