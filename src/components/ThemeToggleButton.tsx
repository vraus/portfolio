import {useEffect, useState} from "react";

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
            <button className="btn btn-primary" onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default ThemeToggleButton;
