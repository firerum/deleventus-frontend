import { useState } from 'react';
import { Button } from '@components/Button';
import { Modal } from '@components/Modals/Modal';

export const DeactivateAccount = () => {
    const [isOpen, setIsOpen] = useState(false);

    const Deactivate = () => {
        return (
            <div className="bg-purple-base p-8 flex flex-col justify-center items-center text-white text-center">
                Are you sure you want to Deactivate your Account ?
                <div className="flex gap-4 mt-4">
                    <Button className="py-2 px-4 bg-green-700 text-white rounded-default">
                        Yes
                    </Button>
                    <Button className="py-2 px-4 bg-red-700 text-white">
                        No
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <section>
            <div>
                <h3>Deactive Account</h3>
                <p className="text-sm mb-4">
                    "We're sorry to see you go. If you wish to take a break or
                    leave Deleventus, you can deactivate your account
                    temporarily or permanently. By deactivating your account,
                    your event data and preferences will be temporarily hidden
                    from others. You can reactivate your account at any time by
                    simply logging back in. If you still wish to proceed, click
                    the 'Deactivate Account' button below. Remember, you can
                    always return to Deleventus and resume your event planning
                    journey whenever you're ready. We hope to see you back
                    soon!"
                </p>
                <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
                    <Deactivate />
                </Modal>
                <Button
                    className={
                        'bg-red-700 text-white border-1 py-2 px-4 rounded-default'
                    }
                    onClick={(e) => {
                        e.preventDefault(), setIsOpen((prev) => !prev);
                    }}
                >
                    Deactive Account
                </Button>
            </div>
        </section>
    );
};
