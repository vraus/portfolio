'use client';

import '../styles/globals.css';
import { useState, useEffect } from "react";
import projectsData from "../data/projects.json";
import FilterButtons from "../components/FilterButtons"
import ProjectCard from "../components/ProjectCard"
import Layout from "../components/Layout"
import Modal from "../components/Modal"
import Elements from '@/components/Elements';

type Project = (typeof projectsData)["projects"][number];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(filter));

  const tags = [...new Set(projectsData.flatMap((p) => p.tags))];

  return (
    <Layout>
      <FilterButtons tags={tags} activeFilter={filter} setFilter={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <button key={project.id} onClick={() => setSelectedProject(project)}>
              <ProjectCard project={project} />
            </button>
          ))}
        </div>

        {selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </Layout>
      
  );
}
