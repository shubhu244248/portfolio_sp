import React from 'react';
import { useNavigate } from 'react-router-dom';
// import logo from '../image/logopng.png';

function Navbar() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <nav className="sm:container sm:mx-auto">
            <div className="bg-transparent sm:flex sm:justify-between sm:items-center py-6">
                {/* <div className="flex items-center">
                    <button
                        className="text-gray-800 font-bold px-3 py-2 mx-8"
                        onClick={() => handleNavigation('/')}
                    >
                        Mr.S. R. P.
                    </button>
                </div> */}
                <button
                    className="text-gray-800 font-bold border border-gray-800 rounded bg-transparent hover:text-gray-800 px-3 py-2 mx-8"
                    onClick={() => handleNavigation('/')}
                >
                    Home
                </button>
                {/* <button
                    className="text-gray-800 font-bold border border-gray-800 rounded bg-transparent hover:bg-gray-50 hover:text-gray-800 px-3 py-2 mx-8" onClick={() => handleNavigation('/about')}
                >
                    About
                </button> */}
                <button
                    className="text-gray-800 font-bold border border-gray-800 dark:hover:text-indigo-400 rounded bg-transparent hover:bg-gray-50 hover:text-gray-800 px-3 py-2 mx-8" onClick={() => handleNavigation('/education')}
                >
                    Education
                </button>
                <button
                    className="text-gray-800 font-bold border border-gray-800 dark:hover:text-indigo-400 rounded bg-transparent hover:bg-gray-50 hover:text-gray-800 px-3 py-2 mx-8" onClick={() => handleNavigation('/skills')}
                >
                    Skills
                </button>
                <button
                    className="text-gray-800 font-bold border border-gray-800 dark:hover:text-indigo-400 rounded bg-transparent hover:bg-gray-50 hover:text-gray-800 px-3 py-2 mx-8" onClick={() => handleNavigation('/experience')}
                >
                    Experience
                </button>
                <button
                    className="text-gray-800 font-bold border border-gray-800 dark:hover:text-indigo-400 rounded bg-transparent hover:bg-gray-50 hover:text-gray-800 px-3 py-2 mx-8" onClick={() => handleNavigation('/projects')}
                >
                    Projects
                </button>
                <button
                    className="text-gray-800 font-bold border border-gray-800 dark:hover:text-indigo-400 rounded bg-transparent hover:bg-gray-50 hover:text-gray-800 px-3 py-2 mx-8" onClick={() => handleNavigation('/contact')}
                >
                    Contact
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
