import React from "react";
import styles from "./transactions.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {transactions.map((transaction) => (
          <tr key={transaction.id} className={styles.tr}>
            <td className={styles.td}>{transaction.type}</td>
            <td className={styles.td}>{transaction.amount}</td>
            <td className={styles.td}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
