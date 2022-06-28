import React from 'react';
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = ({items}) => {

    if (items.length === 0) {
        return <h2 className="expenses-list__fallback">No expense found</h2>
    }
    return(
        <ul className="expenses-list">
            {items.map(expense => (
                <ExpenseItem
                    key={expense._id}
                    myKey={expense._id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))
            }
        </ul>
    )
    
}

export default ExpensesList