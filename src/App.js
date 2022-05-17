import Expenses from "./components/Expenses";
import "./components/Expenses.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "paper",
      amount: "58.4",
      date: new Date(2021, 7, 24),
    },
    {
      id: "e2",
      title: "chees",
      amount: "74.58",
      date: new Date(2022, 5, 15),
    },
    {
      id: "e3",
      title: "stone",
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <div className="expenses">
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;