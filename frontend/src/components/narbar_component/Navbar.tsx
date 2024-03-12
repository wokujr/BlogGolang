import React, { useState } from 'react';
import {Link} from "react-router-dom";
import SearchButton from "./SearchButton.tsx";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    return (
        <nav className="bg-black shadow-lg shadow-white/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[4rem] sm::w-[36rem]">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen ? "true" : "false"}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className={`h-6 w-6 ${isMobileMenuOpen ? '' : 'hidden'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className={`flex flex-shrink-0 items-center`}>
                            <Link to="/"> <img className={`h-8 w-auto`} src="/kuroyuki.png" alt="Kuroyuki"/> </Link>
                        </div>
                        <div className="hidde sm:ml-6 sm:block flex-grow mx-auto">
                            <div className="flex justify-center space-x-4">
                                <Link to="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-xl font-medium" aria-current="page">Home</Link>
                                <Link to="/blog" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium">Blog</Link>
                                <Link to="/japan" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium">Japan</Link>
                                <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium">About me</Link>
                            </div>
                        </div>
                        <SearchButton />
                    </div>
                </div>
            </div>
            <div className={`sm:hidden ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link to="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</Link>
                    <Link to="/blog" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Blog</Link>
                    <Link to="/japan" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Japan</Link>
                    <Link to="/aboutme" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About me</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
