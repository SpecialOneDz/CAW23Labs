class Palestine extends React.Component { 
    render() { 
    return
    <h1> Palestine, will be FREE!</h1>; } 
    }

ReactDOM.render(<Palestine />, document.getElementById("root”)); 


class Hello extends React.Component { 
    render() { 
    return
    <p>Hi Everybody!</p>; } 
}
ReactDOM.render(<Hello />, document.getElementById("root"));

// Babel
<script src="https://unpkg.com/babel-standalone"> </script>

// JS mark code
<script src="index.js" type="text/jsx"></script>


class Lottery extends React.Component { 
    render() { 
    if ({this.props.winner}) return <b>You win!</b>; 
    else return <b>You lose!</b>; 
    } }

    class Lottery extends React.Component { 
        render() { 
        return ( <b>You {this.props.winner ? "win" : "lose"}!</b> ) 
        } } 

    class Messages extends React.Component { 
        render() { 
        const msgs = [ {id: 1, text: "Greetings!"}, {id: 2, text: "Goodbye!"}, ]; 
          return ( <ul> { msgs.map(m => <li>{m.text}</li>) } </ul> ); 
        } } 

// Consider a simple Button component that takes a text prop:
<Button text="Click me!" />

//Inside the Button component, the text prop can be accessed using the props object:
function Button(props) {
    return <button>{props.text}</button>;
  }

  function UserCard(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Email: {props.email}</p>
      </div>
    );
  }

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  // ...
}

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    );
  }


class Hello extends React.Component { 
    render() { 
    return ( 
    <div> <p>Secret Message: </p> 
    <p>Hi {this.props.to} from {this.props.from}</p> 
    </div> ); 
} }

ReactDOM.render( 
    <div> 
    <Hello to=”Ali" from=”Sami" /> 
    <Hello to="me" from="you" /> 
    </div>, 
document.getElementById("root") );

class Friend extends React.Component { 
    render() { 
    const { name, hobbies } = this.props; 
        return ( <div> 
        <h1>{name}</h1> 
        <ul> {hobbies.map(h => <li>{h}</li>)} </ul> 
        </div> ); 
} }     

ReactDOM.render( 
    <div> 
     <Friend name="Jessica" hobbies={["Tea", "Frisbee"]} /> 
    <Friend name="Jake" hobbies={["Chess", "Cats"]} /> 
    </div>, 
document.getElementById("root") ); 


class Message extends React.Component {
    render() { 
    return 
    <div className="urgent">Halte! </div> } } 

class Box extends React.Component { 
    render() { 
    const colors = { color: this.props.favoriteColor, 
    backgroundColor: this.props.otherColor, 
    }; 
    return( 
    <b style={colors}>{this.props.message}</b>); } }

    function ExampleComponent(props) {
        // ...
      }
      
      ExampleComponent.defaultProps = {
        text: "Default Text",
        count: 0,
      };