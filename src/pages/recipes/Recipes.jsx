import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { updateTitle } from "../../utils/Common";

const Recipes = () => {
  useEffect(() => {
    updateTitle();
  }, []);
  return <Typography variant="h3">Recipe</Typography>;
};

export default Recipes;
