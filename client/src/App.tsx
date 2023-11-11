import { useEffect, useState } from "react";
import { setTheme } from "./utils/setTheme";
import ThemeSlider from "./components/ThemeSlider";
import InputWithLabel from "./components/InputWithLabel";

function App() {
  const [active, setActive] = useState(false);

  // Set dark or light mode on page load
  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <div className="relative h-screen items-center">
        <ThemeSlider />
        <div className="flex w-full h-full items-center justify-center px-4">
          <section className="flex relative w-full h-2/6 bg-violet-900 dark:bg-neutral-900 rounded-xl transition-colors gap-2">
            <div className="flex flex-col w-1/2 px-4 py-2 justify-between">
              <form className="flex flex-col gap-3">
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

                <div />

                <button className="font-bold text-gray-200 bg-violet-500 hover:bg-violet-600 focus:bg-violet-600 active:bg-violet-600 dark:text-neutral-400 dark:bg-neutral-800 rounded-lg dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:active:bg-neutral-700 transition-colors">
                  Log in
                </button>
              </form>
            </div>
            <div
              className={`${
                active ? "opacity-0 hidden" : "opacity-1 flex"
              } flex-col absolute h-full w-1/2 text-black bg-white items-center justify-center translate-x-0 rounded-r-[64px] rounded-lg transition-all`}
            >
              <h1>Hello,</h1>
              <p>Sign in to use all of our features.</p>
              <button
                onClick={() => setActive((prev) => !prev)}
                className="w-fit bg-violet-400 px-4 py-1"
              >
                Sign in
              </button>
            </div>
            <div
              className={`${
                active ? "opacity-1 flex" : "opacity-0 hidden"
              } flex-col absolute h-full w-1/2 text-black bg-white items-center justify-center translate-x-full rounded-l-[64px] rounded-lg transition-all`}
            >
              <h1>Hello,</h1>
              <p>Create an account to use all of our features.</p>
              <button
                onClick={() => setActive((prev) => !prev)}
                className="w-fit bg-violet-400 px-4 py-1"
              >
                Sign up
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
