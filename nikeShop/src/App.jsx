import { Component, useState } from "react";
import "./App.css";
import ShoeList from "./components/ShoeList";
import Button from "@mui/material/Button";

function App() {
  // Add more shoes as needed

  return (
    <div className="App">
      <Button variant="contained">add to cart</Button>
      {/* Use ShoeItem here if needed */}
    </div>
  );
}

export default App;
