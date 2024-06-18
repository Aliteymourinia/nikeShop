import { Component, useState } from "react";
import "./App.css";
import ShoeList from "./components/ShoeList";
import Navbar from "./components/Navbar";
import Button from "@mui/material/Button";

function App() {
  // Add more shoes as needed

  return (
    <div className="App">
      <Button variant="contained">Hello world</Button>
      <Navbar />
      {/* Use ShoeItem here if needed */}
      <h1>hhh</h1>
    </div>
  );
}

export default App;
