
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Generator from "./components/Generator";
import Homepage from "./components/Homepage";
import Categorybased from "./components/Categorybased";
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Generator" element={<Generator />} />
        <Route path="/Categorybased" element={<Categorybased />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

