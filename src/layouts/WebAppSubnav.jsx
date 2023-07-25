export const WebAppSubnav = ({ tabs, setTab }) => {
    return (
        <div className="flex gap-12 border-b-1 overflow-x-scroll">
            {tabs.map((nav, index) => (
                <div
                    key={index}
                    onClick={() => setTab(nav)}
                    className="text-pry-text-color-2 font-medium pb-2 cursor-pointer hover:text-btn-color"
                >
                    {nav}
                </div>
            ))}
        </div>
    );
};
