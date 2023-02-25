import styles from "./UserElement.module.css";

const UserElement = (props) => {
  return (
    <div>
      {props.newUserData.map((e) => (
        <div key={Math.random()} className={`${styles["user-element__card"]}`}>
          <p>
            {e.username} ({e.age} years old)
          </p>
        </div>
      ))}
    </div>
  );
};
export default UserElement;
