import { FaEllipsisH } from 'react-icons/fa';

export const EventSummaryCard = () => {
    return (
        <div className="bg-white w-max p-6 rounded-md shadow-default">
            Event summary card
            <p className="text-pry-header-title font-bold mt-6 mb-2">50</p>
            <div className="flex justify-between">
                <span className="text-pry-text-color-1 text-sm capitalize">Attendance</span>
                <button>
                    <FaEllipsisH />
                </button>
            </div>
        </div>
    );
};
