import { changeTheme } from "../utils/changeTheme";

type Props = {
  icon: any; // TODO
  theme: "light" | "dark";
};

const Icon = ({ icon, theme }: Props) => {
  return (
    <span
      className="rounded-l-full cursor-pointer"
      onClick={() => changeTheme(theme)}
    >
      {icon}
    </span>
  );
};

export default Icon;
