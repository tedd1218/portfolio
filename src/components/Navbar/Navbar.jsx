import React, {useState} from "react";

import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            &lt;TJ/&gt;
        </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
                src={
                    menuOpen 
                        ? getImageUrl("nav/closeIcon.svg")
                        : getImageUrl("nav/menuIcon.svg")
                } 
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#about">ABOUT</a>
                </li>
                <li>
                    <a href="#experience">EXPERIENCE</a>
                </li>
                <li>
                    <a href="#projects">PROJECTS</a>
                </li>
                <li>
                    <a href="#art">ART</a>
                </li>
                <li>
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </div>
    </nav>);
};
