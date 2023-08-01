'use client';
import { useState } from 'react';
import { WebAppSubnav } from '@layouts/WebAppSubnav';
import { Profile } from './Profile';
import { Button } from '@components/Button';

export default function AccountSettings() {
    const [tab, setTab] = useState('Profile');

    return (
        <div className="p-6 lg:pl-0">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl">Account Settings</h2>
                <Button className="bg-btn-color mb-2 py-2 px-4 rounded-default shadow-premium text-[#F6F5F6]">
                    Save Changes
                </Button>
            </div>

            <section>
                <WebAppSubnav
                    tabs={['Profile', 'Notifications', 'Payment and Billing']}
                    tab={tab}
                    setTab={setTab}
                />
                <div>
                    {tab === 'Profile' && <Profile />}
                    {tab === 'Notifications' && <></>}
                    {tab === 'Payment and Billing' && <></>}
                </div>
            </section>
        </div>
    );
}
