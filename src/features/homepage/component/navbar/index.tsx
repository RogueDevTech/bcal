"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
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
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navLinks = [
    { href: "#our-projects", label: "OUR PROJECTS" },
    { href: "#about-us", label: "ABOUT US" },
    { href: "#customers", label: "CONTACT US" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbar_nav}>
        <Link href={"/"}>
          <h3 className={styles.logo}>BCAL</h3>
        </Link>

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
                className={activeSection === link.href ? styles.active : ""}
              >
                <Link
                  href={link.href}
                  scroll={false}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </Link>
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
