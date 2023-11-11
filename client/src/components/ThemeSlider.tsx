import { FiSun, FiMoon } from "react-icons/fi";
import Icon from "./Icon";

const ICON_SIZE = 24;

const ThemeSlider = () => {
  return (
    <div className="relative flex w-fit px-1 py-1 rounded-full bg-violet-300 dark:bg-neutral-700">
      <div className="flex gap-2 bg-violet-400 dark:bg-neutral-500 rounded-full opacity-75 px-1 py-1">
        <Icon
          theme="light"
          icon={<FiSun size={ICON_SIZE} fill={"white"} color={"white"} />}
        />

        <Icon
          theme="dark"
          icon={<FiMoon size={ICON_SIZE} fill={"white"} color={"white"} />}
        />
      </div>

      <span
        className={`absolute h-8 w-8 rounded-full bg-violet-500 dark:bg-neutral-300 dark:translate-x-full transition-all`}
      ></span>
    </div>
  );
};

export default ThemeSlider;
