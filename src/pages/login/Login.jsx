import { useEffect } from "react";
import styles from "../login/Login.module.css";
import { updateTitle } from "../../utils/Common";
const Login = () => {
  useEffect(() => {
    updateTitle();
  }, []);
  return <div className={styles.container}>login</div>;
};

export default Login;
