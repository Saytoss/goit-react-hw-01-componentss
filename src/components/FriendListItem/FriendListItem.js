import React from "react";
import PropTypes from "prop-types";
import styles from "./friendListItem.module.css";

const User = ({ user }) => {
  const isActive = user.isOnline;
  return (
    <li className={styles.item}>
      {<span className={isActive ? styles.onLine : styles.offLine} />}
      <img
        className={styles.avatar}
        src={user.avatar}
        alt={user.name}
        width="48"
      />
      <p className={styles.name}>{user.name}</p>
    </li>
  );
};

User.defaultProps = {
  user: {},
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
