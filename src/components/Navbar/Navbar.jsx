import React, {useState} from "react";
import {Link} from "react-scroll";
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <header className={styles.navbar}>
        {/* <a className={styles.title} href="/">
            &lt;TJ<span className={styles.dash}>/</span>&gt;
        </a> */}
        <a className={styles.title} href="/portfolio/">
            <img src={getImageUrl("nav/T_logo.svg")} alt="tedd-logo" className={styles.logo}></img>
        </a>
        <nav className={styles.menu}>
            <img className={styles.menuBtn} 
                src={
                    menuOpen 
                        ? getImageUrl("nav/closeIcon.svg")
                        : getImageUrl("nav/menuIcon.svg")
                } 
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <div className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <Link to="about" spy={true} smooth={true} offset={-150}>ABOUT</Link>
                <Link to="experience" spy={true} smooth={true} offset={-150}>EXPERIENCE</Link>
                <Link to="projects" spy={true} smooth={true} offset={-150}>PROJECTS</Link>
                <Link to="art" spy={true} smooth={true} offset={-130}>ART</Link>
                <Link to="contact" spy={true} smooth={true} offset={-150}>CONTACT</Link>
            </div>
        </nav>
    </header>);
};
