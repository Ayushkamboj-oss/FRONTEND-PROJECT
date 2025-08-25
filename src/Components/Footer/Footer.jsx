import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-6 px-4 shadow-lg fixed bottom-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-center space-x-8 text-lg font-medium">
        <Link to="contactus" className="hover:underline hover:text-yellow-300 transition duration-300">
          Contact Us
        </Link>
        <Link to="github" className="hover:underline hover:text-yellow-300 transition duration-300">
          GitHub
        </Link>
      </div>
    </footer>
  );
}

export default Footer;