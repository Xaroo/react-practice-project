import { useState } from "react";
import styles from "./ModalError.module.css";

const ModalError = (props) => {
  const hideModalHandler = (e) => {
    props.hideModal();
  };

  if (props.error && !(props.userData.age && props.userData.username)) {
    return (
      <div>
        <div
          onClick={hideModalHandler}
          className={`${styles["modal-overlay"]}`}
        ></div>
        <div className={`${styles["modal-card"]}`}>
          <div className={`${styles["modal-card__whole"]} `}>
            <div className={`${styles["modal-header"]}`}>
              <h1>No username or age found!</h1>
            </div>
            <p>Please input valid username and age!</p>
            <button onClick={hideModalHandler}>Okay</button>
          </div>
        </div>
      </div>
    );
  } else if (props.error && !(props.userData.age > 0)) {
    return (
      <div>
        <div
          onClick={hideModalHandler}
          className={`${styles["modal-overlay"]}`}
        ></div>
        <div className={`${styles["modal-card"]}`}>
          <div className={`${styles["modal-card__whole"]} `}>
            <div className={`${styles["modal-header"]}`}>
              <h1>Invalid input</h1>
            </div>
            <p>Entered age must be above 0!</p>
            <button onClick={hideModalHandler}>Okay</button>
          </div>
        </div>
      </div>
    );
  }
};

export default ModalError;
