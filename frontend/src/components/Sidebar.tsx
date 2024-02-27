import React from 'react';

const Sidebar: React.FC<{ onItemClick: (item: string) => void }> = ({ onItemClick }) => {
    return (
        <div className="bg-gray-800 text-white h-full w-1/4 p-4">
            <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
            <ul>
                <li className="mb-2 cursor-pointer" onClick={() => onItemClick("Home")}>Home</li>
                <li className="mb-2 cursor-pointer" onClick={() => onItemClick("Analytics")}>Analytics</li>
                <li className="mb-2 cursor-pointer" onClick={() => onItemClick("Settings")}>Settings</li>
            </ul>
        </div>
    );
};

export default Sidebar;
