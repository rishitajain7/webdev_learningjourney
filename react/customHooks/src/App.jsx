import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  // Calling our custom hook with the API URL
  const {
    data: photos,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/photos?_limit=8");

  // Show this while the API request is running
  if (loading) {
    return (
      <div className="message">
        <h2>Loading photos...</h2>
      </div>
    );
  }

  // Show this if something goes wrong
  if (error) {
    return (
      <div className="message">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Photos</h1>

      <div className="photo-container">
        {photos.map((photo) => (
          <div className="photo-card" key={photo.id}>
            <img src={photo.url} alt={photo.title} />

            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;