import React from "react"
import styles from "./About.module.css";
import { getImageUrl } from "../../utils"

export const About = () => {
    return (
    <section className={styles.container} id="about">
        <h1 className={styles.title}>&lt;about/&gt;</h1>
        <p className={styles.para}>
            I was born and raised in Johns Creek, a suburb just north of Atlanta. 
            From an early age I was interested in building and designing, starting from LEGOs and then slowly moving into visual art. 
            In high school, I developed a passion in software engineering, specifically web development, 
            while also holding on to my desire to build with my hands.
        </p>
        <p className={styles.para}>
            The beauty of an electrical and computer engineering degree lies in its 
            seemingly interdisciplinary nature,as I have the opportunity to explore 
            computer science concepts while also keeping in touch with the more practical 
            electrical engineering. Because of my vast knowledge in both the computer and 
            electrical world, I believe I will be a useful asset in the workforce.
        </p>
        <p className={styles.para}>
            Below is my GitHub contribution chart, showing my dedication to the discipline.
        </p>
        <div className={styles.content}>
            <img src={getImageUrl("about/github.png")} alt="github-chart" className={styles.github}>
            </img>
        </div>
        <p className={styles.para}>
            In my free time, I enjoy watching football, specifically my hometown 
            team the Atlanta Falcons. I also love strumming my guitar and finding 
            new music to play on repeat.
        </p>
    </section>);
};