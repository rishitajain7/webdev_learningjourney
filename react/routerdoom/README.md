# React Router Navigation

This project is a simple React application created to understand how **routing and navigation work in React** using `react-router-dom`.

The application has four different pages, and users can move between them without refreshing the entire website.

## Pages

The project includes these four routes:

* **Home** – The main welcome page.
* **Dashboard** – Shows some basic dashboard cards.
* **Login** – A simple login form.
* **Signup** – A simple registration form.

## Technologies Used

* React.js
* Vite
* JavaScript
* CSS
* React Router DOM

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## How Routing Works

`BrowserRouter` is used to enable routing in the application.

`Routes` contains all the routes, while `Route` decides which component should be displayed for a particular URL.

For navigation, the project uses `Link` from `react-router-dom`.
Clicking this link opens the Dashboard page without reloading the website.

## Installation

First, install the required packages:

```bash
npm install
npm install react-router-dom
```

## Run the Project

Start the development server using:

```bash
npm run dev
```
Then open the localhost URL shown in the terminal in your browser.

## Features

* Simple navigation bar
* Four different React routes
* Login and Signup forms
* Dashboard with cards
* Responsive design
* Clean and simple CSS styling
* Navigation without full-page reloads

## Author 
Rishita Jain