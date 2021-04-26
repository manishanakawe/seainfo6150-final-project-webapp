import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./RecepieListItem.module.css"
import RecepieImage from "../RecepieImage/RecepieImage.jsx";
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import classnames from "classnames";


const RecepieListItem = (props) => {
    return (
        <div class={classnames(styles.con, styles.wrapContainer)} >
            <RecepieImage url={props.recepie.image._url} title={props.recepie.title} />

            <div className={styles.title}>
                <Link className={styles.link} to={`/recipes/${props.recepie.slug}`}>
                    {props.recepie.title}
                </Link>
            </div>
            <div className={styles.rating}>
                <StarRatings
                    rating={props.recepie.rating}
                    starRatedColor="orange"
                    numberOfStars={5}
                    name='rating'
                    starDimension="18px"
                    starSpacing="1px"
                /> <span>({props.recepie.totalReviews})</span>
            </div>


            <div className={styles.by}>

                <q>By: {props.recepie.by}</q>

            </div>


        </div >

    );
};



RecepieListItem.propTypes = {
    recepie: PropTypes.object.isRequired,
};

export default RecepieListItem;