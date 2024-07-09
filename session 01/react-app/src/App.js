import React, { Component, useState } from "react";
import Dummy from "./Dummy";

// let counter = 0;
// // FUNCTIONAL BASED COMPONENT
// const App = () => {
//   const [count, setCount] = useState(0);

//   // const/let/var a = "";

//   const handleAction = (action) => {
//     if (action === "+") {
//       setCount(count + 1);
//       counter += 1;
//     } else {
//       setCount(count - 1);
//       counter -= 1;
//     }

//     console.log("🚀 ~ counter:", counter);
//   };

//   return (
//     <div>
//       Counter Value: {count}
//       <br />
//       <div>
//         <button
//           onClick={() => {
//             handleAction("+");
//           }}
//         >
//           +
//         </button>
//         <button
//           onClick={() => {
//             handleAction("-");
//           }}
//         >
//           -
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      showDummy: true,
    };
  }

  componentDidMount() {
    // logic
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("🚀 ~ App ~ nextState:", nextState);
    console.log("🚀 ~ App ~ this.state:", this.state);
    return true;
  }

  componentDidUpdate() {}

  handleAction = (action) => {
    if (action === "+") {
      this.setState({ ...this.state, count: this.state.count + 1 });
    } else {
      this.setState({ ...this.state, count: this.state.count - 1 });
    }
  };

  handleUnmounting = () => {
    this.setState({ ...this.state, showDummy: !this.state.showDummy });
  };

  render() {
    return (
      <div>
        Counter Value: {this.state.count}
        <br />
        <div>
          <button
            onClick={() => {
              this.handleAction("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              this.handleAction("-");
            }}
          >
            -
          </button>
        </div>
        <button
          onClick={() => {
            this.handleUnmounting();
          }}
        >
          {this.state.showDummy ? "Remove" : "Add"}
        </button>
        {this.state.showDummy ? <Dummy /> : null}
      </div>
    );
  }
}

export default App;
