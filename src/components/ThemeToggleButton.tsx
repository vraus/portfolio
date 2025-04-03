import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; 

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
        <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full transition cursor-pointer"
        >
            {theme === "dark" ? (
                <SunIcon className="w-6 h-6 text-white" />
            ) : (
                <MoonIcon className="w-6 h-6 text-primary" />
            )}
        </button>
    );
}

export default ThemeToggleButton;
