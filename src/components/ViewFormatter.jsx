import { SearchBox } from '@sections/UserEvents/SearchBox';
import { MdGridView, MdFilterAlt } from 'react-icons/md';
import { Button } from './Button';

export const ViewFormatter = () => {
    return (
        <div className="flex gap-8 py-6">
            <div className="w-1/2">
                <SearchBox
                    className="bg-white w-full px-14 py-2 rounded-md shadow-default"
                    placeholder="search event"
                />
            </div>
            <div className="flex gap-2 md:gap-8">
                <Button className="flex gap-2 items-center px-4 border-1 rounded-md">
                    <MdGridView />
                    <span>Grid</span>
                </Button>
                <Button className="flex gap-2 items-center px-4 border-1 rounded-md">
                    <MdFilterAlt />
                    <span>Filter</span>
                </Button>
            </div>
        </div>
    );
};
