import { useEffect } from "react";
import { setTheme } from "./utils/setTheme";
import { changeTheme } from "./utils/changeTheme";

function App() {
  // Set dark or light mode on page load
  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <button
        className="bg-red-500 px-2 py-1"
        onClick={() => changeTheme("light")}
      >
        Light
      </button>
      <button
        className="bg-blue-500 px-2 py-1"
        onClick={() => changeTheme("dark")}
      >
        Dark
      </button>
      <button
        className="bg-green-500 px-2 py-1"
        onClick={() => changeTheme("system")}
      >
        System
      </button>
    </>
  );
}

export default App;
