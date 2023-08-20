import { motion } from 'framer-motion';

export const WebAppSubnav = ({ tabs, setTab, tab }) => {
    return (
        <nav role="navigation">
            <ul className="subnav flex items-center border-b-1 overflow-x-scroll overscroll-contain">
                {tabs.map((selectedTab, index) => (
                    <li
                        key={index}
                        onClick={() => setTab(selectedTab)}
                        className="relative selected-tab whitespace-nowrap text-pry-text-color-2 font-medium py-2 px-4 first-of-type:pl-0 cursor-pointer hover:text-btn-color"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                setTab(selectedTab);
                            }
                        }}
                        role="menuitem"
                        aria-current={selectedTab === tab ? 'page' : undefined}
                    >
                        <span tabIndex={0}>{selectedTab}</span>
                        {selectedTab === tab && (
                            <motion.div
                                className="selected-tab-active"
                                layoutId="selected-tab-active"
                                aria-hidden="true"
                            />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
