'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { EventCard } from './EventCard';
import Link from 'next/link';
import { Button } from '@components/Button';

//TODO still experimental code
export const EventList = () => {
    const pageSize = 5;
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const token = Cookies.get('access_token');
    const API_URL = process.env.API_URL;

    const fetchEvents = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${API_URL}/events`, {
                params: {
                    page,
                    pageSize,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setEvents((prevEvents) => [...prevEvents, ...response.data.events]);
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false);
        }
    };

    const loadMoreEvents = () => {
        setPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        fetchEvents();
    }, [page]);

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 lg:grid grid-cols-2 xl:grid-cols-4">
                {events.map((eve) => (
                    <Link
                        href={`events/${eve.id}`}
                        className="w-full"
                        key={eve.id}
                    >
                        <EventCard
                            name={eve?.name}
                            desc={eve?.desc}
                            date={eve?.date_of_event}
                            avatar={eve?.avatar}
                        />
                    </Link>
                ))}
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <Button className={'block border-1 mt-8 py-1 px-4 mx-auto'} onClick={loadMoreEvents}>
                    Load More
                </Button>
            )}
        </>
    );
};
