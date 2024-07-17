import React from "react";
import { DECREMENT, INCREMENT, RESET } from "./actions";
import Counter from "./Counter";
import { connect } from "react-redux";

// import { useDispatch } from "react-redux";

const App = (props) => {
  // const dispatch = useDispatch();

  const increment = () => {
    props.dispatch({ type: INCREMENT });
  };
  const decrement = () => {
    props.dispatch({ type: DECREMENT });
  };
  const reset = () => {
    props.dispatch({ type: RESET });
  };

  return (
    <div>
      <Counter increment={increment} decrement={decrement} reset={reset} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
});

export default connect(null, mapDispatchToProps)(App);

// export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // const grizzlyBear = {
// //   name: "Peter",
// //   age: 30,
// //   city: "Bangalore",
// //   password: "honey comb",
// // };

// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://randomuser.me/apikj/")
//       .then((resp) => {
//         console.log("🚀 ~ axios.get ~ resp:", resp);
//         setData(resp.data);
//       })
//       .catch((error) => {
//         console.log("🚀 ~ useEffect ~ error:", error);
//       });
//   }, []);

//   if (!data) {
//     return <div>LOADING...</div>;
//   }

//   // const replacer = ["name", "city"];

//   return (
//     <div>
//       <h1>Data from Axios</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//       {/* <pre>{JSON.stringify(grizzlyBear, null, 2)}</pre>
//       <hr />
//       <pre>{JSON.stringify(grizzlyBear, replacer, 2)}</pre> */}
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const source = axios.CancelToken.source();

//     const fetchData = async () => {
//       try {
//         const resp = await axios.get("https://randomuser.me/api", {
//           cancelToken: source.token,
//         });
//         setData(resp.data);
//       } catch (err) {
//         console.log("🚀 ~ fetchData ~ err:", err);
//         if (axios.isCancel(err)) {
//           console.log("Request Cancelled: ", err.message);
//         } else {
//           setError(err);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();

//     return () => {
//       source.cancel("Operation canceled by the user.");
//     };
//   }, []);

//   if (loading) return <div>LOADING...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <>
//       <h1>Data from Axios</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </>
//   );
// };

// export default App;
