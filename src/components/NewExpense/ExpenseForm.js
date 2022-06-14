import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [enteredAmount, setEnteredAmonut] = useState(" ");
  const [enteredDate, setEnteredDate] = useState(" ");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: " ",
  //     enteredAmount: " ",
  //     enteredDate: " ",
  //   });



  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);

    //this is NOT so GOOD way to update all of states, with spead operator!!!
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //this is the BETTER way to update all of states, with spead operator!!!
    // setUserInput((prevState)=>{
    //     return {...prevState, enteredTitle:event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmonut(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    //set back or clear the inputs after submit
    setEnteredTitle(" ");
    setEnteredAmonut(" ");
    setEnteredDate(" ");
  };

 

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-03"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
