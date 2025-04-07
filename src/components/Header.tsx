"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";
import NameTypingEffect from "@/components/NameTypingEffect";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-background shadow-strong z-50 h-16 flex items-center px-6">
      <div className="flex items-center justify-between w-full">

        {/* À gauche : le nom animé */}
        <Link href="/" className="text-secondary hover:text-secondary-hover transition hidden md:block">
          <NameTypingEffect />
        </Link>

        {/* À droite : nav + icônes */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <Link
                href="/about"
                className="text-secondary hover:text-secondary-hover transition"
            >
              About
            </Link>
            <Link
                href="/projects"
                className="text-secondary hover:text-secondary-hover transition"
            >
              Projects
            </Link>
          </nav>

          {/* Icônes à droite */}
          <div className="flex items-center space-x-4">
            <ThemeToggleButton />

            {/* Bouton Hamburger pour mobile */}
            <button
                className="md:hidden focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
              >
                {isOpen ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile sous le header */}
      <div
        className={`fixed top-16 left-0 w-full bg-secondary origin-top transition-all duration-500 ${
          isOpen
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none delay-200"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link
            href="/"
            className="text-secondary hover:text-secondary-hover transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-secondary hover:text-secondary-hover transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-secondary hover:text-secondary-hover transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}
