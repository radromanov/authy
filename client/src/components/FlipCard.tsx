import Button from "./ui/Button";

interface Props {
  position: "left" | "right";
  action: "sign-in" | "sign-up";
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const FlipCard = ({ position, action, active, setActive }: Props) => {
  return (
    <div
      className={`${active ? "opacity-1 flex" : "opacity-0 hidden"} ${
        position === "left"
          ? "translate-x-full rounded-l-[64px]"
          : "translate-x-0 rounded-r-[64px]"
      } flex-col absolute h-full w-1/2 items-center justify-center rounded-lg transition-all dark:text-white dark:bg-neutral-800`}
    >
      <h1>Hello,</h1>
      <p>
        {action === "sign-up" ? "Sign in" : "Create an account"} to use all of
        our features.
      </p>

      <Button
        onClick={() => setActive((prev) => !prev)}
        className="w-fit"
        text={action === "sign-up" ? "Sign in" : "Sign up"}
      />
    </div>
  );
};

export default FlipCard;
