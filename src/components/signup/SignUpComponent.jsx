import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import "./SignUpComponent.css";
import TextFieldCommon from "../common/textField/TextFieldCommon";
import { useState } from "react";
import ButtonCommon from "../common/button/ButtonCommon";
import CheckBoxCommon from "../common/checkbox/CheckBoxCommon";

const SignUpComponent = ({ heading, signupData }) => {
  const [email, setEmail] = useState("");
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
        <Typography variant="h3" className="heading">
          {signupData.title}
        </Typography>
      </Grid>

      <Grid item container justifyContent="center" alignItems="center">
        <Card raised className="signupContainer">
          <Grid
            container
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="center"
            className="insideContaner"
          >
            <Grid item>
              <TextFieldCommon
                type="email"
                label={signupData.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item>
              <TextFieldCommon
                type={password.show ? "text" : "password"}
                label={signupData.password}
                value={password.data}
                onChange={(e) =>
                  setPassword({ ...password, data: e.target.value })
                }
              />
            </Grid>
            <Grid item>
              <CheckBoxCommon
                text={signupData.showPassword}
                checked={password.show}
                className="check_box_login"
                onChange={() =>
                  setPassword({ ...password, show: !password.show })
                }
              />
            </Grid>
            <Grid item>
              <ButtonCommon
                text={signupData.sendRequest}
                onClick={() => console.log("BUTTON CLICKED")}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SignUpComponent;
