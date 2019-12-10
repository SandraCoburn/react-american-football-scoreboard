import React from "react";

import "./App.css";

const BottomRow = (props) => {

  const downValue = props.downValue;
  const ballOnValue = props.ballOnValue;

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downValue}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{ballOnValue}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOnValue}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{downValue}</div>
      </div>
    </div>
  );
};

export default BottomRow;
