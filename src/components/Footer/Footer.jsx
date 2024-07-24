import React, {useState, useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import styles from "./Footer.module.css"
import {getImageUrl} from "../../utils";

export const Footer = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();

    useEffect(() =>  {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
    <motion.section className={styles.container} id="footer" 
        initial= {{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}>
        {/* <h1 className={styles.title}>&lt;TJ<span className={styles.dash}>/</span>&gt;</h1> */}
        <a className={styles.title} href="/">
            <img src={getImageUrl("nav/T_logo.svg")} alt="tedd-logo" className={styles.logo}></img>
        </a>
        <div className={styles.content}>
            <p className={styles.name}>
                MADE BY TEDD JUNG
            </p>
            <div className={styles.line}>
                <p className={styles.copyright}>
                    © 2024
                </p>
                <p className={styles.rights}>
                    ALL RIGHTS RESERVED
                </p>
            </div>
        </div>
    </motion.section>);
};
