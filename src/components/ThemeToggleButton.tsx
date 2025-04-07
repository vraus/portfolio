import { useEffect, useState } from "react";
// import { MoonIcon } from "@heroicons/react/24/solid";

function ThemeToggleButton() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      {
        <button onClick={toggleTheme} className="p-2 transition cursor-pointer">
          {/*<MoonIcon className="w-6 h-6 text-primary" />*/}
          <p>
            {theme === "light" ? (
              <span className="text-primary">Dark Theme</span>
            ) : (
              <span className="text-primary">Light Theme</span>
            )}
          </p>
        </button>
      }
    </div>
  );
}

export default ThemeToggleButton;
