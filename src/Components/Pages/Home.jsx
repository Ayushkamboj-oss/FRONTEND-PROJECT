import React from "react";
import cvImage from './CV.png'; // Make sure CV.png is in your src folder or adjust the path

function Home() {
    return (
        <>
            <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    🚀 Looking for a Frontend Development Internship
                </h1>

                <p className="text-gray-700 leading-relaxed mb-4">
                    Hi everyone! I’m <span className="font-semibold">Ayush Kamboj</span>, a BCA graduate passionate about building responsive, accessible, and recruiter-ready UIs using <span className="font-medium">React.js</span>, <span className="font-medium">Redux Toolkit</span>, and <span className="font-medium">Tailwind CSS</span>.
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>✅ Modular React components with dynamic form logic</li>
                    <li>✅ Clean Git workflows and secure deployment setups</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                    I’m actively seeking internship opportunities where I can contribute, learn from experienced developers, and grow in a collaborative environment.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                    If you know of any openings or would like to check out my work, feel free to connect or drop a message. Let’s build something impactful together!
                </p>

                <div className="text-gray-700 space-y-1 mb-4">
                    <p>📬 <span className="font-medium">Email:</span> ayuhskamboj3@gmail.com</p>
                    <p>
                        📎 <span className="font-medium">GitHub:</span>{" "}
                        <a
                            href="https://github.com/Ayushkamboj-oss"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            github.com/Ayushkamboj-oss
                        </a>
                    </p>
                </div>

                <div className="mt-2 text-sm text-gray-500">
                    #ReactJS #FrontendInternship #TailwindCSS #OpenToWork #WebDevelopment
                </div>
            </div>
<div className="flex justify-center mt-8">
  <img
    src={cvImage}
    alt="My CV Preview"
    className="w-full max-w-2xl rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
  />
</div>
        </>
    );
}

export default Home;