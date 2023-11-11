import { useEffect } from "react";
import { setTheme } from "./utils/setTheme";
import ThemeSlider from "./components/ThemeSlider";
import InputWithLabel from "./components/InputWithLabel";

function App() {
  // Set dark or light mode on page load
  useEffect(() => {
    setTheme();
  }, []);

  return (
    <div className="relative h-screen items-center p-4">
      <ThemeSlider />
      <div className="flex h-full items-center justify-center">
        <section className="flex flex-col h-2/6 justify-between px-4 py-4 bg-violet-900 dark:bg-neutral-900 rounded-xl">
          <form className="flex flex-col gap-4">
            <InputWithLabel
              type="email"
              placeholder="john.doe@example.com"
              label="email"
            />

            <InputWithLabel
              type="password"
              placeholder="&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;"
              label="password"
            />

            <div className="" />

            <button className="font-bold text-gray-200 bg-violet-500 hover:bg-violet-600 focus:bg-violet-600 active:bg-violet-600 dark:text-neutral-400 dark:bg-neutral-800 rounded-full dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:active:bg-neutral-700 transition-colors">
              Log in
            </button>
          </form>

          <span className="text-gray-200 dark:text-neutral-400 text-sm">
            Don't have an account?{" "}
            <a
              href="#"
              className="hover:underline cursor-pointer text-white font-bold dark:text-neutral-300"
            >
              <span>Sign up</span>
            </a>
          </span>
        </section>
      </div>
    </div>
  );
}

export default App;
