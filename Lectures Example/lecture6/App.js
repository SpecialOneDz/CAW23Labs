import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

class Palestine extends React.Component { 
  render() { 
  return
  <p> Palestine, will be FREE!</p>; } 
  }

ReactDOM.render(<Counter/>, document.getElementById('app'));
