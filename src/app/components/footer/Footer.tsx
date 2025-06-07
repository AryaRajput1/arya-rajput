// components/Footer.jsx
import {
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Arya Rajput</h2>
          <p className="text-sm mt-1"> — Frontend Developer & UI Engineer</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center space-x-6 text-sm">
          {/* <a href="#blogs" className="hover:text-white transition">Blogs</a> */}
          <Link href="#projects" className="hover:text-white transition">Projects</Link>
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#experience" className="hover:text-white transition">Experience</Link>
          <Link href="#education" className="hover:text-white transition">Education</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/AryaRajput1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/aryarajput" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Linkedin size={20} />
          </a>
          <a href="mailto:arya04944@gmail.com" className="hover:text-white transition">
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-xs text-gray-300 border-t border-zinc-700 pt-4">
        © {new Date().getFullYear()} Arya Rajput — All rights reserved. Built with 💻 & ☕.
      </div>
    </footer>
  );
}
