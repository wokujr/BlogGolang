import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import {Link, Outlet} from "react-router-dom";

// Define the Sidebar component as a default function
export default function Sidebar() {

    const [isBlogSubMenu, setIsBlogSubMenu] = useState(false);
    const handleBlogSubMenu = () => {
        setIsBlogSubMenu(!isBlogSubMenu);
    }

    return (
        <main className="h-screen flex">
            <div className="bg-cyan-900 text-white h-full p-6 w-[18rem] ">
                <h2 className="text-lg font-semibold mb-4 text-center ">Dashboard</h2>
                <ul className="mx-4 p-6">
                    <li className="mb-3 cursor-pointer" >
                        <Link to="/admin/home">
                            <FontAwesomeIcon icon={fas.faHome} className="mx-3"/>
                            Home
                        </Link>
                    </li>
                    <li className="mb-3 cursor-pointer" >
                        <Link to="/admin/analytics">
                            <FontAwesomeIcon icon={fas.faChartPie} className="mx-3"/>
                            Analytics
                        </Link>

                    </li>
                    <li className="mb-3 cursor-pointer" onClick={handleBlogSubMenu}>

                            <FontAwesomeIcon icon={fas.faBook} className="mx-3"/>
                            Blog
                            {
                                isBlogSubMenu && (
                                    <ul className="mx-4">
                                        <li className="cursor-pointer">
                                            <Link to="/admin/blog"> Blog Post </Link>
                                        </li>
                                        <li className="cursor-pointer">
                                            <Link to="/admin/blog/list">Blog Lists</Link>
                                        </li>
                                        <li className="cursor-pointer">
                                            <Link to="/admin/blog/draft"> Draft </Link>
                                        </li>
                                    </ul>
                                )
                            }

                    </li>
                    <li className="mb-3 cursor-pointer">
                        <Link to="/admin/user">
                            <FontAwesomeIcon icon={fas.faUser} className="mx-3"/>
                            User
                        </Link>

                    </li>
                </ul>

                {/* Logout Item */}
                <div className="mt-auto text-white p-6 mx-4">
                    <ul>
                        <li className="cursor-pointer">
                            <FontAwesomeIcon icon={fas.faPowerOff} className="mx-3"/> Logout
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </main>

    );
}