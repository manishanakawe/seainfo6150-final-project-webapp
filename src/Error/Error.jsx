import React from 'react'
import styles from "../Error/Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div >
            

                
            <img className={styles.error} src="ui-day033-404error.png" alt="Error image" />     
              <Link to="/" className={styles.back}>
                        Back to Home          
            </Link>
                

        
        </div>
    )
}

export default Error
