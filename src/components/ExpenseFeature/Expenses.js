import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

function Expenses({ expenses }) {
  const [filteredMonth, setFilteredMonth] = useState("All");
  const [filteredYear, setFilteredYear] = useState("All");
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthFilterHandler = (filterMonth) => {
    setFilteredMonth(filterMonth);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const yearFilteredExpenses = expenses.filter((expense) => {
    const date = new Date(expense.date);
    if (filteredYear === "All") {
      return expense;
    } else {
      return date.getFullYear() === Number(filteredYear);
    }
  });
  const filteredExpenses = yearFilteredExpenses.filter((expense) => {
    const date = new Date(expense.date);
    if (filteredMonth === "All") {
      return expense;
    } else {
      return monthList[date.getMonth()] === filteredMonth;
    }
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        expenses={expenses}
        selectedYear={filteredYear}
        selectedMonth={filteredMonth}
        onChangeYearFilter={filterChangeHandler}
        onChangeMonthFilter={monthFilterHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
