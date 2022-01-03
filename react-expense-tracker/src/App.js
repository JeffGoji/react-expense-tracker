import ExpenseItem from "./components/ExpenseItem";

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
      <h2>Let's get started! Time to build the app!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
