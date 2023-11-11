import { useEffect } from "react";
import { setTheme } from "./utils/setTheme";
import ThemeSlider from "./components/ThemeSlider";

function App() {
  // Set dark or light mode on page load
  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <ThemeSlider />
    </>
  );
}

export default App;
