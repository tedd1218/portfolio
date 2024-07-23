import React, {useState} from "react";

import styles from "./Footer.module.css"
import {getImageUrl} from "../../utils";

export const Footer = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <section className={styles.navbar} id="footer">
        <h1 className={styles.title}>&lt;TJ/&gt;</h1>
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
    </section>);
};
