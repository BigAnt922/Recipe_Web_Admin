import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { updateTitle } from "../../utils/Common";

const Users = () => {
  useEffect(() => {
    updateTitle();
  }, []);
  return <Typography variant="h3">Users</Typography>;
};

export default Users;
