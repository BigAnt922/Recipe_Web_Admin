export const signUpApi = async (email, password, roles) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    username: email,
    email,
    password,
    roles,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return await fetch(
    process.env.REACT_APP_ENDPOINT + process.env.REACT_APP_SIGN_UP,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.error(error));
};
