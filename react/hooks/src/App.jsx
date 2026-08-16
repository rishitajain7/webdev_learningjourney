import { useState } from "react";
import "./App.css";

const shoes = [
  {
    id:1,
    name: "Campus Men's Sneakers",
    price: 1650,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNwOTCdnXPHrroE0BHfIZ-ccO4yDrToIfWjEXFIj61A&s",
  },
  {
    id:2,
    name: "Campus Men's OG-45 Sneakers",
    price: 1795,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXDj302LbqMRwFWXn_CbAWonaplmmHT6_qdJS7U-rS4g&s=10",
  },
  {
    id:3,
    name: "Running Shoes",
    price: 11220,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8olEUs1CV8jmKRqFE3Il8vTrOQ1QkLMFkMIO65QOLng&s",
  },
  {
    id:4,
    name: "Sports Shoes",
    price: 11590,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSzGyMotbbYd0qeCySnpKW2R5G92r_UVyA-PVSVulUw&s=100",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (shoe) => {
    setCart((currentCart) => [...currentCart, shoe]);
  };
  const removeFromCart = (indexToRemove) => {
    setCart((currentCart) =>
      currentCart.filter((_, index) => index !== indexToRemove)
    );
  };
  const total = cart.reduce((sum, shoe) => sum + shoe.price, 0);

  return (
    <div className="app">
      <nav>
        <h2>👟</h2>
        <div>
          <span>Home</span>
          <span>Categories</span>
          <span>About Us</span>
        </div>
      </nav>

      <div className="main-container">
        <section className="shoes-section">
          <h1>Available Shoes</h1>
          <div className="shoe-grid">
            {shoes.map((shoe) => (
              <div className="shoe-card" key={shoe.id}>
                <img src={shoe.image} alt={shoe.name} />
                <h3>{shoe.name}</h3>
                <p>₹{shoe.price}</p>
                <button onClick={() => addToCart(shoe)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="cart-section">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <div className="cart-items">
              {cart.map((shoe, index) => (
                <div className="cart-item" key={`${shoe.id}-${index}`}>
                  <div>
                    <h4>{shoe.name}</h4>
                    <p>₹{shoe.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="cart-total">
            <h3>Total: ₹{total}</h3>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;