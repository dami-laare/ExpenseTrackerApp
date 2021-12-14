import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const monthList = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const options = props.expenses.map(expense => {
    return <option key={Math.random()} value={expense.date.getMonth()}>{monthList[expense.date.getMonth()]}</option>
  })

  console.log(options)

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by month</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='All'>All</option>
          {options}
        </select>
      </div>
    </div>
  );
};


export default ExpensesFilter 