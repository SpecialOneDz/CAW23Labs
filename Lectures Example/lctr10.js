class App extends Component { 
 state = {page: "home"}; 
 
 goToPage(page) { 
    this.setState({page: page}); 
 } 
 
 showRightPage() { 
    if (this.state.page === "home") return <Home />; 
    else if (this.state.page === "eat") return <Eat />; 
    else if (this.state.page === "drink") return <Drink />; 
 } 

 render() { 
    return ( 
    <main> 
        <nav> 
        <a onClick={() => this.goToPage('home')}>Home</a> 
        <a onClick={() => this.goToPage('eat')}>Eat</a> 
        <a onClick={() => this.goToPage('drink')}>Drink</a> 
        </nav> 
        {this.showRightPage() } 
    </main> 
    ); 
 } 
}


import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
 return (
    <BrowserRouter>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
    </BrowserRouter>
 );
}

import { Link } from 'react-router-dom';

function Navbar() {
 return (
   <nav>
      <ul>
         <li>
            <Link to="/">Home</Link>
         </li>
         <li>
            <Link to="/about">About</Link>
         </li>
      </ul>
   </nav>
 );
}
