import React, { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

import useWindowWidth from "./customHooks/useWindowWidth";
import useLocalStorageWithExpiry from "./customHooks/useLocalStorageWithExpiry";
// import MyComponent from "./MyComponent";
// import { MyContext } from "./context";

// function App() {
//   const [count, setCount] = useState(0);
//   const [otherState, setOtherState] = useState(true);

//   const increment = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   useEffect(() => {
//     setOtherState(otherState + count);
//   }, [count]);

//   return (
//     <MyContext.Provider value={{ count }}>
//       <div>
//         {otherState && <MyComponent />}
//         <button onClick={increment}>Increment</button>
//         <button onClick={() => setOtherState(!otherState)}>
//           {otherState ? "Hide" : "Show"}
//         </button>
//       </div>
//     </MyContext.Provider>
//   );
// }

const App = () => {
  const [count, setCount] = useState(0);
  // const inputRef = useRef(null);
  const prevCountRef = useRef();
  const [name, setName] = useLocalStorageWithExpiry(
    "name",
    "Divyansh Singh",
    5000
  );

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  console.log(useWindowWidth());

  // const focusInput = () => {
  //   if (inputRef.current) inputRef.current.focus();
  // };

  const prevCount = prevCountRef.current;

  return (
    <div>
      {/* <input
        ref={inputRef}
        type="text"
        placeholder="Click below button to focus this element"
      />
      <button onClick={focusInput}>Focus Input</button> */}
      <h1>Current Count: {count}</h1>
      <h1>Previous Count: {prevCount}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("🚀 ~ App ~ count:", count);
        }}
      >
        Increment
      </button>
      {/* <button onClick={() => {}}>Change Name</button> */}
    </div>
  );
};

export default App;
