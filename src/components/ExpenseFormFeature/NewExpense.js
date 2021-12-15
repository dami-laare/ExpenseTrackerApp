import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({onSave}) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const saveHandler = (expenseData) => {
        const expenseFormData = {
            ...expenseData,
            id: Math.random() * 10**17,
        }
        onSave(expenseFormData)
    }
    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
    const stopEditingHandler = () => {
        setIsEditing(false);
      };

    return(
        <div className='new-expense'>
        {!isEditing && (
          <button className='add-expense bg-dark' onClick={startEditingHandler}><i className="fas fa-plus"></i></button>
        )}
        {isEditing && (
          <ExpenseForm
            onSave={saveHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    )
}

export default NewExpense