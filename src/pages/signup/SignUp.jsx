import { useEffect } from "react";
import "./SignUp.css";
import { updateTitle } from "../../utils/Common";
import words from "../../utils/words.json";
import { Box } from "@mui/material";
import SignUpComponent from "../../components/signup/SignUpComponent";

const SignUp = () => {
  useEffect(() => {
    updateTitle();
  }, []);
  return (
    <Box className={"container"}>
      <SignUpComponent heading={words.heading} signupData={words.signup} />
    </Box>
  );
};

export default SignUp;
