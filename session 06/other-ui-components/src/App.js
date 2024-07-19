import React from "react";
import ReactDOM from "react-dom";
import Tooltip from "./Tooltip/Tooltip";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import Rating from "./Rating/Rating";
import TreeView from "./TreeView/TreeView";
import Card from "./Card/Card";

import "./App.css";

const App = () => {
  const treeData = [
    {
      label: "Root 1",
      children: [
        {
          label: "Child 1.1",
          children: [
            { label: "Grandchild 1.1.1" },
            { label: "Grandchild 1.1.2" },
          ],
        },
        { label: "Child 1.2" },
      ],
    },
    { label: "Root 2" },
  ];

  return (
    <div className="App">
      <hr />

      <Tooltip text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>
      <hr />

      <Breadcrumbs items={["Home", "Category", "Product"]} />

      <hr />
      <Rating totalStars={5} />

      <hr />
      <TreeView data={treeData} />

      <hr />
      <Card title="Card Title" content="This is the card content." />
    </div>
  );
};

export default App;
