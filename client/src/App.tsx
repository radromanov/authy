import { useEffect, useState } from "react";
import { setTheme } from "./utils/setTheme";
import ThemeSlider from "./components/ThemeSlider";
import FlipCard from "./components/FlipCard";
import Form from "./components/ui/Form";
import { loginFields, signupFields } from "./utils/constants/Forms";

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
            <Form type="sign-in" fields={loginFields} />
            <Form type="sign-up" fields={signupFields} />
            <FlipCard
              active={!active}
              setActive={setActive}
              action="sign-in"
              position="left"
            />
            <FlipCard
              active={active}
              setActive={setActive}
              action="sign-up"
              position="right"
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
