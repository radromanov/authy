import { Input } from "../../utils/types/Input";
import InputWithLabel from "../InputWithLabel";
import Button from "./Button";

interface Props
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  type: "sign-in" | "sign-up";
  fields: Input[];
}

const Form = ({ type, fields, ...props }: Props) => {
  return (
    <div className="flex flex-col w-1/2 px-4 py-2 justify-between">
      <form {...props} className="flex flex-col gap-3">
        {fields.map((field) => (
          <InputWithLabel
            type={field.type}
            placeholder={field.placeholder}
            label={field.label}
          />
        ))}

        <div />

        <Button text={type === "sign-in" ? "Log in" : "Sign up"} />
      </form>
    </div>
  );
};

export default Form;
