# ⚛️ React Custom Hook – useFetch

A React application demonstrating how to create and use a **custom `useFetch` Hook** for fetching data from an API.

## 📌 Problem Statement

Create a custom Hook in React that simplifies the process of fetching data from an API.

## ✨ Features

* Custom `useFetch` Hook
* Accepts a URL as a parameter
* Fetches data using the JavaScript `fetch()` method
* Handles loading state
* Handles API errors
* Displays fetched photo data
* Reusable custom Hook
* Responsive photo grid

## 🛠️ Technologies Used

* React.js
* Vite
* JavaScript
* HTML
* CSS
* React Hooks
* Custom Hook

## 📂 Project Structure

```text
custom-hooks/
├── public/
├── src/
│   ├── hooks/
│   │   └── useFetch.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🧩 Custom Hook

The project contains a custom Hook named `useFetch`.

```javascript
function useFetch(url) {
  // Fetch data from the provided URL
}
```

The Hook accepts a URL and returns three values:

```javascript
{
  data,
  loading,
  error
}
```

### `data`

Contains the data received from the API.

### `loading`

A Boolean value that indicates whether the API request is still in progress.

### `error`

Contains an error message if the API request fails.

## 🌐 API Used

This project uses the JSONPlaceholder Photos API:

```text
https://jsonplaceholder.typicode.com/photos
```

A limited number of photos are fetched and displayed in the application.

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

## 👩‍💻 Conclusion

The project demonstrates how a custom `useFetch` Hook can simplify API calls in React by keeping fetching logic separate from the UI component. The Hook can be reused with different API URLs in other React components.


## Author 
Rishita Jain