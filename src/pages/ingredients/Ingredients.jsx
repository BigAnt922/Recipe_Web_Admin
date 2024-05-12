import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { updateTitle } from "../../utils/Common";

const Ingredients = () => {
  useEffect(() => {
    updateTitle();
  }, []);
  return <Typography variant="h3">Ingredient</Typography>;
};

export default Ingredients;
