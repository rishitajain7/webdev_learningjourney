import { useState, useEffect } from "react";

function useFetch(url) {
  // This will store the data we get from the API
  const [data, setData] = useState(null);

  // Initially the data is loading
  const [loading, setLoading] = useState(true);

  // This will store an error if the API request fails
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to get data from the API
    const getData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);

        // Check if the request was successful
        if (!response.ok) {
          throw new Error("Something went wrong while fetching data");
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        // Loading is finished whether request succeeds or fails
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  // Return these values so other components can use the hook
  return {
    data,
    loading,
    error,
  };
}

export default useFetch;