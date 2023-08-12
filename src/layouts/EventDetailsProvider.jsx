'use client';
import { useAuth } from '@sections/authentication/AuthProtect';
import WebAppNav from './WebAppNav';
import WebAppHeader from './WebAppHeader';

export const EventDetailsProvider = ({ children }) => {
    const { user } = useAuth();

    return (
        <div>
            {user ? (
                <div>
                    <div className="fixed left-0 top-0 bottom-0 bg-white z-50 shadow-sm">
                        <WebAppNav />
                    </div>
                    <div className="lg:pl-56 min-h-screen overflow-clip">
                        <div className="fixed right-0 left-0 z-40 lg:left-56">
                            <WebAppHeader />
                        </div>
                        <div className="pt-20">{children}</div>
                    </div>
                </div>
            ) : (
                children
            )}
        </div>
    );
};
