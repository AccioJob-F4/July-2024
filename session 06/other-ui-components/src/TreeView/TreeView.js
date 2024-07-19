import React, { useState } from "react";
import "./TreeView.css";

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="tree-node">
      <div className="node-label" onClick={() => setExpanded(!expanded)}>
        {node.label}
      </div>
      {expanded && node.children && (
        <div className="node-children">
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView = ({ data }) => {
  return (
    <div className="tree-view">
      {data.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

export default TreeView;
