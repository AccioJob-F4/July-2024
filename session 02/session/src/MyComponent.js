import React, { useEffect, useContext } from "react";
import { MyContext } from "./context";

// const MyComponent = React.memo(
//   () => {
//     useEffect(() => {
//       return () => {
//         console.log("Unmounting");
//       };
//     }, []);

//     console.log("Rendering MyComponent");
//     return <div>Count: {count}</div>;
//   },
//   (prevProps, nextProps) => {
//     console.log("🚀 ~ nextProps:", nextProps);
//     console.log("🚀 ~ prevProps:", prevProps);
//     return prevProps.count === nextProps.count;
//   }
// );

const MyComponent = () => {
  const value = useContext(MyContext);

  return <div>Count: {value.count}</div>;
};

export default MyComponent;
