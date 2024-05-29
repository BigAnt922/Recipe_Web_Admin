import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import "./DropDownCommon.css";

/**
 *
 * @param {{
 * label;
 * items;
 * returnData;
 * }}
 *
 */

const DropDownCommon = ({ label, items = [], returnData }) => {
  const [data, setData] = useState("");

  return (
    <FormControl fullWidth>
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        label={label}
        value={data}
        onChange={(e) => {
          const selectedRole = e.target.value;
          returnData(selectedRole);
          setData(selectedRole);
        }}
      >
        {items.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownCommon;
