import { useState } from "react";

const Btn = ({ label, onClick }) => <button onClick={onClick}>{label}</button>;

const StatisticLine = ({ label, value }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;
  if (all === 0) return <h2>No feedback given</h2>;
  return (
    <table>
      <tbody>
        <StatisticLine label={"good"} value={good} />
        <StatisticLine label={"neutral"} value={neutral} />
        <StatisticLine label={"bad"} value={bad} />
        <StatisticLine label={"all"} value={all} />
        <StatisticLine label={"average"} value={average} />
        <StatisticLine label={"positive"} value={positive + "%"} />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Give feedback</h2>
      <Btn label="good" onClick={() => setGood((old) => old + 1)} />
      <Btn label="neutral" onClick={() => setNeutral((old) => old + 1)} />
      <Btn label="bad" onClick={() => setBad((old) => old + 1)} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
