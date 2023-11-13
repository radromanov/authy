interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
}

const InputWithLabel = ({ type, placeholder, label, ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="font-bold text-xs uppercase text-gray-300 dark:text-neutral-400">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="px-2 rounded-md placeholder:text-gray-300 placeholder:italic dark:placeholder:text-neutral-400 focus:bg-violet-600 active:bg-violet-600 hover:bg-violet-600 dark:focus:bg-neutral-700 dark:active:bg-neutral-700 dark:hover:bg-neutral-700 transition-colors"
        type={type}
        {...props}
      />
    </div>
  );
};

export default InputWithLabel;
