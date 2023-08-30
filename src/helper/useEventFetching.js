import { useQuery } from '@tanstack/react-query';

export const useEventFetching = (page, pageSize, API_URL) => {
    const fetchEvents = async (page) => {
        const response = await fetch(
            `${API_URL}/events?page=${page}&pageSize=${pageSize}`
        );
        const data = await response.json();
        return data;
    };

    return useQuery({
        queryKey: ['events', page],
        queryFn: () => fetchEvents(page),
        keepPreviousData: true,
    });
};
