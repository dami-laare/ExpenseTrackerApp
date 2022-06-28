import React, { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSave, onCancel, loading }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: Number(enteredAmount),
    };
    onSave(expenseData);

    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          className="bg-dark"
          type="button"
          onClick={onCancel}
          disabled={loading}
        >
          Cancel
        </button>
        <button className="bg-dark" type="submit" disabled={loading}>
          {loading ? <ImSpinner2 className="loading-spinner" /> : "Add Expense"}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
