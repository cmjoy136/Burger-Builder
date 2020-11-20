import React from "react";

const button = (props) => {
  return <button onClick={props.click}>{props.children}</button>;
};

export default button;
