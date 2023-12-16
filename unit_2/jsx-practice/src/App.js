import logo from './logo.svg';
import './App.css';

const products = [
  {
    name: "allen wrench",
    price: 2.99,
    description: "handy tool"
  },
  {
    name: "cornucopia",
    price: 5.99,
    description: "festive holiday decoration"
  },
  {
    name: "banana",
    price: 0.99,
    description: "fruit of potassium"
  },
  {
    name: "jack-o-lantern",
    price: 3.99,
    description: "spooky seasonal fun"
  },
  {
    name: "doggie treat box",
    price: 5.99,
    description: "fido loves 'em"
  },
  {
    name: "LED lightbulb",
    price: 6.55,
    description: "It's super efficient!"
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black!"
  }
]
    

function App() {
  
  return(
    <div className="App">
         <h1> Hi there! </h1>
        <ul>
          {products.map(item => {
             return (
          <li>{item.name} <button> Add to cart </button></li>
          )}
          )}
        </ul>
    </div>
    );
}

export default App;
