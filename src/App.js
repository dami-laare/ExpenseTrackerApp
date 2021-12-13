import React from 'react'
import Expenses from './components/ExpenseFeature/Expenses'
import NewExpense from './components/ExpenseFormFeature/NewExpense';


function App() {
  const [expenses, setExpenses] = React.useState([]);

  const expenseUpdateHandler = (submittedData) => {
    setExpenses((prevState) => {
      return [
        submittedData,
        ...prevState,
      ]
    })
  } 

  return (
    <div>
      <NewExpense onSave={expenseUpdateHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
