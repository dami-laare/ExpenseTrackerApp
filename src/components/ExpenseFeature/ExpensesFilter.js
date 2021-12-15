import React from 'react';
import  { useState, useEffect } from 'react'

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [yearArr, setYearArr] = useState([])

  const dropdownChangeHandler = (event) => {
    props.onChangeYearFilter(event.target.value);
  };

  const monthChangeHandler = (event) => {
    props.onChangeMonthFilter(event.target.value)
  }

  const monthList = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const optionGenerator = () => {
    for (let expense of props.expenses){
      if (yearArr.indexOf(expense.date.getFullYear())<0){
        setYearArr((prevState)=> {
          return [...prevState, expense.date.getFullYear()]
        })
      }
    }
  } 

  useEffect(()=> {
    optionGenerator()
  }, [props.expenses])

  const yearOptions = yearArr.map(year => {
    return <option key={Math.random()} value ={year}>{year}</option>
  })

  const monthOptions = monthList.map(month => {
    return <option key={Math.random()} value ={month}>{month}</option>
  })

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
          <select value={props.selectedYear} onChange={dropdownChangeHandler}>
            <option value='All'>All</option>
            {yearOptions}
        </select>
        <label>Filter by month</label>
        <select value={props.selectedMonth} onChange={monthChangeHandler}>
          <option value='All'>All</option>
          {monthOptions}
        </select>
      </div>
    </div>
  );
};


export default ExpensesFilter 