'use client';
import { useState } from 'react';
import { InputField } from '@components/InputField';
import { Button } from '@components/Button';
import { Modal } from '@components/Modals/Modal';

export const CreateEvent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen((prev) => !prev)}>open</Button>
            <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
                This is the modal content
            </Modal>
        </div>
    );
};
