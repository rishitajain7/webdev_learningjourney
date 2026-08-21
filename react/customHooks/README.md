# React Custom Hook - useFetch

## About

This is a small React project made to understand **Custom Hooks**.

In this project, I created a custom Hook called `useFetch` which fetches data from an API. I also added loading and error handling.

The data is displayed in the form of cards on the page.

## Problem Statement

The task was to create a custom Hook in React which can fetch data from an API.

The Hook should:

* Take a URL as input
* Fetch data from the API
* Show loading while data is being fetched
* Show an error if something goes wrong
* Return data, loading and error

## What I Used

* React
* Vite
* JavaScript
* CSS
* `useState`
* `useEffect`
* `fetch()`

## Custom Hook

I created a file called:

```text
src/hooks/useFetch.js
```

The Hook takes a URL:

```javascript
useFetch(url)
```

and returns:

```text
data
loading
error
```

I used `useState` for storing these values and `useEffect` for running the API request.

## API Used

I used the JSONPlaceholder API for getting sample data.

```text
https://jsonplaceholder.typicode.com/photos?_limit=8
```

I did not use the actual photos in the final design. Instead, I used different solid colors for the boxes and displayed the data from the API.

## Project Structure

```text
custom-hooks/
│
├── src/
│   ├── hooks/
│   │   └── useFetch.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
└── README.md
```

## How to Run

### 1. Open the project folder

Open the project folder in VS Code and open the terminal.

If the terminal is in the main `react` folder, first go inside the project folder:

```bash
cd custom-hooks
```

### 2. Install packages

Run this the first time:

```bash
npm install
```

### 3. Start the project

Run:

```bash
npm run dev
```

Vite will show a local URL like:

```text
http://localhost:5173/
```

Open this URL in Google Chrome.

### 4. Run on Network

If I want to access the project using the Network URL, I can run:

```bash
npm run dev -- --host
```

Vite will then show something like:

```text
Local:   http://localhost:5173/
Network: http://192.168.x.x:5173/
```

The Network URL shown by Vite can be opened in Chrome.

### 5. Next Time

After the packages have already been installed, I don't need to run `npm install` again.

I can simply use:

```bash
npm run dev
```

or for Network:

```bash
npm run dev -- --host
```

## What I Learned

While making this project, I learned how custom Hooks work in React.

I understood that we can put some common logic inside a separate Hook instead of writing everything inside `App.jsx`.

I also learned about:

* `useState`
* `useEffect`
* Fetching data from an API
* Loading and error states
* Creating and using a custom Hook
* Displaying API data using `.map()`

## Conclusion

This project helped me understand the basic use of custom Hooks in React. The `useFetch` Hook keeps the fetching part separate from the main application, so the same logic can be used again when needed.

## Author
Rishita Jain