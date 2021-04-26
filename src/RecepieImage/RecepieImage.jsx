import React from "react";
import PropTypes from "prop-types";
import styles from "./RecepieImage.module.css";

const RecepieImage = (props) => {
    return <img className={styles.image} alt={props.title} src={props.url} />;
};

RecepieImage.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
export default RecepieImage;
