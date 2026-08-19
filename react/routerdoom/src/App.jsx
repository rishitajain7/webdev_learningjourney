import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Home page
function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to my React Router project.</p>
      <p>This is the home page of the application.</p>
    </div>
  );
}

// Dashboard page
function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>This is the dashboard page.</p>
      <p>Users can see their information here.</p>
    </div>
  );
}

// Login page
function Login() {
  return (
    <div className="page">
      <h1>Login</h1>

      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />

      <button>Login</button>
    </div>
  );
}

// Signup page
function Signup() {
  return (
    <div className="page">
      <h1>Sign Up</h1>

      <input type="text" placeholder="Enter your name" />
      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Create a password" />

      <button>Sign Up</button>
    </div>
  );
}

function App() {
  return (
    // BrowserRouter keeps track of the URL in the browser.
    <BrowserRouter>
      <div className="app">

        <nav className="navbar">
          <h2>My React App</h2>

          <div className="links">
            {/* Link changes the URL without refreshing the whole page */}
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>

        {/* Routes decides which component should be shown */}
        <Routes>

          {/* When URL is /, Home component will be displayed */}
          <Route path="/" element={<Home />} />

          {/* Dashboard route */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />

          {/* Signup route */}
          <Route path="/signup" element={<Signup />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;