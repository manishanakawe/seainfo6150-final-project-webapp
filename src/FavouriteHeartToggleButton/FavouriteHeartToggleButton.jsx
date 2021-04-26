import React from "react";
import PropTypes from "prop-types";
import styles from "./FavouriteHeartToggleButton.module.css";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

const FavouriteHeartToggleButton = (props) => {
    return (
        <>
            {props.isLike &&
                <button className={styles.button} onClick={props.onClick}><FcLike />
                </button>
            }
            {!props.isLike &&
                <button className={styles.button} onClick={props.onClick}><FcLikePlaceholder />
                </button>
            }
        </>
    );
};

FavouriteHeartToggleButton.propTypes = {
    isLike: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
};
export default FavouriteHeartToggleButton;
