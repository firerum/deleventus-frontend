import { FaEllipsisH } from 'react-icons/fa';

export const EventSummaryCard = () => {
    return (
        <div className="bg-white w-max p-6 rounded-md shadow-default">
            EventSummaryCard
            <p className="text-pry-header-title font-bold my-6">5</p>
            <div className="flex justify-between">
                <span>Title</span>
                <button>
                    <FaEllipsisH />
                </button>
            </div>
        </div>
    );
};
