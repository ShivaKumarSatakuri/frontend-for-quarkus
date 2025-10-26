import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    // Call the backend API
    fetch("http://localhost:8080/hello")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => {
        console.error("Error fetching API:", error);
        setMessage("Error connecting to backend");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Home Page</h1>
      <p>Backend says: <strong>{message}</strong></p>
    </div>
  );
};

export default Home;
