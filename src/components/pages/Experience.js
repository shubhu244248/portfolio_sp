import React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

function Experience() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto max-w-5xl my-10">
                <h1 className="text-3xl font-bold mb-4">Experience</h1>
                <h2 className="text-2xl font-bold mb-2">1. Intern - Delivery</h2>
                <p className="mb-2">
                    Virtusa Consulting Services Pvt Ltd, Chennai (Dec 2022 – Present)
                </p>
                <p className="mb-4">
                    Tech Stack: Core Java, JDBC, MySQL, React.js, Spring Boot, Spring MVC, Maven, Unit Testing.
                </p>
                <h3 className="text-xl font-bold mb-2">Projects</h3>
                <ul className="list-disc list-inside">
                    <li>Quiz app in React.js</li>
                    <li>Stopwatch interface in React.js</li>
                    <li>CRUD Operation of Task Management System</li>
                </ul>
                <h3 className="text-xl font-bold mb-2">Roles and Responsibility</h3>
                <ul className="list-disc list-inside">
                    <li>Complete all Sprints of Training Pre-recorded videos.</li>
                    <li>Complete all Sprints with a 60%+ score in each Sprint.</li>
                    <li>Working on a Project that satisfies all test cases for the projects.</li>
                    <li>Currently working on the Project -  <a
                        href="https://github.com/iamneo-production/94b83d45-2bad-4be6-a9a0-3f882028233d"
                        className="underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">
                        Online Learning Platform.
                    </a></li>
                </ul>
                <h2 className="text-2xl font-bold mb-2 my-5">2. Web Developer and Designer</h2>
                <p className="mb-2">
                    Fusion Technology, Mumbai (Mar 2021 – May 2021)
                </p>
                <p className="mb-4">
                    Tech Stack: HTML, CSS, JavaScript, Bootstrap, MySQL
                </p>
                <h3 className="text-xl font-bold mb-2">Roles and Responsibility</h3>
                <ul className="list-disc list-inside">
                    <li>Creating responsive websites and maintaining web content.</li>
                    <li>Create different logos and illustrations on Canva for clients.</li>
                    <li>Create responsive designs and layouts as per requirements.</li>
                </ul>
                {/* Footer if here  */}
                <Footer />
            </div>
        </div >
    );
}

export default Experience;
