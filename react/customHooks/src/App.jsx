import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=8"
  );

  if (loading) {
    return <h2 className="message">Loading...</h2>;
  }

  if (error) {
    return <h2 className="message">{error}</h2>;
  }

  return (
    <div className="app">
      <h1>Photos</h1>

      <div className="cards">
        {data.map((photo, index) => (
          <div className="card" key={photo.id}>
            <div className={`box box${index + 1}`}>
              {photo.id} × {photo.id}
            </div>

            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;