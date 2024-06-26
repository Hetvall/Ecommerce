import { useState, useEffect } from "react";

const useFetch = (initial, endpoint) => {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = fetch(endpoint);
    getData
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return [data, loading, error];
};

export default useFetch;
