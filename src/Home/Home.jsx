import React from 'react';
import styles from "../Home/Home.module.css";

function Home() {


    return (
        <picture>
            <source
                media="(max-width:600px)"
                srcSet="foodhome.jpg 200w"
            />

            <source
                media="(max-width:1000px)"
                srcSet="Recipes-Banner.jpg 900w"
            />
            <img className={styles.image} src="Recipes-Banner.jpg" alt="Banner" />
        </picture>

    );
}

export default Home;
