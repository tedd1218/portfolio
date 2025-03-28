import React, {useState, useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils"

export const About = () => {
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
    <section className={styles.container} id="about">
        <motion.div className={styles.title} 
        initial= {{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}>&lt;about<span className={styles.dash}>/</span>&gt;</motion.div>
        <motion.p className={styles.para}
        initial= {{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}>
            I was born and raised in Johns Creek, a suburb just north of Atlanta. 
            From an early age I was interested in building and designing, starting from LEGOs and then slowly moving into visual art. 
            In high school, I developed a passion in software engineering, specifically web development, 
            while also holding on to my desire to build with my hands.
        </motion.p>
        <motion.p className={styles.para}
        initial= {{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}>
            The beauty of an electrical and computer engineering degree lies in its 
            seemingly interdisciplinary nature,as I have the opportunity to explore 
            computer science concepts while also keeping in touch with the more practical 
            electrical engineering. Because of my vast knowledge in both the computer and 
            electrical world, I believe I will be a useful asset in the workforce.
        </motion.p>
        <motion.p className={styles.para}
        initial= {{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}>
            Below is my GitHub contribution chart, showing my dedication to the discipline.
        </motion.p>
        <motion.div className={styles.content}
        initial= {{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}>
            <img src={getImageUrl("about/github.png")} alt="github-chart" className={styles.github}>
            </img>
        </motion.div>
        <motion.p className={styles.para}
        initial= {{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}>
            In my free time, I enjoy watching football, specifically my hometown 
            team the Atlanta Falcons. I also love strumming my guitar and finding 
            new music to play on repeat.
        </motion.p>
    </section>);
};