import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const result = (location.state as { result: any })?.result;

  if (!result) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>No data found</h2>
        <button onClick={() => navigate("/input")}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Response from Backend</h2>
      <table align="center" border={1} cellPadding={5} cellSpacing={0}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{result.id}</td>
              <td>{result.name}</td>
          </tr>
        </tbody>
      </table>
      {/* <pre>{JSON.stringify(result, null, 2)}</pre> */}
      <button onClick={() => navigate("/input")}>Try Again</button>
    </div>
  );
};

export default ResultPage;
//No progress today, need to find a react tutorial to follow