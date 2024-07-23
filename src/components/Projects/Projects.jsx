import React from "react"
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils"

export const Projects = () => {
    return (
    <section className={styles.container} id="projects">
        <h1 className={styles.title}>&lt;projects/&gt;</h1>
        <div className={styles.content}>
            <div className={styles.card1}>
                <img src={getImageUrl("projects/laptop1.svg")} alt="chipcity-laptop" className={styles.laptop1}>
                </img>
                <div className={styles.description}>
                    <p className={styles.name}>
                        Chip City
                    </p>
                    <p className={styles.stuff}>
                        Multiplayer Texas Hold'em Poker Game
                    </p>
                    <p className={styles.github1}>
                        GitHub &gt;
                    </p>
                </div>
            </div>
            <div className={styles.card2}>
                <img src={getImageUrl("projects/laptop2.svg")} alt="blog-laptop" className={styles.laptop2}>
                </img>
                <div className={styles.description}>
                    <p className={styles.name}>
                        Blog Master
                    </p>
                    <p className={styles.stuff}>
                        Social Media Website
                    </p>
                    <p className={styles.github2}>
                        GitHub &gt;
                    </p>
                </div>
            </div>
            <div className={styles.card3}>
                <img src={getImageUrl("projects/laptop3.svg")} alt="football-laptop" className={styles.laptop3}>
                </img>
                <div className={styles.description}>
                    <p className={styles.name}>
                        Fantasy Football Bot
                    </p>
                    <p className={styles.stuff}>
                        For Setting Up Fantasy Football Lineups
                    </p>
                    <p className={styles.github3}>
                        GitHub &gt;
                    </p>
                </div>
            </div>
        </div>
    </section>);
};