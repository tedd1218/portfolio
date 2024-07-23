import React from "react"

import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () => {
    return (
    <section className={styles.container} id="hero">
        <div className={styles.content}>
            <h1 className={styles.title}>&lt;tedd_portfolio/&gt;</h1>
            <p className={styles.description}>
                Hello World! My name is Tedd Jung. I am an Electrical and Computer Engineering student at Carnegie Mellon University.
            </p>
            <a href="../assets/hero/tedd_resume.pdf" target="_blank" className={styles.resumeBtn}>
                Download Resume  
                <img className={styles.downloadBtn} 
                src={getImageUrl("hero/downloadBtn.svg")} 
                alt="download-button"
                />
            </a>
        </div>
    </section>);
}