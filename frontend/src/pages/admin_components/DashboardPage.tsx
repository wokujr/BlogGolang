
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar.tsx';
import UserDashboard from "./UserDashboard.tsx";
import HomeDashboard from "./HomeDashboard.tsx";
import AnalyticDashboard from "./AnalyticDashboard.tsx";

const DashboardPage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<string>("Home");

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
    };

    const renderContent = () => {
        switch (selectedItem) {
            case "Home":
                return <HomeDashboard />;
            case "Analytics":
                return <AnalyticDashboard />;
            case "User":
                return <UserDashboard />
            default:
                return null;
        }
    };

    return (
        <div className="flex h-screen">
            <Sidebar onItemClick={handleItemClick} />
            <div className="flex-grow p-4">
                <h1 className="text-4xl text-center font-bold mt-2 mb-4">Welcome to the Dashboard</h1>
                {renderContent()}
            </div>
        </div>
    );
};

export default DashboardPage;
