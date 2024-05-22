import { Checkbox, Grid, Typography } from "@mui/material";
import React from "react";
import "./CheckBoxCommon.css";

/**
 *
 * @param {{
 * text;
 * className;
 * checked;
 * onChange;
 * }}
 *
 */

const CheckBoxCommon = ({
  text = "",
  className = "",
  checked = false,
  onChange = {},
}) => {
  return (
    <Grid container alignItems="center" className={className}>
      <Grid item>
        <Checkbox checked={checked} onChange={onChange} />
      </Grid>
      <Grid item>
        <Typography variant="body1">{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default CheckBoxCommon;
