import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputPage: React.FC = () => {
  const [number, setNumber] = useState<number | "">("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:8080/test/${number}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //body: JSON.stringify(number),
      });
      const data = await response.json();

      // Navigate to result page with data
      navigate("/result", { state: { result: data } });
    } catch (error) {
      console.error("Error calling backend:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter a Number</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputPage;
