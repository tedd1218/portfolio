import React from "react"
import styles from "./Contact.module.css";
import {getImageUrl} from "../../utils";

export const Contact = () => {
    return (
    <section className={styles.container} id="contact">
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
    </section>);
}