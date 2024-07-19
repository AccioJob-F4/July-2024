// src/App.js

import React from "react";
import Accordion from "./Accordion";
import "./App.css"; // Import App level styles if any
import "./Accordion.css"; // Import Accordion styles

function App() {
  return (
    <div className="App">
      <h1>React Accordion</h1>
      <Accordion title="Section 1">
        <p>This is the content for section 1.</p>
      </Accordion>
      <Accordion title="Section 2">
        <p>This is the content for section 2.</p>
      </Accordion>
      <Accordion title="Section 3">
        <p>This is the content for section 3.</p>
      </Accordion>
    </div>
  );
}

export default App;
