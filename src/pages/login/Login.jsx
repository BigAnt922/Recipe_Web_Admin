import { useEffect } from "react";
import styles from "../login/Login.module.css";
import { updateTitle } from "../../utils/Common";
import LoginComponent from "../../components/login/LoginComponent";
import words from "../../utils/words.json";
const Login = () => {
  useEffect(() => {
    updateTitle();
  }, []);
  return (
    <div className={styles.container}>
      <LoginComponent heading={words.heading} loginData={words.login} />
    </div>
  );
};

export default Login;
