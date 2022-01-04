
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 5, 7),
    },
    {
      id: "e2",
      title: "Cell Phone",
      amount: 60.75,
      date: new Date(2022, 2, 12),
    },
    {
      id: "e3",
      title: "Car Note",
      amount: 698.22,
      date: new Date(2022, 2, 1),
    },
    {
      id: "e4",
      title: "Car Wash",
      amount: 50.0,
      date: new Date(2022, 3, 1),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
