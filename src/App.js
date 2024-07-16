import React from 'react'
import HomePage from "./components/HomePage";
import LoginComponent from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
           <Route exact path="/" element={<LoginComponent mode="login" />} />
           <Route exact path="/home" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App