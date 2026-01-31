"use client";

import { useEffect, useState } from "react";
import { Container } from "./container";
import { navItems } from "./navItems";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-accent text-text  fixed top-0 md:static  w-full z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            role="link"
            aria-label="Logo"
            className="text-2xl font-bold">
            Parenthese
          </Link>

          {/* Desktop */}
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.ariaLabel}
                role="link"
                className="relative font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 
                after:w-full after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
                hover:after:scale-x-100 focus-visible:after:scale-x-100">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="rdv"
            aria-label="Prendre rendez-vous en ligne"
            role="link"
            className="hidden md:flex items-center justify-center px-6 h-12 bg-white text-primary rounded-full  hover:bg-primary hover:text-secondary shadow-m">
            Prendre rendez-vous
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-text transition-transform ${
                  mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-text transition-opacity ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-text transition-transform ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 top-18 bg-primary z-40 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <nav
            className="flex flex-col items-center p-6 space-y-8"
            aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xl text-secondary"
                onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link
              href="rdv"
              aria-label="Prendre rendez-vous en ligne"
              role="link"
              className="mt-4 flex items-center justify-center px-6 h-12 border bg-white text-primary rounded-full  hover:bg-primary hover:text-secondary">
              Prendre rendez-vous
            </Link>
          </nav>
        </div>

        {/* Overlay */}
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed bg-primary inset-0 -z-10"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </Container>
    </header>
  );
}
