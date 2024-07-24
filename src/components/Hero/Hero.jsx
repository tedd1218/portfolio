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
    <section className={styles.container} id="hero">
        <div className={styles.content}>
            <motion.h1 className={styles.title} 
            initial= {{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>&lt;tedd_portfolio<span className={styles.dash}>/</span>&gt;</motion.h1>
            <motion.p className={styles.description}
            initial= {{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
                Hello World! My name is Tedd Jung. I am an Electrical and Computer Engineering student at Carnegie Mellon University.
            </motion.p>
            <motion.a href={getImageUrl("hero/tedd_resume.pdf")} target="_blank" className={styles.resumeBtn} 
            initial= {{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.25, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            whileTap={{ scale: 0.9}}>
                Download Resume  
                <img className={styles.downloadBtn}
                src={getImageUrl("hero/downloadBtn.svg")} 
                alt="download-button"
                />
            </motion.a>
        </div>
    </section>
    );
}