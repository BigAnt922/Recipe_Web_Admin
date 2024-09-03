import React from "react";
import "./ErrorComponent.css";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import notFound from "../../static/wreck-it-ralph-ralph.gif";
import ButtonCommon from "../common/button/ButtonCommon";

const ErrorComponent = ({ errorData }) => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      className="container"
    >
      <Grid item>
        <Typography variant="h2" className="error-heading">
          {errorData.title}
        </Typography>
      </Grid>

      <Grid item>
        <img src={notFound} alt="404" />
      </Grid>

      <Grid item>
        <Typography variant="h4" className="error-heading">
          {errorData.message}
        </Typography>
      </Grid>

      <Grid item>
        <ButtonCommon
          text={errorData.btnText}
          onClick={() => navigate(errorData.homePageLink)}
        />
      </Grid>
    </Grid>
  );
};

export default ErrorComponent;
