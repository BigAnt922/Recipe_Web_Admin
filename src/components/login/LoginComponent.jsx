import React, { useState } from "react";
import "./LoinComponent.css";
import { Card, Grid, Typography } from "@mui/material";
import TextFieldCommon from "../common/textField/TextFieldCommon";
import CheckBoxCommon from "../common/checkbox/CheckBoxCommon";
import ButtonCommon from "../common/button/ButtonCommon";
import { useNavigate } from "react-router-dom";

const LoginComponent = ({ heading, loginData }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState({
    data: "",
    show: false,
  });

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      className="container"
    >
      <Grid item>
        <Typography variant="h2" className="login-heading">
          {heading}
        </Typography>
      </Grid>

      <Grid item>
        <Card raised className="loginContainer">
          <Grid
            container
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="center"
            className="formContainer"
          >
            <Grid item>
              <TextFieldCommon
                type="text"
                label={loginData.username}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextFieldCommon
                type={password.show ? "text" : "password"}
                label={loginData.password}
                value={password.data}
                onChange={(e) =>
                  setPassword({ ...password, data: e.target.value })
                }
              />
            </Grid>
            <Grid item>
              <CheckBoxCommon
                text={loginData.showPassword}
                checked={password.show}
                className="check_box_login"
                onChange={() =>
                  setPassword({ ...password, show: !password.show })
                }
              />
            </Grid>
            <Grid item>
              <ButtonCommon
                text={loginData.loginButton}
                disabled={!(username && password.data)}
                onClick={() => console.log(username, password)}
              />
            </Grid>
            <Grid item>
              <ButtonCommon
                text={loginData.signupButton}
                onClick={() => navigate(loginData.signupLink)}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginComponent;
