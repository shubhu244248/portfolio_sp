import React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

function Projects() {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-5xl my-10">
                <h1 className="text-3xl font-bold mb-4">Projects</h1>
                <h2 className="text-2xl font-bold mb-2">
                    <a
                        href="https://github.com/shubhu244248/Gesture_Recognition_Using_Raspberry_Pi"
                        target="__blank"
                        className="underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">
                        Gesture to Text Conversion Using IoT
                    </a></h2>
                <p className="mb-2 indent-8">
                    Standard Sign Language Recognition
                </p>
                <p className="mb-4 indent-8">
                    Gestures and standard Sign languages were recognized using OpenCV and Mediapipe library of ML recognition algorithm and they were < br /> implemented on the Raspberry Pi's Raspbian OS.
                </p>

                <h2 className="text-2xl font-bold mb-2">
                    <a
                        href="https://github.com/shubhu244248/Campus_Recuritment_Prediction_ML_Project"
                        target="__blank"
                        className="underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">
                        Campus Recruitment Analysis
                    </a></h2>
                <p className="mb-2 indent-8">
                    Prediction using Regression Algorithm
                </p>
                <p className="mb-4 indent-8">
                    Prediction whether the students in the dataset are eligible for campus recruitment using various machine learning regression algorithms.
                </p>
                <h2 className="text-2xl font-bold mb-2">Hostel Management</h2>
                <p className="mb-2 indent-8">
                    Allocating Hostel Room
                </p>
                <p className="mb-4 indent-8">
                    CRUD Operation on database, created using HTML, CSS, and JavaScript for frontend designing, and PHP was used to connect the frontend and backend of the webpage with the MySQL database.
                </p>
                {/* Footer if here  */}
                <Footer />
            </div>
        </div >
    );
}

export default Projects;
