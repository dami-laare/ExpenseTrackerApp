import React, { useState } from 'react'
import ExpensesList from './ExpensesList'
import "./Expenses.css";
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from './ExpenseChart';


function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('All');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    if (filteredYear === "All") {
      return expense;
    } else {
      return expense.date.getFullYear() === Number(filteredYear);
    }
  })

  
  
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
