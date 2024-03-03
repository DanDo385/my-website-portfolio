// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-green-400 text-slate-700">
      <div className="navbar-start">
        <span className="text-lg font-bold uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>Dan Magro Blockchain Developer</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/carousel">Certificates</Link></li>
          <li><Link href="/education">Education</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/resume">Resume</Link></li>
        </ul>
      </div>
      {/* Navbar End for potential future use */}
      <div className="navbar-end">
        {/* Additional elements can go here */}
      </div>
    </div>
  );
};

export default Navbar;
