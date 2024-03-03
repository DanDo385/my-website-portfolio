// src/components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center bg-green-400 text-slate-700">
      <div className="flex justify-between items-center p-4 lg:p-0">
        <span className="text-lg font-bold uppercase" style={{ fontFamily: 'Oswald, sans-serif' }}>
          Dan Magro Blockchain Developer
        </span>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden p-2 text-slate-700"
        >
          {isSidebarOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <div className={`lg:flex ${isSidebarOpen ? 'flex' : 'hidden'} flex-col lg:flex-row lg:items-center`}>
        <ul className="menu menu-horizontal lg:menu-vertical p-0">
          <li>
            <Link href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/certificates">
              Certificates
            </Link>
          </li>
          <li>
            <Link href="/education">
              Education
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
