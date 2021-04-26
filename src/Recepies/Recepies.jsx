import React from 'react'
import PropTypes from "prop-types";
import RecepieListItem from "../RecepieListItem/RecepieListItem.jsx"
import styles from "./Recepies.module.css"


const Recepies = (props) => {
    return (
        <div className={styles.bckgrnd}>
            <ul className={styles.container}>
                {props.recepies.map((recepie) => (
                    <RecepieListItem recepie={recepie} key={recepie.slug} />
                ))}
            </ul>
        </div>
    );
};

Recepies.propTypes = {
    recepies: PropTypes.array.isRequired
}
export default Recepies;