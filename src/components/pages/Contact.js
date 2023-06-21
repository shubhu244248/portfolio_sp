import React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
    {
        id: 1,
        name: 'Name: Shubham Ramesh Patil',
        icon: <FiMapPin />,
    },
    {
        id: 2,
        name: 'Email: shubhu244248@gmail.com',
        icon: <FiMail />,
    },
    {
        id: 3,
        name: 'Phone: +91 7775093424',
        icon: <FiPhone />,
    },
];

function Contact() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto max-w-5xl my-10">

                <h2 className="text-3xl font-bold mb-4">
                    Contact details
                </h2>
                <ul className="font-general-regular">
                    {contacts.map((contact) => (
                        <li className="flex " key={contact.id}>
                            <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                                {contact.icon}
                            </i>
                            <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                                {contact.name}
                            </span>
                        </li>
                    ))}
                </ul>
                {/* Footer if here  */}
                <Footer />
            </div>
        </div>
    );
}

export default Contact;



// const Contact = () => {
//     return (
//         <div className="w-full lg:w-1/2">
//             <div className="text-left max-w-xl px-6">
               
//             </div>
//         </div>
//     );
// };

// export default Contact;
