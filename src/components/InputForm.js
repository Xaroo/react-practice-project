import styles from "./InputForm.module.css";
import { useState } from "react";
import ModalError from "./ModalError";

const InputForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [error, setError] = useState(false);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (!(enteredAge && enteredUsername) || !(enteredAge > 0)) {
      setError(true);
      return;
    }

    const newUserData = { username: enteredUsername, age: enteredAge };
    props.userData(newUserData);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const hideModalHandler = () => {
    setIsHidden(true);
    setError(false);
  };

  return (
    <div>
      <ModalError
        userData={{ username: enteredUsername, age: enteredAge }}
        className={`${isHidden ? styles["hidden"] : ""}`}
        hideModal={hideModalHandler}
        error={error}
      />
      <div className={`${styles["input-form"]}`}>
        <form onSubmit={submitHandler}>
          <div>
            <div className={`${styles["new-user__control"]}`}>
              <label>Username</label>
              <input
                value={enteredUsername}
                onChange={usernameChangeHandler}
              ></input>
            </div>
            <div className={`${styles["new-user__control"]}`}>
              <label>Age (Years)</label>
              <input value={enteredAge} onChange={ageChangeHandler}></input>
            </div>
          </div>
          <button type="submit" className={`${styles["button-submit"]}`}>
            Add user
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
