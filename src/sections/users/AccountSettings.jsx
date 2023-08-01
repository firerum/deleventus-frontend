'use client';
import { useState } from 'react';
import { WebAppSubnav } from '@layouts/WebAppSubnav';

export default function AccountSettings() {
    const [tab, setTab] = useState('Profile');

    return (
        <div className="p-6 lg:pl-0 flex gap-8">
            <section>
                <h2 className="text-xl">Account Settings</h2>
                <WebAppSubnav
                    tabs={['Profile', 'Notifications', 'Payment and Billing']}
                    tab={tab}
                    setTab={setTab}
                />
            </section>
        </div>
    );
}
