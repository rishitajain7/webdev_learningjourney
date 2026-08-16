# 👟 Shoe Store – React Shopping Cart

A simple online shoe store built with **React.js** and **Vite**. Users can browse shoes, add them to a shopping cart, remove items, and view the total cart price.

## 📌 Problem Statement

Create a React application for an online shoe store where users can browse a variety of shoes and add them to their shopping cart. The application uses the React `useState` Hook to manage the shopping cart and allows users to add or remove items.

## ✨ Features

* Display available shoes with their name, price, and image
* Add shoes to the shopping cart
* Remove items from the shopping cart
* Display selected shoes in the cart
* Calculate the total cart price
* Manage cart data using React `useState`
* Simple and responsive user interface

## 🛠️ Technologies Used

* React.js
* Vite
* JavaScript
* HTML
* CSS
* React Hooks (`useState`)

## 🚀 How to Run

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

For network access:

```bash
npm run dev -- --host
```

Then open the URL provided by Vite in your browser.

## 🧠 React Hook Used

The application uses the `useState` Hook to manage the shopping cart:

```jsx
const [cart, setCart] = useState([]);
```

The cart state is updated whenever a user adds or removes a shoe.

## 🛒 Shopping Cart

The shopping cart allows users to:

1. Add a shoe using the **Add to Cart** button.
2. View the selected shoes and their prices.
3. Remove items using the **Remove** button.
4. View the total cost of all items in the cart.

## 📂 Project Structure

```text
hooks/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Learning Outcomes

This project demonstrates:

* React application development with Vite
* State management using `useState`
* Event handling in React
* Dynamic rendering using `.map()`
* Adding and removing items from an array
* Calculating dynamic values such as cart totals

## 📸 Expected Output

The application displays a shoe store with available products on the left and a shopping cart on the right. Users can add and remove shoes, while the cart total updates dynamically.

## 👩‍💻 Conclusion

This project provides a practical introduction to React Hooks, particularly `useState`, by implementing a simple and interactive shopping cart application.

## Author
Rishita Jain