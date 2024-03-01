import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'

const Sidebar: React.FC<{ onItemClick: (item: string) => void }> = ({ onItemClick }) => {
    return (
        <div className="bg-gray-800 text-white h-full w-1/6 p-6">
            <h2 className="text-lg font-semibold mb-4 mx-4 ">Dashboard</h2>
            <ul className="mx-4 p-6">
                <li className="mb-3 cursor-pointer" onClick={() => onItemClick("Home")}><FontAwesomeIcon
                    icon={fas.faHouse} className="mx-3"/> Home
                </li>
                <li className="mb-3 cursor-pointer" onClick={() => onItemClick("Analytics")}><FontAwesomeIcon
                    icon={fas.faChartPie} className="mx-3"/> Analytics
                </li>
                <li className="mb-3 cursor-pointer" onClick={() => onItemClick("Settings")}><FontAwesomeIcon
                    icon={fas.faGear} className="mx-3"/> Settings
                </li>
            </ul>

            {/* User item */}
            <div className="mt-auto bg-gray-800 text-white p-6 mx-4">
                <ul>
                    <li className="cursor-pointer" onClick={() => onItemClick("User")}>
                        <FontAwesomeIcon icon={fas.faUser} className="mx-3"/> User
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;
