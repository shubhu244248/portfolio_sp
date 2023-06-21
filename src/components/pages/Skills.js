import React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

function Skills() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto max-w-5xl my-10">
                <h1 className="text-3xl font-bold mb-4">Skills</h1>
                <h2 className="text-2xl font-bold mb-2">Programming Languages</h2>
                <p className="mb-2">
                    Core Java - Java Basic, OOPS, Data Structure, Python
                </p>
                <h2 className="text-2xl font-bold mb-2">Databases</h2>
                <p className="mb-2">
                    MySQL, MongoDB
                </p>
                <h2 className="text-2xl font-bold mb-2">Web Development</h2>
                <p className="mb-2">
                    HTML and CSS, JavaScript, Bootstrap, React.js, Tailwind CSS
                </p>
                <h2 className="text-2xl font-bold mb-2">Designing</h2>
                <p className="mb-2">
                    Canva, Adobe XD
                </p>
                <h2 className="text-2xl font-bold mb-2">Machine Learning</h2>
                <p className="mb-2">
                    Basic Data Analysis
                </p>
                <h2 className="text-2xl font-bold mb-2">Other</h2>
                <p className="mb-2">
                    Debugging Manual, Debugging Break Point Technique
                </p>

            </div>
            {/* Footer if here  */}
            <Footer />
        </div>
    );
}

export default Skills;
