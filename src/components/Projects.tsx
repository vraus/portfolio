import FilterButtons from "@/components/FilterButtons";
import { useState, useEffect } from "react";
import projectsData from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import Modal from "@/components/Modal";

type Project = (typeof projectsData)["projects"][number];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData.projects
      : projectsData.projects.filter((p) => p.tags.includes(filter));

  const tags = [...new Set(projectsData.projects.flatMap((p) => p.tags))];

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"; // Scroll is blocked when modal is open
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <div>
      <h1 className="mb-4 gradient-text">Projects</h1>
      <FilterButtons tags={tags} activeFilter={filter} setFilter={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-16 mt-4">
        {filteredProjects.map((project) => (
          <button key={project.id} onClick={() => setSelectedProject(project)}>
            <ProjectCard project={project} />
          </button>
        ))}
      </div>

      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
