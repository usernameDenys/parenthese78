"use client";

import { useEffect, useState } from "react";
import { Container } from "./container";
import { navItems } from "./navItems";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.webp";

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
    <>
      <header className="text-text fixed top-0 w-full z-50 bg-white/92 backdrop-blur-md">
        <Container>
          <div className="flex items-center justify-between py-1">
            <Link href="/" role="link" aria-label="Retour à l'accueil">
              <Image
                src={logo}
                alt="Parenthèse"
                height={64}
                className="h-16 w-auto"
              />
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
              href="/rdv"
              aria-label="Prendre rendez-vous en ligne"
              role="link"
              className="hidden md:flex items-center justify-center px-6 h-12 bg-primary text-secondary rounded-full shadow-m hover:bg-white hover:border hover:border-sage hover:text-text transition-colors duration-200">
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
        </Container>
      </header>

      {/* Mobile Menu — outside <header> to avoid backdrop-filter containing block */}
      <div
        className={`md:hidden fixed inset-0 top-18 bg-primary z-40 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileMenuOpen}>
        <nav
          className="flex flex-col items-center pt-12 p-6 space-y-8"
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
            href="/rdv"
            aria-label="Prendre rendez-vous en ligne"
            role="link"
            className="mt-4 flex items-center justify-center px-6 h-12 border bg-white text-primary rounded-full hover:bg-primary hover:text-secondary"
            onClick={() => setMobileMenuOpen(false)}>
            Prendre rendez-vous
          </Link>
        </nav>
      </div>
    </>
  );
}
