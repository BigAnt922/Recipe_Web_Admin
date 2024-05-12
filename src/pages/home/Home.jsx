import { Typography } from "@mui/material";
import { useEffect } from "react";
import { updateTitle } from "../../utils/Common";
const Home = () => {
  useEffect(() => {
    updateTitle();
  }, []);

  return <Typography variant="h3">Home</Typography>;
};

export default Home;
