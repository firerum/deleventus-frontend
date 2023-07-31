import { ViewFormatter } from '@components/ViewFormatter';
import { MdUpload } from 'react-icons/md';
import { Button } from '@components/Button';

export const EventMedia = () => {
    return (
        <>
            <ViewFormatter />
            <section>
                <Button className="bg-btn-color text-white text-sm flex items-center gap-2 border-1 px-4 py-2 rounded-default shadow-premium">
                    <span className="order-2">Upload Memories</span>
                    <MdUpload />
                </Button>
                <div>
                    <h3>Media</h3>
                    <p>Event Media</p>
                </div>
            </section>
        </>
    );
};
