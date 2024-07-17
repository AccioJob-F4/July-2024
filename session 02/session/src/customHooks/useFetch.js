// "useFetch"
// which manage the fetching state, error handling, and response data

// USAGE:
// const { data, loading, error } = useFetch(url, options);

// options: This object can contain various settings to customize the HTTP request, such as the HTTP method, headers, body, and other options.

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

// const { data, loading, error } = useFetch(url, { method: "GET" });
