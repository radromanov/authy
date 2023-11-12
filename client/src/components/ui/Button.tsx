interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

const Button = ({ text, ...props }: Props) => {
  return (
    <button
      {...props}
      className="font-bold text-gray-200 bg-violet-500 hover:bg-violet-600 focus:bg-violet-600 active:bg-violet-600 dark:text-neutral-400 dark:bg-neutral-800 rounded-lg dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:active:bg-neutral-700 transition-colors"
    >
      {text}
    </button>
  );
};

export default Button;
