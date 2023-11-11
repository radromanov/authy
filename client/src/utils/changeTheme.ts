type Theme = "dark" | "light" | "system";

export const changeTheme = (theme: Theme) => {
  switch (theme) {
    case "light":
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      break;
    case "dark":
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      break;
    case "system":
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      }
      break;
    default:
      localStorage.removeItem("dark");
      break;
  }

  return theme;
};
