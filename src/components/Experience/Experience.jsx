import React from "react"
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils"

export const Experience = () => {
    return (
    <section className={styles.container} id="experience">
        <h1 className={styles.title}>&lt;experience/&gt;</h1>
        <div className={styles.content}>
            <div className={styles.group}>
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
            </div>
            <div className={styles.group}>
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
            </div>
            <div className={styles.group}>
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
            </div>
            <div className={styles.group}>
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
            </div>
        </div>
    </section>);
};