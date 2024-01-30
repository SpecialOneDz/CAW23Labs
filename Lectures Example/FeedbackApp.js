import React, { useState } from 'react';

function FeedbackApp() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>Donnez votre avis</h2>
      <button onClick={handleGood}>Bon</button>
      <button onClick={handleNeutral}>Neutre</button>
      <button onClick={handleBad}>Mauvais</button>

      <h2>Statistiques</h2>
      <p>Bon {good}</p>
      <p>Neutre {neutral}</p>
      <p>Mauvais {bad}</p>
    </div>
  );
}

export default FeedbackApp;