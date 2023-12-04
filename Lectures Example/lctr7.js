constructor(props) {
    super(props); 
    this.state = { 
    /* initial state values */ }; 
}

class Game extends React.Component {
    
    constructor(props) { 
    super(props); 
    this.state = { 
        player: 'Riad', 
        score: 0
    }; 
    } 
    
    render() { 
    return ( 
        <div> 
        <h1>Football</h1> 
        <p>Current Player: {this.state.player}</p>
        <p>Score: {this.state.score}</p> 
        </div> 
        ); 
    } 
}

this.setState({
    playerName: "Riad",
    score: 2 })

    class Rando extends React.Component { 
        constructor(props) { 
        super(props); 
            this.state = { num: 0 
        }; this.makeTimer(); 
        } 

    makeTimer() { 
    setInterval(() => { 
        this.setState({ 
        num: Math.floor(Math.random() * this.props.maxNum) }); 
        }, 1000); 
    }
    
    render() { 
        return <h1>Random number: {this.state.num}</h1>;
    } 
    }

    import React, { useState } from "react";

    const App = () => {
      const [count, setCount] = useState(0);
    
      const handleIncrement = () => setCount(count + 1);
      const handleDecrement = () => setCount(count - 1);
      const handleReset = () => setCount(0);
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Dcrement</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      );
    }



    class MyComponent extends React.Component {
        handleClick() {
        // Event handling logic goes here.
        }
        
        render() {
        return <button onClick={this.handleClick}>Click me</button>;
        }
       }

       class MyComponent extends React.Component {
        constructor(props) {
          super(props);
          this.handleClick = this.handleClick.bind(this);
        }
        
        handleClick() {
          // Event handling logic goes here.
        }
        
        render() {
          return <button onClick={this.handleClick}>Click me</button>;
        }
      }

      class ClickRandom extends React.Component {
        constructor(props) { 
        super(props);
        this.state = { num: 0 }; 
        this.handleClick = this.handleClick.bind(this); } 

        setRandom() { 
            this.setState({ 
            num: Math.floor(Math.random() * this.props.maxNum) 
            }); 
            } 
        handleClick(evt) { 
            this.setRandom(); 
        } 
        render() { 
            return (
            <div> 
                <h1> Number = {this.state.num}</h1> 
                <br/> 
                <button onClick = {this.handleClick}> Generate Random </button> </div> 
            ); 
        } 
        } 
        class Comp extends React.Component {
            render() { 
            let stars = [2,1,6,9].map((e,i) => 
            <li key ={i}> value is {e}</li> ); 
            
            return( 
            <div> 
                <ul> 
                { stars } 
                </ul> 
            </div>) 
            } 
        }