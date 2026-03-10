"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Course Library", href: "/courses", hasDropdown: true },
    { name: "Help", href: "/help", hasDropdown: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
               <GraduationCap className="text-white" size={24} />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white" />
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-xl font-bold text-navy tracking-tight leading-none">Cogniversity</span>
            <span className="text-[8px] text-muted font-medium uppercase tracking-tighter">The Future of AI Learning</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors flex items-center gap-1 group relative py-1 ${
                  isActive ? "text-primary" : "text-navy/70 hover:text-primary"
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className="group-hover:rotate-180 transition-transform"
                  />
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center">
          <button className="bg-secondary text-navy px-8 py-3 rounded-full text-sm font-bold shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95 transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 overflow-hidden md:hidden"
          >
            <div className="p-6 flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-lg font-bold flex items-center justify-between transition-colors ${
                      isActive ? "text-primary" : "text-navy"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={20} />}
                  </Link>
                );
              })}
              <button className="bg-secondary text-navy w-full py-4 rounded-2xl font-bold shadow-lg shadow-secondary/20">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
