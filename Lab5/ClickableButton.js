import React, { useState } from 'react';
const ClickableButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      {isClicked && <p>Clicked</p>}
    </div>
  );
};

// export default ClickableButton;



function myFunc() {
  console.log("Hi");
 }

export default myFunc; 

import myFunc from './mystuff';



function myFunc() {
  console.log("Hi");
 }
 const msg = "wonderful" ;

 export default myFunc; // Default exportation
 export {msg} ; // Not by default exportation 

 import myFunc, {msg} from './mystuff';

 //Example: Componnt House
. . .
render (
<div className="House">
 <p className="House-title">{ this.props.title }</p>
 <p className="House-address">{ this.props.addr }</p>
</div>
)
export default House; 

import dol from "./dolly.jpg";

class Animal extends React.Component {
 render() {
 return (
 <div>
 <img src={dol} alt="my dolly!" />
 </div>
 );
 }}