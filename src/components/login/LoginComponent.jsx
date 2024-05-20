import React from "react";
import "./LoinComponent.css";
import { Card, Grid, TextField, Typography } from "@mui/material";
import TextFieldCommon from "../common/textField/TextFieldCommon";

const LoginComponent = ({ heading, loginData }) => {
  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      className="container"
    >
      <Grid item>
        <Typography variant="h2" className="heading">
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
              <TextFieldCommon type="text" label="username" />
            </Grid>
            <Grid item>
              <TextFieldCommon type="password" label="password" />
            </Grid>
            <Grid item>show password</Grid>
            <Grid item>login</Grid>
            <Grid item>sign up</Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginComponent;
