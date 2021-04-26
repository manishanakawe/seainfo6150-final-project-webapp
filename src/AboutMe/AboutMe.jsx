import React from 'react';
import styles from "../AboutMe/AboutMe.module.css";
import classnames from "classnames";

function AboutMe() {

    return (



        <div class={classnames(styles.container, styles.wrapContainer)}>
            <div className={styles.image}>
                <img src="aboutme.png" alt="About me image" width="170" height="180" />

            </div>

            <div className={styles.text}>

                <h2>Manisha Nakawe</h2>
                <p>  Student at Northeastern University</p>
                <p> Master of Science in Information and Systems</p>
                <p>  Part-time Food blogger </p>
                <p>Contact: nakawe.m@northeastern.edu</p>
            </div>
            <div className={styles.details}>
                <p>Hello All food lovers,</p><p>I am a foodie person,who likes to try diffenet cuisine at restaurants as well as at home.</p>
                <p> Cooking food is a stressbuster for me and now in this pandemic period it has become a need for everyone to cook and heat healthy food.</p>
                <p>Eating healthy food is as important as drinking water</p>
                <p></p>
                <p></p>

                <p> "The secret of success in life is to eat what you like and let the food fight it out inside”</p>
                <p>Thank you.</p>

            </div>
        </div>


    );
};

export default AboutMe;
