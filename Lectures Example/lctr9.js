function Example (props) {
  // Hooks can be used here
  return <div />;
}

class Sample extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
     age: 0
   };
 }}

 
import React, { useState } from 'react';

function Sample() {
  // Initialize a new state variable called  "age"
  const [age, setAge] = useState(0);
}

import React, { useState } from 'react';
 
   function Sample() {
     const [age, setAge] = useState(0);
 
     return (
       <div>
         <p>You clicked {age} times</p>
         <button onClick={() => setAge(age + 1)}>
         Click me
        </button>
      </div>
    );
   }

useEffect(() => { 
    // side effect
})


import React, { useState, useEffect } from 'react';

function Sample() {
  const [rate, setRate] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${rate} times`;
  });

  return (
    <div>
      <p>Hey!! you  have clicked {rate} times</p>
      <button onClick={() => setRate(rate + 1)}>
        Click
      </button>
    </div>
  );
}


========================


// context.js
import { createContext } from 'react';

export const Context = createContext('Default Value');


import { Context } from './context';

function Main() {
  const value = 'My Context Value';
  return (
    <Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>
  );

}

import { useContext } from 'react';
import { Context } from './context';

function MyComponent() {
  const value = useContext(Context);

  return <span>{value}</span>;
}

import {useState} from 'react';
 
export default function  ControlledComponent()  {
	const  [inputValue, setInputValue] =  useState('');

	const  handleChange = (event) => {
		setInputValue(event.target.value);
	};

return  (
<form>
	<label>Input Value:
	<input  type="text"  value={inputValue} onChange={handleChange} />
	</label>
	<p>Input Value: {inputValue}</p>
</div>
)};