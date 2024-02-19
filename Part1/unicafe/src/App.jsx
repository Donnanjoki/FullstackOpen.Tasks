import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import reactLogo from "./assets/react.svg";
const statistics = (props) => {};

const App = () => {
  // states for each feedback category and total count
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // update state and the total count for each button click
  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  // calculate total feedback, average score and positive percentage
  const totalFeedback = good + neutral + bad;
  // note: Average Score = (Number of Good Responses * 1 + Number of Neutral Responses * 0 + Number of Bad Responses * -1) / Total Number of Responses
  const averageScore = (good - bad) / totalFeedback;

  const positivePercentage = Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <h1>Statistics</h1>
      <p>Good: {good} </p>
      <p>Neutral: {neutral} </p>
      <p> Bad: {bad} </p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Average Score: {averageScore}</p>
      <p>positivePercentage: {positivePercentage}%</p>
    </div>
  );
};
export default App;
