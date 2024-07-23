import React, {useState, useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./Contact.module.css";
import {getImageUrl} from "../../utils";

export const Contact = () => {
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
    <motion.section className={styles.container} id="contact"
        initial= {{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25}}>
        <h1 className={styles.title}>&lt;contact/&gt;</h1>
        <div className={styles.content}>
            <img src={getImageUrl("contact/cmupic.svg")} alt="cmu-picture" className={styles.cmupic}>
            </img>
            <div className={styles.contactdiv}>
                <form className={styles.contactform}>
                    <p className={styles.contacttext}>
                        CONTACT
                    </p>
                    <p className={styles.touchtext}>
                        GET IN TOUCH
                    </p>
                    <div className={styles.group}>
                        <div className={styles.firstname}>
                            <input type="text" className={styles.field} placeholder="First Name *" required/>
                        </div>
                        <div className={styles.lastname}>
                            <input type="text" className={styles.field} placeholder="Last Name *" required/>
                        </div>
                    </div>
                    <div className={styles.email}>
                        <input type="text" className={styles.emailfield} placeholder="Email *" required/>
                    </div>
                    <div className={styles.subject}>
                        <input type="text" className={styles.subjectfield} placeholder="Subject *" required/>
                    </div>
                    <div className={styles.description}>
                        <textarea type="text" className={styles.descriptionfield} placeholder="Description *" required/>
                    </div>
                    <button type="submit" value="submit" className={styles.submit}>SUBMIT</button>
                </form>
            </div>
        </div>
    </motion.section>);
}