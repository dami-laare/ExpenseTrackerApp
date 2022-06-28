import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import capitalize from "./capitalize";
import Expenses from "./components/ExpenseFeature/Expenses";
import NewExpense from "./components/ExpenseFormFeature/NewExpense";

function App() {
  const [expenses, setExpenses] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const [addingExpense, setAddingExpense] = React.useState(false);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user", {
        headers: {
          token: window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setExpenses(response.data.user.expenses);
        setUser(response.data.user);
        console.log(response.data.user);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const expenseUpdateHandler = async (submittedData) => {
    setAddingExpense(true);
    await axios
      .put(
        "http://localhost:4000/api/v1/user/expense",
        {
          expense: submittedData,
        },
        {
          headers: {
            token: window.localStorage.getItem("token"),
          },
        }
      )
      .then(() => {
        fetchUserData();
        setAddingExpense(false);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };
  const logout = () => {
    window.localStorage.clear();

    navigate("/login");
  };

  return (
    user && (
      <div>
        <div
          style={{
            display: "flex",
            padding: "0 2rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ margin: "1rem", color: "#FFF" }}>
            Welcome {`${capitalize(user.first_name)}`}!
          </h1>
          <button
            style={{
              width: "9rem",
              font: "inherit",
              cursor: "pointer",
              padding: "0.5rem 1rem",
              border: "1px solid #000000",
              backgroundColor: "#000000",
              color: "white",
              borderRadius: "12px",
              marginRight: "1rem",
            }}
            onClick={logout}
          >
            Logout
          </button>
        </div>
        <NewExpense onSave={expenseUpdateHandler} loading={addingExpense} />
        <Expenses expenses={expenses} />
      </div>
    )
  );
}

export default App;
