import { Button } from "@mui/material";
import React from "react";
import "./ButtonCommon.css";

/**
 *
 * @param {{
 * text;
 * onClick;
 * onHover;
 * disabled;
 * }}
 *
 */

const ButtonCommon = ({ text = "", ...restParam }) => {
  return (
    <Button variant="contained" {...restParam}>
      {text}
    </Button>
  );
};

export default ButtonCommon;
