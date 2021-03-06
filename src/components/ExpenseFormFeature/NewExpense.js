import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onSave, loading }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button className="add-expense" onClick={startEditingHandler}>
          <i className="fas fa-plus"></i>
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSave={onSave}
          onCancel={stopEditingHandler}
          loading={loading}
        />
      )}
    </div>
  );
};

export default NewExpense;
