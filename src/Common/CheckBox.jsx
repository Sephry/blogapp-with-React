import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

export default function CheckBox({ changeChecked, cuisine }) {
  const { checked, label, id } = cuisine;
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ "aria-label": "checkbox with small size" }}
          />
        }
        label={label}
      />
    </div>
  );
}
