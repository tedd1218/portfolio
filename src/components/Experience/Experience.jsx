import React, {useState, useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils"

export const Experience = () => {
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
    <section className={styles.container} id="experience">
        <motion.div className={styles.title} 
        initial= {{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}>&lt;experience<span className={styles.dash}>/</span>&gt;</motion.div>
        <div className={styles.content}>
            <motion.div className={styles.group}
            initial= {{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}>
                <img src={getImageUrl("experience/astro.svg")} alt="astrobotic-logo" className={styles.astro}>
                </img>
                <div className={styles.card}>
                    <p className={styles.description}>
                        Electrical Integration & Test Engineer Intern at
                        <span className={styles.logo}>
                            &nbsp;Astrobotic
                        </span>
                    </p>
                    <p className={styles.date}>
                        June 2024 - August 2024
                    </p>
                </div>  
            </motion.div>
            <motion.div className={styles.group}
            initial= {{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}>
                <img src={getImageUrl("experience/cmr.svg")} alt="cmr-logo" className={styles.cmr}>
                </img>
                <div className={styles.card}>
                    <p className={styles.description}>
                        Firmware Engineer at
                        <span className={styles.logo}>
                            &nbsp;Carnegie Mellon Racing
                        </span>
                    </p>
                    <p className={styles.date}>
                        February 2023 - Present
                    </p>
                </div>
            </motion.div>
            <motion.div className={styles.group}
            initial= {{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}>
                <img src={getImageUrl("experience/nasa.svg")} alt="nasa-logo" className={styles.nasa}>
                </img>
                <div className={styles.card}>
                    <p className={styles.description}>
                        Apprentice at
                        <span className={styles.logo}>
                            &nbsp;NASA L’Space Mission Concept Academy
                        </span>
                    </p>
                    <p className={styles.date}>
                        May 2024 - August 2024
                    </p>
                </div>
            </motion.div>
            <motion.div className={styles.group}
            initial= {{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}>
                <img src={getImageUrl("experience/rbi.svg")} alt="rbi-logo" className={styles.rbi}>
                </img>
                <div className={styles.card}>
                    <p className={styles.description}>
                        Research Assistant at
                        <span className={styles.logo}>
                            &nbsp;MoonRanger&nbsp;
                        </span>
                        and
                        <span className={styles.logo}>
                            &nbsp;PitMAGIC
                        </span>
                    </p>
                    <p className={styles.date}>
                        June 2024 - August 2024
                    </p>
                </div>
            </motion.div>
        </div>
    </section>);
};