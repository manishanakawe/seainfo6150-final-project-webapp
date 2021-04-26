import React from "react";
import ReactDOM from "react-dom";
import styles from "./FeedbackForm.module.css";
import emailjs from "emailjs-com";

function FeedbackForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_5gu5bdm", "template_pbz70jc", e.target, "user_Oy3FcA9wQnl8mj9rjdeNb").then(
      (result) => {
        alert("Thank you for your feedback!");
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <div className={styles.bckgrnd}>
      <div class="container">
        <form onSubmit={sendEmail}>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label>First Name*</label>
            </div>
            <div className={styles.col75}>
              <input required type="text" name="from_name" placeholder="Your name.." />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label>Phone Number*</label>
            </div>
            <div className={styles.col75}>
              <input required type="number" name="from_number" placeholder="Your phone number.." />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label>Email Id*</label>
            </div>
            <div className={styles.col75}>
              <input required type="email" name="from_emailId" placeholder="Your email Id.." />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label>Country*</label>
            </div>
            <div className={styles.col75}>
              <select id="country" name="from_country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label>City</label>
            </div>
            <div className={styles.col75}>
              <select id="city" name="from_city">
                <option value="Sydney">Pune</option>
                <option value="Vancouver">Canada</option>
                <option value="Seattle">USA</option>
              </select>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label>Gender</label>
            </div>
            <div className={styles.col75}>
              <input type="radio" id="male" name="from_gender" value="male" />
              <label>Male</label>
              <input type="radio" id="female" name="from_gender" value="female" />
              <label >Female</label>
              <input type="radio" id="other" name="from_gender" value="other" />
              <label >Other</label>
            </div>

          </div>
          <div className={styles.row}>
            <div className={styles.col25}>
              <label>Message*</label>
            </div>
            <div className={styles.col75}>
              <textarea required id="subject" name="from_message" placeholder="Write something.." style={{ "height": 200 }}></textarea>
            </div>
          </div>

          <div className={styles.row}>
            <input className={ styles.send} type="submit" value="Send" />
          </div>
        </form>
      </div >
    </div>


  );
}

export default FeedbackForm;
