import { Typography } from "@mui/material";
import { useEffect } from "react";
import { updateTitle } from "../../utils/Common";

const Error = () => {
  useEffect(() => {
    updateTitle();
  }, []);
  return <Typography variant="h3">Error</Typography>;
};

export default Error;
