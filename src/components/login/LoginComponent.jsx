import { Card, Typography } from "@mui/material";
import React from "react";
import styles from "../login/LoinComponent.module.css";

const LoginComponent = ({ heading, loginData }) => {
  return (
    <>
      <Typography variant="h2" className={styles.heading}>
        {heading}
      </Typography>
      <Card raised className={styles.loginContainer}>
        LoginComponent
      </Card>
    </>
  );
};

export default LoginComponent;
