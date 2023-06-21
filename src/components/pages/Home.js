import React from 'react';
// import { useNavigate } from 'react-router-dom';

import Footer from '../common/Footer';
import backgroundImage from "../image/Background4.jpg"
// import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import profileImage from '../image/Photo.jpg';
import { FiArrowDownCircle } from "react-icons/fi";



function Home() {

    return (
        <div className="bg-scroll"
            style={{ backgroundImage: `url(${backgroundImage})` }}>

            {/* <div className="my-8 ">
                <h2 className="text-2xl font-bold">Personal Information</h2>
                <p>Name: Shubham Ramesh Patil</p>
                <p>B. Tech Computer Engineering</p>
                <p>Java SE 8 Certified</p>
                <p>Phone: +91 7775093424</p>
                <p>Email: shubhu244248@gmail.com</p>
                <p>LinkedIn: [LinkedIn Profile Link]</p>
                <p>HackerRank: [HackerRank Profile Link]</p>
                <p>Date of Birth: 07 Nov 2000</p>
                <p>Marital Status: Unmarried</p>
                <p>GitHub: [GitHub Profile Link]</p>
                <p>Location: Pune, Maharashtra, India</p>
            </div>

            <div className="my-8">
                <h2 className="text-2xl font-bold">Objective</h2>
                <p>
                    Enthusiastic, highly motivated Computer Engineering student with an attitude of learning new technologies. I apply technical and non-technical skills to enhance my problem-solving and critical-thinking abilities, take initiative, and seek out new challenges. I aim to upskill my understanding and proficiency in new trends in the IT sector, leading to the growth of the organization I work with and broadening my horizons.
                </p>
            </div>

            <div className="my-8">
                <h2 className="text-2xl font-bold">Education</h2>
                <p>2019 – 2023</p>
                <p>Bachelor of Technology in Computer Engineering</p>
                <p>Shri Vile Parle Kelavani Mandal's Institute of Technology, Dhule</p>
                <p>CGPA: 8.51</p>
            </div> */}
            <Navbar />
            <div className="mx-auto max-w-4xl">
                <div className="text-center my-4">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Welcome to my portfolio!
                    </h1>
                </div>
                <div className="flex items-center justify-center my-8">
                    <div className="flex flex-col items-start w-1/2">
                        <h2 className="text-2xl text-gray-900 font-bold">Shubham Ramesh Patil</h2>
                        <p className="text-lg text-gray-600">B. Tech Computer Engineering</p>
                        <p className="text-lg text-gray-600">Java SE 8 Certified</p>
                        <p className="text-lg text-gray-600">Aspiring Full Stack Developer</p>
                        <p className="text-lg text-gray-600">Pune, Maharashtra, India</p>
                        <a
                            download="Shubham_Patil_Resume.pdf"
                            href="/files/Shubham_Patil_Resume.pdf"
                            className="text-gray-800 font-bold border border-gray-800 dark:hover:text-indigo-400 rounded bg-transparent hover:bg-gray-50 hover:text-gray-800 flex justify-center items-center w-40 h-10 my-5"
                            aria-label="Download Resume">
                            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                            <span className="text-sm sm:text-lg font-general-medium duration-100">
                                Download CV
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-col items-center w-1/2">
                        <img
                            className="w-40 h-38 object-cover"
                            src={profileImage}
                            alt="Profile picture of Shubham Ramesh Patil"
                        />

                    </div>

                </div>
                <div className="my-4">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl my-3">About Me</h2>
                    <blockquote className="text-lg text-gray-600 indent-8">
                        I am Shubham Ramesh Patil, a highly motivated and enthusiastic Computer Engineering student with a passion for learning Java Full Stack Deveopment. I hold a Bachelor of Technology degree in Computer Engineering from Shri Vile Parle Kelavani Mandal's Institute of Technology in Dhule, India. I am dedicated to enhancing my problem-solving and critical-thinking abilities by applying both technical and non-technical skills. I always seek out new challenges and strive to stay updated with the latest trends in the IT sector. My objective is to contribute to the growth of the organization I work with while expanding my knowledge and skills.
                    </blockquote>
                </div>
            </div>

            {/* Footer if here */}
            < Footer />
        </div >



    );
}

export default Home;
