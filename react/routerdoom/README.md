# React Router Task

This is a small React project I made to understand how routing works in React.

I used React Router DOM to create different pages and move between them without refreshing the complete website.

## Pages in this project

The application has four main routes:

* Home - `/`
* Dashboard - `/dashboard`
* Login - `/login`
* Sign Up - `/signup`

## What I learned

While making this task, I understood the basic use of:

* `BrowserRouter`
* `Routes`
* `Route`
* `Link`

`BrowserRouter` is used around the application so React can keep track of the URL.

`Routes` contains all the routes of the application.

`Route` connects a URL path with the component that should be displayed.

For example:

```jsx
<Route path="/login" element={<Login />} />
```

This means that when the URL becomes `/login`, the Login component is shown.

I used `Link` for navigation instead of normal HTML links because `Link` changes the route without reloading the complete page.

## How to run the project

First install the required packages:

```bash
npm install
```

Then start the development server:

```bash
npm run dev
```

After that, open the local URL shown in the terminal.

## Project structure

```text
src/
│
├── App.jsx
├── App.css
└── main.jsx
│
├── package.json
└── README.md
```

## My understanding

The main thing I understood from this task is that React Router connects the browser URL with the React component that needs to be displayed.

For example:

`/dashboard` → Dashboard component

`/login` → Login component

So instead of creating completely separate HTML pages, React can display different components depending on the current route.
