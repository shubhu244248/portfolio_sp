// import React from 'react';

// function Footer() {
//     return (
//         <footer className="bg-gray-800 text-white p-3">
//             <div className="container mx-auto text-center">
//                 <p>&copy; 2023 Your Company. All rights reserved.</p>
//             </div>
//         </footer>
//     );
// }

// export default Footer;
import {
    FiGithub,
    FiLinkedin,
    FiGlobe,
    FiHexagon,
} from 'react-icons/fi';

const socialLinks = [
    {
        id: 1,
        icon: <FiGlobe />,
        url: 'https://www.stoman.me/',
    },
    {
        id: 2,
        icon: <FiGithub />,
        url: 'https://github.com/shubhu244248',
    },

    {
        id: 3,
        icon: <FiLinkedin />,
        url: 'https://www.linkedin.com/in/shubhu244248/',
    },
    {
        id: 4,
        icon: <FiHexagon />,
        url: 'https://www.hackerrank.com/shubhu244248?hr_r=1',
    },
];

const Footer = () => {
    return (
        <div className="container">
            <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
                {/* Footer social links */}
                <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
                    <p className="text-3xl sm:text-4xl text-gray-800 dark:text-primary-light mb-5">
                        Follow me
                    </p>
                    <ul className="flex gap-4 sm:gap-8">
                        {socialLinks.map((link) => (
                            <a
                                href={link.url}
                                target="__blank"
                                key={link.id}
                                className="text-gray-800 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                            >
                                <i className="text-xl sm:text-2xl md:text-3xl">
                                    {link.icon}
                                </i>
                            </a>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Footer;
