import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const ExpensesList = ({ items }) => {
  const [total, setTotal] = React.useState(0);
  React.useEffect(() => {
    items.forEach((i) => {
      setTotal((prev) => (prev += i.amount));
    });
  }, [items]);
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No expense found</h2>;
  }
  return (
    <>
      <Card
        style={{
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        <div
          className="expense-item__description"
          style={{ justifyContent: "space-between" }}
        >
          <h2 style={{ color: "#FFF" }}>Total</h2>
          <div className="expense-item__price">&#8358;{total}</div>
        </div>
      </Card>
      <ul className="expenses-list">
        {items.map((expense) => (
          <ExpenseItem
            key={expense._id}
            myKey={expense._id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpensesList;
