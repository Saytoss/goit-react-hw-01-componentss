import React from "react";
import styles from "./friends.module.css";
import User from "../FriendListItem/FriendListItem";

const Friends = ({ users }) => {
  return (
    <ul className={styles.friends}>
      {users.map((friend) => (
        <User key={friend.id} user={friend} />
      ))}
    </ul>
  );
};

Friends.defaultProps = {
  users: {},
};

export default Friends;
