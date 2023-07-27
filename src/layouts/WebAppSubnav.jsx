export const WebAppSubnav = ({ tabs, setTab }) => {
    return (
        <div className="flex items-center overflow-x-scroll">
            {tabs.map((nav, index) => (
                <div
                    key={index}
                    onClick={() => setTab(nav)}
                    className="relative subnav text-pry-text-color-2 font-medium py-2 px-4 first-of-type:pl-0 cursor-pointer hover:text-btn-color"
                >
                    {nav}
                </div>
            ))}
        </div>
    );
};
