import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputPage from "./InputPage";

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>("Loading...");
  const navigate = useNavigate();

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
      <button onClick={() => navigate("/input")}>Next ➜</button>
    </div>
  );
};

export default Home;
//quash commit 1