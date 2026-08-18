import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Our Website</h1>
      <p>Explore our website and discover amazing content.</p>

      <div className="buttons">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>

      <div className="cards">
        <div className="card">
          <h2>Profile</h2>
          <p>View your profile information.</p>
        </div>

        <div className="card">
          <h2>Posts</h2>
          <p>View and manage your posts.</p>
        </div>

        <div className="card">
          <h2>Settings</h2>
          <p>Manage your account settings.</p>
        </div>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="form-page">
      <div className="form-box">
        <h1>Login</h1>

        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button>Login</button>

        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

function Signup() {
  return (
    <div className="form-page">
      <div className="form-box">
        <h1>Sign Up</h1>

        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button>Sign Up</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h2>My Website</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;