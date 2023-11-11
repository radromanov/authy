import { FiSun, FiMoon } from "react-icons/fi";
import { changeTheme } from "../utils/changeTheme";

const ICON_SIZE = 24;
const THEME = {
  light: "light",
  dark: "dark",
} as const;

const ThemeSlider = () => {
  return (
    <div className="relative flex w-fit px-1 py-1 rounded-full bg-violet-300 dark:bg-neutral-700">
      <div className="flex gap-2 bg-violet-400 dark:bg-neutral-500 rounded-full opacity-75 px-1 py-1">
        <span
          className="rounded-l-full cursor-pointer"
          onClick={() => changeTheme(THEME.light)}
        >
          <FiSun size={ICON_SIZE} color={"white"} />
        </span>
        <span
          className="rounded-r-full cursor-pointer"
          onClick={() => changeTheme(THEME.dark)}
        >
          <FiMoon size={ICON_SIZE} color={"black"} />
        </span>
      </div>

      <span
        className={`absolute h-8 w-8 rounded-full bg-violet-500 dark:bg-neutral-300 dark:translate-x-full transition-all`}
      ></span>
    </div>
  );
};

export default ThemeSlider;
