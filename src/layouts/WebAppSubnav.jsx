export const WebAppSubnav = ({ tabs, setTab, tab }) => {
    return (
        <div className="subnav flex items-center overflow-x-scroll overscroll-contain">
            {tabs.map((selectedTab, index) => (
                <div
                    key={index}
                    onClick={() => setTab(selectedTab)}
                    className={`relative selected-tab text-pry-text-color-2 font-medium py-2 px-4 first-of-type:pl-0 cursor-pointer hover:text-btn-color ${
                        selectedTab === tab && 'selected-tab-active'
                    }`}
                >
                    {selectedTab}
                </div>
            ))}
        </div>
    );
};
