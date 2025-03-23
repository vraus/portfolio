'use client';

import '../styles/globals.css';
// import { useState, useEffect } from "react";
import Layout from "../components/Layout"
import Educations from "../components/Educations"
import Projects from "@/components/Projects";
import TechnicalExperience from "@/components/Technical";



export default function Home() {
  /*const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    }
    return "light";
  });*/

  /*useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);*/

  /*const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };*/

  return (
    <div className="container">
      <Layout>

        <div className="mb-4">
          <TechnicalExperience />
        </div>

        <div className="mb-4">
          <Projects />
        </div>

        <div className="mb-4">
          <Educations />
        </div>

      </Layout>
    </div>
  );
}
