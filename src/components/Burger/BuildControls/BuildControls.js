import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Lettuce", type: "lettuce" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          add={() => props.add(control.type)}
          delete={() => props.delete(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}
    </div>
  );
};

export default buildControls;
