import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);

  function addItem(item) {
    setCart([...cart, item]);
  }

  function calc() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return total;
  }

  return (
    <div className="App">
      <h1>Jesse, We Need to Bake</h1>

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <p>
          <BakeryItem item= {item} name={item.name} description={item.description} price={item.price} image={item.image} addItem={addItem}/>
        </p> 
      ))}

      <div>
        <h2>Cart</h2>
          {cart.map((item, index) => (<p>{item.name}</p>))}
          Total: {calc()}
      </div>
    </div>
  );
}

export default App;
