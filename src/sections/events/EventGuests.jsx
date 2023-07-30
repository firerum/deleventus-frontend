import { Button } from '@components/Button';
import { ViewFormatter } from '@components/ViewFormatter';
import { MdEdit } from 'react-icons/md';

const guests = [
    { name: 'john doe', contact: 'Johndoe123@gmail.com', status: 'pending' },
    { name: 'juliet doe', contact: 'Julietdoe@gmail.com', status: 'accepted' },
    { name: 'Gbenga otedola', contact: 'oteAyahoo.com', status: 'accepted' },
    { name: 'akin igwe', contact: 'akinigwe@hotmail.com', status: 'rejected' },
    {
        name: 'onazi moses',
        contact: 'onaziprince@yahoo.com',
        status: 'pending',
    },
];

export const EventGuests = () => {
    return (
        <>
            <ViewFormatter />
            <section className="bg-white sm:rounded-lg shadow-default pl-4 p-2">
                <h3>Total Guests</h3>
                <div className="relative overflow-x-auto border-1">
                    <table className="w-full text-sm text-left text-[#726D7C]">
                        <thead className="w-full text-xs uppercase bg-[#FAFAFB] text-[#3E384B]">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input
                                            id="checkbox-all-search"
                                            type="checkbox"
                                            className="w-4 h-4 rounded"
                                        />
                                        <label
                                            for="checkbox-all-search"
                                            className="sr-only"
                                        >
                                            checkbox
                                        </label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    attendee name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    contact
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {guests.map((guest, index) => (
                                <tr key={index} className="bg-white border-b">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-1"
                                                type="checkbox"
                                                name="all"
                                                className="w-4 h-4 rounded"
                                            />
                                            <label
                                                for="checkbox-table-search-1"
                                                className="sr-only"
                                            >
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 capitalize font-medium whitespace-nowrap"
                                    >
                                        {guest.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {guest.contact}
                                    </td>
                                    <td
                                        className={`px-6 py-4 capitalize font-medium ${
                                            guest.status === 'accepted'
                                                ? 'text-green-700'
                                                : guest.status === 'pending'
                                                ? 'text-yellow-500'
                                                : 'text-red-800'
                                        }`}
                                    >
                                        {guest.status}
                                    </td>
                                    <td className="flex items-center px-6 py-4 space-x-3">
                                        <Button title="edit">
                                            <MdEdit className="font-bold text-xl text-pry-header-title" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};
