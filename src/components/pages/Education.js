import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

function Education() {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-4xl my-10">
                <h1 class="text-3xl font-bold mb-4">Education</h1>
                <table class="min-w-full table-auto">
                    <thead class="text-left">
                        <tr>
                            <th class="py-2">Degree</th>
                            <th class="py-2">Institution</th>
                            <th class="py-2">CGPA/Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2">Bachelor of Technology in Computer Engineering</td>
                            <td class="py-2">Shri Vile Parle Kelavani Mandal's Institute of Technology, Dhule</td>
                            <td class="py-2">CGPA: 8.51</td>
                        </tr>
                        <tr>
                            <td class="py-2">Higher Secondary Junior College (12th)</td>
                            <td class="py-2">Art's Science and Commerce College, Chopda</td>
                            <td class="py-2">Percentage: 58.92%</td>
                        </tr>
                        <tr>
                            <td class="py-2">Secondary School (10th)</td>
                            <td class="py-2">Kastrurba Madhyamik Vidhyaaya, Chopda</td>
                            <td class="py-2">Percentage: 80.40%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Education;
