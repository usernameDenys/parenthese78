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
    <header className="bg-primary sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold">
            Parenthese
          </Link>

          {/* Desktop */}
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="rdv"
            className="hidden md:block px-6 py-2 bg-white text-primary rounded-lg hover:bg-opacity-90 transition-colors">
            Prendre RDV
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-transform ${
                  mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-opacity ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-transform ${
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
                className="text-xl hover:opacity-80 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link
              href="rdv"
              className="mt-4 px-6 py-3 bg-white text-primary rounded-lg hover:bg-opacity-90 transition-colors">
              Prendre RDV
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
