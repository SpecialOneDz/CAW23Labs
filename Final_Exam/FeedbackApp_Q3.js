import React, { useState } from "react";
import Statistics from "./Statistics";

function FeedbackApp_Q3() {
  const [perfect, setPerfect] = useState(0);
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);

  const handleThree = () => {
    setPerfect(perfect + 1);
  };

  const handleTwo = () => {
    setGood(good + 1);
  };

  const handleOne = () => {
    setBad(bad + 1);
  };

  // Calculate total feedbacks
  const all = perfect + good + bad;

  // Calculate average feedback
  const average = all
    ? ((perfect * 3 + good * 2 + bad * 1) / all).toFixed(2)
    : 0;

  // Calculate positive feedback percentage
  const positive = all ? (((perfect + good) / all) * 100).toFixed(2) : 0;

  return (
    <div>
      <h2>Share with us your feedback !</h2>
      <button onClick={handleThree}>★★★</button>
      <button onClick={handleTwo}>☆★★</button>
      <button onClick={handleOne}>☆☆★</button>
      <Statistics perfect={perfect} good={good} bad={bad} />
    </div>
  );
}

export default FeedbackApp_Q3;
