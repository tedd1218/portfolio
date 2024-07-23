import React, {useState} from "react";
import {Link} from "react-scroll";
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
                    <Link to="about" spy={true} smooth={true} offset={-150}>ABOUT</Link>
                </li>
                <li>
                    <Link to="experience" spy={true} smooth={true} offset={-150}>EXPERIENCE</Link>
                </li>
                <li>
                    <Link to="projects" spy={true} smooth={true} offset={-150}>PROJECTS</Link>
                </li>
                <li>
                    <Link to="art" spy={true} smooth={true} offset={-150}>ART</Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} offset={-150}>CONTACT</Link>
                </li>
            </ul>
        </div>
    </nav>);
};
