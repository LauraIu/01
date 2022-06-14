import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Paper",
    amount: "58.4",
    date: new Date(2021, 7, 24),
  },
  {
    id: "e2",
    title: "Chees",
    amount: "74.58",
    date: new Date(2022, 5, 15),
  },
  {
    id: "e3",
    title: "Stone",
    amount: "152.58",
    date: new Date(2020, 12, 31),
  },
  {
    id: "e4",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e5", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e6",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e7",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  

  const addExpenseHandler = (expense) => {
    setExpenses((perevExpenses) => {
      return [expense, ...perevExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
