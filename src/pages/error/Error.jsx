import { useEffect } from "react";
import { updateTitle } from "../../utils/Common";
import ErrorComponent from "../../components/error/ErrorComponent";
import { Box } from "@mui/material";
import words from "../../utils/words.json";

const Error = () => {
  useEffect(() => {
    updateTitle();
  }, []);
  return (
    <Box className={"container"}>
      <ErrorComponent heading={words.error.title} errorData={words.error} />
    </Box>
  );
};

export default Error;
