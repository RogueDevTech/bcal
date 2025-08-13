"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 533) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/our-projects", label: "OUR PROJECTS" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/customers", label: "CONTACT US" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbar_nav}>
        <h3 className={styles.logo}>BCAL</h3>
        {!menuOpen && (
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        )}
        <div className={`${styles.route} ${menuOpen ? styles.open : ""}`}>
          {menuOpen && (
            <button
              className={styles.close}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          )}
          <ul className={styles.navLink}>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={pathname === link.href ? styles.active : ""}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${styles.menu_backdrop} ${menuOpen ? styles.visible : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
