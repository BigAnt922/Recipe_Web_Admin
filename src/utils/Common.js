const paths = [
  "signup",
  "home",
  "users",
  "catagories",
  "recipes",
  "ingredients",
];

const getPath = (path) =>
  path
    ? paths.includes(path)
      ? path[0].toUpperCase() + path.substring(1).toLowerCase()
      : "Error"
    : "Login";

export const updateTitle = () => {
  const pathArray = window.location.href.split("/");
  const path = pathArray[pathArray.length - 1];
  document.title = `Recipe Controller - ${getPath(path)}`;
};
