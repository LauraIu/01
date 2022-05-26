import "./ExpensesMonthFilter.css";

const ExpensesMonthFilter = (props) => {
  const selectMonthHandler = (event) => {
    props.onChangeMonth(event.target.value);
  };

  return (
    <div className="expenses-months">
      <div className="expenses-months__control">
        <label>Filter by month</label>
        <select value={props.selected} onChange={selectMonthHandler}>
          <option value={"Január"}>Január</option>
          <option value={"Május"}>Május</option>
          <option value={"Június"}>Június</option>
          <option value={"Augusztus"}>Augusztus</option>
          <option value={"November"}>November</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesMonthFilter;
