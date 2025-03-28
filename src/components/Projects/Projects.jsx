import React, { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils"

export const Projects = () => {
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
    <section className={styles.container} id="projects">
        <motion.div className={styles.title} 
        initial= {{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25}}>&lt;projects<span className={styles.dash}>/</span>&gt;</motion.div>
        <div className={styles.content}>
            <motion.div className={styles.card1}
            initial= {{ x: "-6vh", opacity: 0, y: 75 }}
            whileInView={{ x: 0, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.60 }}>
                <img src={getImageUrl("projects/laptop1.svg")} alt="chipcity-laptop" className={styles.laptop1}>
                </img>
                <div className={styles.description}>
                    <p className={styles.name}>
                        Chip City
                    </p>
                    <p className={styles.stuff}>
                        Multiplayer Texas Hold'em Poker Game
                    </p>
                    <motion.div className={styles.chipcitygithub} transition={{ duration: 0.25, delay: 0.25, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.2, x: 20 }}
                        whileTap={{ scale: 0.9, x: -10}}>
                        <a href="https://github.com/tedd1218/chipcity" target="_blank" className={styles.github1}>
                            GitHub &gt;
                        </a>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div className={styles.card2}
            initial= {{ x:  "-6vh", opacity: 0, y: 75 }}
            whileInView={{ x: 0, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.40 }}>
                <img src={getImageUrl("projects/laptop2.svg")} alt="blog-laptop" className={styles.laptop2}>
                </img>
                <div className={styles.description}>
                    <p className={styles.name}>
                        Blog Master
                    </p>
                    <p className={styles.stuff}>
                        Social Media Website
                    </p>
                    {/* <p className={styles.github2}>
                        GitHub &gt;
                    </p> */}
                </div>
            </motion.div>
            <motion.div className={styles.card3}
            initial= {{ x:  "-6vh", opacity: 0, y: 75 }}
            whileInView={{ x: 0, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.20 }}>
                <img src={getImageUrl("projects/laptop3.svg")} alt="football-laptop" className={styles.laptop3}>
                </img>
                <div className={styles.description}>
                    <p className={styles.name}>
                        Fantasy Football Bot
                    </p>
                    <p className={styles.stuff}>
                        For Setting Up Fantasy Football Lineups
                    </p>
                    <motion.div className={styles.fantasygithub} transition={{ duration: 0.25, delay: 0.25, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.2, x: 20 }}
                        whileTap={{ scale: 0.9, x: -10}}>
                        <a href="https://github.com/tedd1218/FantasyFootballBot" target="_blank" className={styles.github3}>
                            GitHub &gt;
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </section>);
};