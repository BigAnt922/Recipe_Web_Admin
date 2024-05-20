import { useEffect } from "react";
import "./Login.css";
import { updateTitle } from "../../utils/Common";
import LoginComponent from "../../components/login/LoginComponent";
import words from "../../utils/words.json";
import { Box } from "@mui/material";

const Login = () => {
  useEffect(() => {
    updateTitle();
  }, []);
  return (
    <Box className={"container"}>
      <LoginComponent heading={words.heading} loginData={words.login} />
    </Box>
  );
};

export default Login;
