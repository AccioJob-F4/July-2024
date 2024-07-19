import React, { useState } from "react";
import Snackbar from "./Snackbar";

const App = () => {
  const [snackbar, setSnackbar] = useState({
    show: false,
    message: "",
    type: "",
  });

  const showSnackbar = (message, type) => {
    setSnackbar({
      show: true,
      message,
      type,
      duration: 3000, // Duration in milliseconds
    });
  };

  return (
    <div>
      <button
        onClick={() => showSnackbar("This is a success message!", "success")}
      >
        Show Success
      </button>
      <button
        onClick={() => showSnackbar("This is an error message!", "error")}
      >
        Show Error
      </button>
      <button onClick={() => showSnackbar("This is an info message!", "info")}>
        Show Info
      </button>
      <button
        onClick={() => showSnackbar("This is a warning message!", "warning")}
      >
        Show Warning
      </button>

      <Snackbar
        message={snackbar.message}
        type={snackbar.type}
        show={snackbar.show}
        duration={snackbar.duration}
        onClose={() => setSnackbar({ ...snackbar, show: false })}
      />
    </div>
  );
};

export default App;
