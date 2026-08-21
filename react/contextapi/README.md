# React Shoe Store

## About the Project

This is a small React project based on an online shoe store.

I made this project to understand how **Context API** works in React. The main purpose was to manage the shopping cart from one place instead of passing the cart data through many components.

The website has some shoes which can be added to the cart. The quantity of each shoe can also be increased or decreased.

## Features

- Shows different shoes with their name and price
- Add shoes to the cart
- Increase or decrease shoe quantity
- Automatically calculates the total price
- Shows the selected items in the cart
- Proceed to a simple payment page
- Payment page shows the order summary
- Simple card details form

## React Concepts Used

In this project I used:

- React
- Vite
- JavaScript
- Context API
- `useState`
- `useContext`
- CSS

## Project Structure

src/
│
├── context/
│   └── CartContext.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx


## How to run
Open the terminal inside the project folder.

1. Install Packages

Run this command the first time:
 - npm install
This installs the required packages for the project.

2. Start the Project

After installing the packages, run:
 - npm run dev

Vite will show something like:
Local:   http://localhost:5173/
Network: use --host to expose

Open the Local address in Google Chrome:
http://localhost:5173/

The website should now open in Chrome.
Run on Network

If I want to run the project using the Network URL, use:
npm run dev -- --host

Vite will show a Network address, for example:
Network: http://192.168.1.5:5173/

3. Next time I can simply run:
 -npm run dev


## Author 
Rishita Jain