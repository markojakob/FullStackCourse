import { useState } from "react"

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  let All = good + neutral + bad;
  return (
    <div>
      <h2>
        give feedpack
      </h2>
      <button onClick={() => { setGood(good + 1) }} good>
        good
      </button>
      <button onClick={() => { setNeutral(neutral + 1) }} neutral>
        neutral
      </button>
      <button onClick={() => { setBad(bad + 1) }} bad>
        bad
      </button>
      <h2>
        statistics
      </h2>
      <table>
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
          <td>{(good * 1 + neutral * 0 + bad * -1)/All }</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{good/All * 100}%</td>
        </tr>

      </table>
    </div>
  )
}

export default App