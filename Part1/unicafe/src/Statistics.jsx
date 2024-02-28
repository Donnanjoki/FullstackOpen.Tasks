/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  // calculate statistics only when feedback values are given

  const hasFeedback = good !== 0 || neutral !== 0 || bad !== 0;

  const totalFeedback = () => good + neutral + bad;
  const averageScore = () => (good - bad) / totalFeedback();
  const positivePercentage = () => (good / totalFeedback()) * 100;

  return (
    <div>
      <h1>Statistics</h1>
      {hasFeedback && (
        <table>
          <tbody>
            <StatisticsLine text="Good" value={good} />
            <StatisticsLine text="Neutral" value={neutral} />
            <StatisticsLine text="Bad" value={bad} />
            <StatisticsLine text="All" value={totalFeedback()} />
            <StatisticsLine text="Average" value={averageScore().toFixed(2)} />
            <StatisticsLine
              text="Positive"
              value={`${positivePercentage()}%`}
            />
          </tbody>
        </table>
      )}
      {!hasFeedback && <p>No feedback given yet!</p>}
    </div>
  );
};

export default Statistics;
