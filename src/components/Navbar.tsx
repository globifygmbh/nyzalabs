"use client";

import { useState } from "react";
import NyzaLogo from "./NyzaLogo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <NyzaLogo width={100} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-black hover:text-purple transition-colors">HOME</a>
          <a href="#references" className="text-sm font-medium text-black hover:text-purple transition-colors">REFERENCES</a>
          <a href="#products" className="text-sm font-medium text-black hover:text-purple transition-colors">PRODUCTS</a>
          <a href="#marketing" className="text-sm font-medium text-black hover:text-purple transition-colors">MARKETING</a>
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full border-2 border-purple text-purple font-semibold text-sm hover:bg-purple hover:text-white transition-all"
        >
          CONTACT
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`w-6 h-0.5 bg-black transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-black transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-black transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <a href="#home" className="text-sm font-medium text-black" onClick={() => setMobileOpen(false)}>HOME</a>
          <a href="#references" className="text-sm font-medium text-black" onClick={() => setMobileOpen(false)}>REFERENCES</a>
          <a href="#products" className="text-sm font-medium text-black" onClick={() => setMobileOpen(false)}>PRODUCTS</a>
          <a href="#marketing" className="text-sm font-medium text-black" onClick={() => setMobileOpen(false)}>MARKETING</a>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border-2 border-purple text-purple font-semibold text-sm" onClick={() => setMobileOpen(false)}>CONTACT</a>
        </div>
      )}
    </nav>
  );
}
