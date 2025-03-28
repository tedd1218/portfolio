import React, {useState, useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "./Contact.module.css";
import {getImageUrl} from "../../utils";
import emailjs from '@emailjs/browser';

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

    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('tedd_portfolio', 'template_m4orab2', form.current, {
            publicKey: 't-eLGFhmG5jilC3LE',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            setIsSubmitted(true);
            // document.getElementsByClassName(`${styles.contactform}`).dangerouslySetInnerHTML = "";
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
    <section className={styles.container} id="contact">
        <motion.h1 className={styles.title} 
        initial= {{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}>&lt;contact<span className={styles.dash}>/</span>&gt;</motion.h1>
        <div className={styles.content}>
            <motion.img src={getImageUrl("contact/cmupic.svg")} alt="cmu-picture" className={styles.cmupic}
            initial= {{ x: -300, opacity: 0, y: 75 }}
            whileInView={{ x: 0, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}>
            </motion.img>
            <motion.div className={styles.contactdiv}
            initial= {{ x: 300, opacity: 0, y: 75 }}
            whileInView={{ x: 0, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}>
                {!isSubmitted && (
                    <form className={styles.contactform} ref={form} onSubmit={sendEmail}>
                        <p className={styles.contacttext}>
                            CONTACT
                        </p>
                        <p className={styles.touchtext}>
                            GET IN TOUCH
                        </p>
                        <div className={styles.group}>
                            <div className={styles.firstname}>
                                <input type="text" className={styles.field} placeholder="First Name *" name= "first_name" required/>
                            </div>
                            <div className={styles.lastname}>
                                <input type="text" className={styles.field} placeholder="Last Name *" name= "last_name" required/>
                            </div>
                        </div>
                        <div className={styles.email}>
                            <input type="text" className={styles.emailfield} placeholder="Email *" required/>
                        </div>
                        <div className={styles.subject}>
                            <input type="text" className={styles.subjectfield} placeholder="Subject *" name= "subject" required/>
                        </div>
                        <div className={styles.description}>
                            <textarea type="text" className={styles.descriptionfield} placeholder="Description *" name= "message" required/>
                        </div>
                        {/* <button type="submit" value="Send" className={styles.submit}>SUBMIT</button> */}
                        <motion.input className={styles.submit} type="submit" value="SUBMIT" transition={{ type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                        whileTap={{ scale: 0.9}}></motion.input>
                    </form>
                )}
                {isSubmitted && (
                <div className={styles.aftersubmit}>
                    <p className={styles.contacttext}>
                        CONTACT
                    </p>
                    <p className={styles.messagetext}>
                        MESSAGE HAS BEEN SENT. THANKS!
                    </p>
                    <img src={getImageUrl("nav/T_logo.svg")} alt="tedd-logo" className={styles.logo}></img>
                </div>
                )}
            </motion.div>
        </div>
    </section>);
}