import React, {useState, useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./Art.module.css";
import { getImageUrl } from "../../utils"

export const Art = () => {
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
    <motion.section className={styles.container} id="art"
        initial= {{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25}}>
        <h1 className={styles.title}>&lt;art/&gt;</h1>
        <div className={styles.content1}>
            <div className={styles.art1}>
                <img src={getImageUrl("art/birthplace_art.svg")} alt="birthplace-artwork" className={styles.artwork1}>
                </img>
                <div className={styles.description}>
                    <p className={styles.name}>
                        Birthplace
                    </p>
                    <p className={styles.type}>
                        Mixed Media
                    </p>
                </div>
            </div>
            <div className={styles.art2}>
                <img src={getImageUrl("art/incheon_art.svg")} alt="incheon-artwork" className={styles.artwork2}>
                </img>
                <div className={styles.description}>
                    <p className={styles.name}>
                        Incheon
                    </p>
                    <p className={styles.type}>
                        Acrylic and Oil Paint
                    </p>
                </div>
            </div>
            <div className={styles.art3}>
                <img src={getImageUrl("art/busan_art.svg")} alt="busan-artwork" className={styles.artwork3}>
                </img>
                <div className={styles.description}>
                    <p className={styles.name}>
                        Busan
                    </p>
                    <p className={styles.type}>
                        Acrylic and Oil Paint
                    </p>
                </div>
            </div>
            <div className={styles.art4}>
                <img src={getImageUrl("art/precious_art.svg")} alt="precious-artwork" className={styles.artwork4}>
                </img>
                <div className={styles.description}>
                    <p className={styles.name}>
                        Her Precious
                    </p>
                    <p className={styles.type}>
                        Watercolor and Colored Pencil
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.content2}>
            <div className={styles.art5}>
                <img src={getImageUrl("art/passerby_art.svg")} alt="passerby-artwork" className={styles.artwork5}>
                </img>
                <div className={styles.description1}>
                    <p className={styles.name1}>
                        Passerby of Reflected
                    </p>
                    <p className={styles.stuff1}>
                        Ignorance
                    </p>
                    <p className={styles.type1}>
                        Colored Pencil
                    </p>
                </div>
            </div>
            <div className={styles.art6}>
                <img src={getImageUrl("art/alley_art.svg")} alt="alley-artwork" className={styles.artwork6}>
                </img>
                <div className={styles.description}>
                    <p className={styles.name}>
                        Alley
                    </p>
                    <p className={styles.type}>
                        Printmaking
                    </p>
                </div>
            </div>
            <div className={styles.art7}>
                <img src={getImageUrl("art/plastic_art.svg")} alt="plastic-artwork" className={styles.artwork7}>
                </img>
                <div className={styles.description}>
                    <p className={styles.name}>
                        My Plastic Friend
                    </p>
                    <p className={styles.type}>
                        Acrylic and Oil Paint
                    </p>
                </div>
            </div>
            <div className={styles.art8}>
                <img src={getImageUrl("art/solitude_art.svg")} alt="solitude-artwork" className={styles.artwork8}>
                </img>
                <div className={styles.description}>
                    <p className={styles.name}>
                        Solitude in Vignette
                    </p>
                    <p className={styles.type}>
                        Graphite Drawing Pencil
                    </p>
                </div>
            </div>
        </div>
    </motion.section>);
};