import { useState } from "react";
import React from 'react';
import './App.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  let All = good + neutral + bad;

  const average = All > 0 ? (good * 1 + neutral * 0 + bad * -1) / All : 0;
  const positivePercentage = All > 0 ? (good / All) * 100 : 0;

  return (
    <div className="container">
      <h2>Give Feedback</h2>
      <div className="buttons">
        <button onClick={() => setGood(good + 1)} className="good">Good</button>
        <button onClick={() => setNeutral(neutral + 1)} className="neutral">Neutral</button>
        <button onClick={() => setBad(bad + 1)} className="bad">Bad</button>
      </div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All</td>
            <td>{All}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{average.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{positivePercentage.toFixed(2)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
