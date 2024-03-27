import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';

// Define the Sidebar component as a default function
export default function Sidebar({ onItemClick }: { onItemClick: (item: string) => void }) {
    return (
        <main>
            <div className="bg-cyan-900 text-white h-full p-6">
                <h2 className="text-lg font-semibold mb-4 text-center ">Dashboard</h2>
                <ul className="mx-4 p-6">
                    <li className="mb-3 cursor-pointer" onClick={() => onItemClick("Home")}><FontAwesomeIcon
                        icon={fas.faHome} className="mx-3"/> Home
                    </li>
                    <li className="mb-3 cursor-pointer" onClick={() => onItemClick("Analytics")}><FontAwesomeIcon
                        icon={fas.faChartPie} className="mx-3"/> Analytics
                    </li>
                    <li className="mb-3 cursor-pointer" onClick={() => onItemClick("Blog")}><FontAwesomeIcon
                        icon={fas.faBook} className="mx-3"/> Blog Post
                    </li>
                    <li className="cursor-pointer" onClick={() => onItemClick("User")}>
                        <FontAwesomeIcon icon={fas.faUser} className="mx-3"/> User
                    </li>
                </ul>

                {/* Logout Item */}
                <div className="mt-auto text-white p-6 mx-4">
                    <ul>
                        <li className="cursor-pointer" onClick={() => onItemClick("Logout")}>
                            <FontAwesomeIcon icon={fas.faPowerOff} className="mx-3"/> Logout
                        </li>
                    </ul>
                </div>
            </div>
        </main>

    );
}


