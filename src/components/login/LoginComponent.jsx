import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "../login/LoinComponent.module.css";

const LoginComponent = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography></Typography>
      </Grid>
      <Card raised className={styles.loginContainer}>
        LoginComponent
      </Card>
    </Grid>
  );
};

export default LoginComponent;
