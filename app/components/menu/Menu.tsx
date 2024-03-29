"use client";

import { useRef, useState } from "react";
import styles from "./menu.module.css";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/work", label: "Work" },
  { path: "/lab", label: "Lab" },
  { path: "/contact", label: "Contact" },
];

const Menu = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="menu-container" ref={container}>
      <div>
        <div>menu container</div>
      </div>
    </div>
  );
};

export default Menu;
