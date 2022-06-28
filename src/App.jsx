import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Welcome/Landing";
import Login from "./components/Welcome/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import TrackerApp from "./TrackerApp";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <TrackerApp />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
