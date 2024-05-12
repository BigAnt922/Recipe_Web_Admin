import { Typography } from "@mui/material";
import { useEffect } from "react";
import { updateTitle } from "../../utils/Common";

const Catagories = () => {
  useEffect(() => {
    updateTitle();
  }, []);
  return <Typography variant="h3">Catagories</Typography>;
};

export default Catagories;
