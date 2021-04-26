import styles from "./DynamicRecepie.module.css";
import { Link } from "react-router-dom";
import HTMLText from "../HTMLText/HTMLText.jsx";
import StarRatings from "react-star-ratings";
import FavouriteHeartToggleButton from "../FavouriteHeartToggleButton/FavouriteHeartToggleButton.jsx"
import React, { useState } from "react";

const DynamicRecepie = (props) => {
    const [isFavourite, colorChnge] = useState(false);

    function onClick() {
        colorChnge(!isFavourite);
    }
    return (
        <div className={styles.Recepie}>
            <h1 className={styles.title}> {props.recepies.title} </h1>
            <div className={styles.shortTitle}>
                <StarRatings rating={props.recepies.rating} starRatedColor="orange" numberOfStars={5} name="rating" starDimension="24px" starSpacing="2px" />
                <span> | ({props.recepies.totalReviews}) </span>
                |


                <FavouriteHeartToggleButton
                    isLike={isFavourite}
                    onClick={onClick}
                />

                <h3>
                    <q>{props.recepies.shortTitle}</q>
                </h3>
                <div>By: {props.recepies.by}</div>
            </div>

            <img className={styles.image} alt={props.recepies.title} src={props.recepies.image._url} />

            <div className={styles.padding}>
                <h3 className={styles.ingredients}>Ingredients :</h3>
                <HTMLText text={props.recepies.ingredients} />
            </div>
            <div className={styles.padding}>
                <h3 className={styles.directions}> Directions :</h3>
                <HTMLText text={props.recepies.directions} />
            </div>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia" />
            <Link to="/recipes" className={styles.back}>
                Back
            </Link>
        </div >
    );
};

export default DynamicRecepie;
