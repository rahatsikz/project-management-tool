import React, { ReactNode, useState } from 'react';

interface Tab {
    label: string;
    content: React.ReactNode;
}

const Tab: React.FC<{ tab: Tab; isActive: boolean; onClick: () => void }> = ({
    tab,
    isActive,
    onClick,
}) => (
    <div
        onClick={onClick}
        className={`cursor-pointer px-4 py-2 border-b-2 ${isActive ? 'bg-primary text-white' : 'border-gray-300 text-gray-500'
            }`}
    >
        {tab.label}
    </div>
);

const TabContent: React.FC<{ isActive: boolean, children: ReactNode }> = ({ isActive, children }) =>
    isActive ? <div className="p-4">{children}</div> : null;

const Tabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <div>
            <div className="flex justify-center items-center">
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        tab={tab}
                        isActive={index === activeTab}
                        onClick={() => setActiveTab(index)}
                    />
                ))}
            </div>
            {tabs.map((tab, index) => (
                <TabContent key={index} isActive={index === activeTab}>
                    {tab.content}
                </TabContent>
            ))}
        </div>
    );
};

export default Tabs