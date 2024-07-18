import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData("Welcome to Home Page!");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!data) return <div>Loading..</div>;
  return <h1>{data}</h1>;
};

export default Home;
