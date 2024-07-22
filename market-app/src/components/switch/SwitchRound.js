import React from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function SwitchRound() {
  const handleSwitch = (event) => {
    event.preventDefault();
    alert();
  };

  return (
    <div>
      <Switch {...label} defaultChecked color="secondary" />
    </div>
  );
}

export default SwitchRound;
