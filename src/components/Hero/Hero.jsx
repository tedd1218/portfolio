import React, { useEffect, useRef } from "react"

import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";
import { motion, useInView, useAnimation } from "framer-motion";

export const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();

    useEffect(() =>  {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
    <motion.section className={styles.container} id="hero"
        initial= {{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25}}>
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
    </motion.section>
    );
}