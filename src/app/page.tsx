'use client';

// Style
import '../styles/globals.css';

// Libraries
import { useState } from "react";

// Datas
import projectsData from "../data/projects.json";

// Components
import FilterButtons from "../components/FilterButtons"
import ProjectCard from "../components/ProjectCard"
import Layout from "../components/Layout"
import Modal from "../components/Modal"

type Project = typeof projectsData[number];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(filter));

  const tags = [...new Set(projectsData.flatMap((p) => p.tags))];

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
      <FilterButtons tags={tags} activeFilter={filter} setFilter={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <button key={project.id} onClick={() => setSelectedProject(project)}>
            <ProjectCard project={project} />
          </button>
        ))}
      </div>

      {/* Modal qui s'affiche si un projet est sélectionné */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </Layout>
  );
}
