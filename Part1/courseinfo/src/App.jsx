/* eslint-disable no-unused-vars */
import React from "react";

const App = () => {
  const course = "Half Stack Application Development";
  const parts = [
    { key: 1, title: "Fundamentals of React", exercises: 10 },
    { key: 2, title: "Using Props to Pass Data", exercises: 7 },
    { key: 3, title: "State of a Component", exercises: 14 },
  ];
  const totalExercises = parts.reduce(
    (total, part) => total + part.exercises,
    0
  );

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total totalExercises={totalExercises} />
    </div>
  );
};

// Header Component

const Header = ({ course }) => {
  return (
    <header>
      <h1>{course}</h1>
    </header>
  );
};

// Content Component

const Content = ({ parts }) => {
  return (
    <section>
      <h2>Course Parts</h2>
      <ul>
        {parts.map((part) => (
          <li key={part.key}>
            Part {part.key}: {part.title} - {part.exercises} exercises
          </li>
        ))}
      </ul>
    </section>
  );
};

// Total Component
const Total = ({ totalExercises }) => {
  return (
    <footer>
      <p>Total Exercises: {totalExercises}</p>
    </footer>
  );
};

export default App;
