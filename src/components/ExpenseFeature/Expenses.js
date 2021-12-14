import React, { useState } from 'react'
import ExpensesList from './ExpensesList'
import "./Expenses.css";
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from './ExpenseChart';


function Expenses({ expenses }) {
  const [filteredMonth, setFilteredMonth] = useState('All');

  const filterChangeHandler = selectedYear => {
    setFilteredMonth(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    if (filteredMonth === "All") {
      return expense;
    } else {
      return expense.date.getMonth() === Number(filteredMonth);
    }
  })

  
  
  return (
    <Card className="expenses">
      <ExpensesFilter expenses={expenses} selected={filteredMonth} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
