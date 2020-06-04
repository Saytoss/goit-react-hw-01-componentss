import React from "react";
import user from "./data/user.json";
import stats from "./data/statistics.json";
import friends from "./data/friend.json";
import items from "./data/transactions.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import Friends from "./components/FriendList/FriendList";
import TransactionsHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => (
  <div>
    <Profile user={user} />
    <Statistics title={"upload stats"} stats={stats} />
    <Friends users={friends} />
    <TransactionsHistory items={items} />
  </div>
);

export default App;
