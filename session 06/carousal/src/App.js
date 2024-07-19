import React from "react";
import Carousel from "./Carousel";
import "./App.css";

const items = [
  "https://via.placeholder.com/800x400?text=Slide+1",
  "https://via.placeholder.com/800x400?text=Slide+2",
  "https://via.placeholder.com/800x400?text=Slide+3",
];

function App() {
  return (
    <div className="App">
      <Carousel items={items} />
    </div>
  );
}

export default App;
