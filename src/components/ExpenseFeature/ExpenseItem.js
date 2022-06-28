import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import capitalize from "../../capitalize";

function ExpenseItem({ title, date, amount }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={new Date(date)} />
        <div className="expense-item__description">
          <h2>{capitalize(title)}</h2>
          <div className="expense-item__price">&#8358;{amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
