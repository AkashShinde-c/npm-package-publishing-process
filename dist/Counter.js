import React, { useState } from 'react';
export default function Counter() {
  const [counter, setCounter] = useState(0);
  const incrementfun = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "testBtn"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h1", null, "Current counter ", counter), /*#__PURE__*/React.createElement("button", {
    onClick: incrementfun
  }, "Incrment"), /*#__PURE__*/React.createElement("button", {
    onClick: decrement
  }, "Decrement"));
}