const Statistics = (props) => {
    const { perfect, good, bad } = props;
    const all = perfect + good + bad;
    const average = all
      ? ((perfect * 3 + good * 2 + bad * 1) / all).toFixed(2)
      : 0;
    const positive = all ? (((perfect + good) / all) * 100).toFixed(2) : 0;
  
    return (
      <div>
        <h2>Feedback counter</h2>
        <p>Perfect: {perfect}</p>
        <p>Good: {good}</p>
        <p>Bad: {bad}</p>
        <p>Total feedbacks: {all}</p>
        <p>Average= {average}</p>
        <p>Positive= {positive} %</p>
      </div>
    );
  };
  
  export default Statistics;
  