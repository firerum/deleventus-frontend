import { motion } from 'framer-motion';

export const WebAppSubnav = ({ tabs, setTab, tab }) => {
    return (
        <ul className="subnav flex items-center border-b-1 overflow-x-scroll overscroll-contain">
            {tabs.map((selectedTab, index) => (
                <li
                    key={index}
                    onClick={() => setTab(selectedTab)}
                    className="relative selected-tab whitespace-nowrap text-pry-text-color-2 font-medium py-2 px-4 first-of-type:pl-0 cursor-pointer hover:text-btn-color"
                >
                    {selectedTab}
                    {selectedTab === tab && (
                        <motion.div
                            className="selected-tab-active"
                            layoutId="selected-tab-active"
                        />
                    )}
                </li>
            ))}
        </ul>
    );
};
