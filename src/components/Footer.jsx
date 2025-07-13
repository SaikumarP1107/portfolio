import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-400 text-cyan-900 py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left - Logo or Name */}
        <div className="text-xl font-semibold mb-4 md:mb-0">
          © 2025 Saikumar Pendyala
        </div>

        {/* Center - Navigation */}
        <ul className="flex space-x-6 mb-4 md:mb-0">
          <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>

        {/* Right - Social Media */}
        <div className="flex space-x-5">
          <a
            href="https://github.com/SaikumarP1107"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-600 transition"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/saikumar-pendyala/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:pendyalasaikumar1107@gmail.com"
            className="hover:text-cyan-600 transition"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
