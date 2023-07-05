import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Link } from 'react-router-dom';
import Aboutpage from "./Components/Aboutpage";
import Navbar from "./Components/Navbar";
import Simulator from "./Components/Simulator";
import Homepage from "./Components/Homepage";
import MyCharts from "./Components/chart";
import Mychart from "./Components/Chartzz";
import Table from "./Components/Table";
import Mychart1 from "./Components/Mychart1";
// import Input from "./Components/Input";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import Apicalling from "./Apicalling";

const firebaseConfig = {
  apiKey: "AIzaSyC24gl1D3QunjbVMv9-GPtPYevvukXnDq4",
  authDomain: "pulsestock-3d52c.firebaseapp.com",
  projectId: "pulsestock-3d52c",
  storageBucket: "pulsestock-3d52c.appspot.com",
  messagingSenderId: "650075635143",
  appId: "1:650075635143:web:d2f691bdded4edeb70ede2",
  measurementId: "G-9W55M2BEH7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <Navbar />
      {/* <Input /> */}
      <Homepage />
      <Aboutpage />
      <Simulator />
      <Table />
      <div
        className="container"
        style={{
          border: "3px solid white",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <div className="" style={{ textAlign: "center" }} id="predi">
          <h2 style={{ color: "white" }}> PREDICTED CHARTS</h2>
          <h4 style={{ color: "white" }}>Sentiment vs Without-Sentiment</h4>
        </div>
        <div
          className="container"
          style={{
            alignContent: "center",
            alignItems: "centre",
            marginLeft: "300px",
          }}
        >
          <Mychart />
        </div>
        <table>
          <tr>
            <td>
              <h4 style={{ color: "white" }}>Short Term Prediction</h4>
            </td>
            <td>
              <h4 style={{ color: "white" }}>Long Term Prediction</h4>
            </td>
          </tr>
          <tr>
            <td>
              <div className="container">
                <Mychart1 />{" "}
              </div>
            </td>

            <td>
              <div className="container">
                <MyCharts />{" "}
              </div>
            </td>
          </tr>
        </table>{" "}
      </div>
    </div>
  );
}

export default App;

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// reportWebVitals();
