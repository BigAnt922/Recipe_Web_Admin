import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { updateTitle } from "../../utils/Common";

const SignUp = () => {
  useEffect(() => {
    updateTitle();
  }, []);
  return <Typography variant="h3">SignUp</Typography>;
};

export default SignUp;
