import React from "react";
import { connect } from "react-redux";
// import { useSelector } from "react-redux";

// const Counter = ({ count, increment, decrement, reset }) => {
const Counter = (props) => {
  // const store = useSelector((state) => state);
  return (
    <div>
      <h1>Counter Value: {props.count}</h1>
      <h3>Increment Action Count: {props.incrementCount}</h3>
      <h3>Decrement Action Count: {props.decrementCount}</h3>
      <h3>Reset Action Count: {props.resetCount}</h3>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
};

// export default Counter;

const mapStateToProps = (state) => ({
  count: state.count,
  incrementCount: state.incrementActionCount,
  decrementCount: state.decrementActionCount,
  resetCount: state.resetActionCount,
});

// const mapStateToProps = (state, ownProps) => ({
//   count: state.count,
//   ...ownProps,
// });

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   dispatch: dispatch,
//   ...ownProps,
// });

export default connect(mapStateToProps, null)(Counter);
