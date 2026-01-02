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
// Started working on my first react project today at the office.
// Worked on creating grids and tables using interstellar framework
// worked on understanding grids. Almost completed the web page today.
// Need to work on mock server data
// Built a  web page today. Need to add react code to it.
// Started understand mock server
// No progress today
// Understood what code I've written on Friday while working.
// Worked on container, box and few other components of interstellar framework
// Worked on mock server today. Need to understand few basics tomorrow
// Completed UI part today. Need to connect it to mock server tomorrow. Need to refine code
// Worked on segregating components today. Need to connect to mock server tomorrow
// No progress today
// Completed setting up mock server. Written unit tests for components
// Worked on fixing bugs in unit tests today. Deployed changes in init env.
// Completed one feature. UI, tests and mock server integration
// react interview questions
// no progress today
// No progress today
// No progress today 
// Worked on dialog boxes today. Will do some progress on system desing concept.
// Completed dialog box feature today. Simplified accept and decline implementation to single class.
// Also, simplified tables implementation.
// Completed URL redirection based on env. Fixing test cases
// no progress today 
// Worked on fixing tests, but no luck
// vaguely fixed the test case and improved coverage
// Completed both stories and fixed tests
//quash commit 3
// Figured out different ways to hot reload quarkus app
// No progress today
// No progress today
// No progress today
// Worked on quarkus APIs.
// No progress today 
// No progress today
// No progress today
// Worked on fixing pom.xml file
// No progress today
// worked on fixing spring boot service issues related to pom.xml
// Tried fixing artifact issues.
// Started implementing API in quarkus.
// Complete Loans onboarding process today.
// Started making notes for loans onboarding process.
// Work on backend code for OAP
// Compled backend api implementation
// Ending year wiht great progress
// Resolved dependency issues. Commented out db code. Need to fix build issue.
// Fixed all dependency issues.