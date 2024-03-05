import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';

const SearchButton: React.FC = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
                type="button"
                className={`relative rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ${isSearchOpen ? 'rounded' : ''}`}
                onClick={toggleSearch}
            >
                <span className="sr-only">Search</span>
                {/* Show search icon */}
                {!isSearchOpen && (
                    <FontAwesomeIcon className="text-xl" icon={fas.faSearch}/>
                )}

                {/* Show close icon */}
                {isSearchOpen && (
                    <FontAwesomeIcon className="text-xl" icon={fas.faXmark}/>
                )}
            </button>
            {/* Show search form if isSearchOpen is true */}
            {isSearchOpen && (
                <form className="ml-2">
                    {/* Add your form fields here */}
                    <input
                        type="text"
                        className="bg-gray-800 text-gray-100 rounded-full px-4 py-2 focus:outline-none"
                        placeholder="Search..."
                    />
                </form>
            )}
        </div>
    );
};

export default SearchButton;
