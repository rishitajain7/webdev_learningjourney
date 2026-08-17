# 🃏 React Props – Reusable Card Component

A simple React application demonstrating how to create a **reusable Card component** and pass information to it using **props**.

## 📌 Problem Statement

Create a React component for a card that displays information passed to it as props.

## ✨ Features

* Reusable `Card` component
* Pass card information using React props
* Display card image, title, and description
* Store card data in an array of objects
* Dynamically render multiple cards using `.map()`
* Gradient border styling for each card
* Responsive layout for different screen sizes

## 🛠️ Technologies Used

* React.js
* Vite
* JavaScript
* HTML
* CSS
* React Props

## 📂 Project Structure

```text
props/
├── public/
├── src/
│   ├── components/
│   │   └── Card.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🧩 Props Used

The reusable `Card` component receives three props:

```jsx
function Card({ image, title, description }) {
```

These props are used to display the information for each card.

## 🔄 Dynamic Card Rendering

Card information is stored in an array of objects and displayed dynamically using `.map()`:

```jsx
{cards.map((card) => (
  <Card
    key={card.id}
    image={card.image}
    title={card.title}
    description={card.description}
  />
))}
```

This allows the same `Card` component to be reused for multiple cards.

## 🚀 How to Run

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
npm run dev
```

For network access:

```bash
npm run dev -- --host
```

### 3. Open in Browser

Open the URL provided by Vite in Google Chrome.


## 🎨 Expected Output

The application displays multiple cards in a grid layout. Each card contains an image, title, and description with a colorful gradient border.

## 👩‍💻 Conclusion

This project demonstrates the basic concept of **props in React** by creating a reusable Card component that can receive and display different data dynamically.

## Author 
Rishita Jain