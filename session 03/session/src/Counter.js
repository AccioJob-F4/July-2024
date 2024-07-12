import React from "react";
// import { connect } from "react-redux";
import { useSelector } from "react-redux";

// const Counter = ({ count, increment, decrement, reset }) => {
const Counter = ({ increment, decrement, reset }) => {
  const store = useSelector((state) => state);
  return (
    <div>
      <h1>Counter Value: {store.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;

// const mapStateToProps = (state) => ({
//   count: state.count,
// });

// export default connect(mapStateToProps)(Counter);
