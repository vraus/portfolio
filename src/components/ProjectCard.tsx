import Image from "next/image";
import projectsData from "../data/projects.json";

type Project = typeof projectsData[number];

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-secondary rounded-lg p-4 shadow-soft hover:shadow-strong transition-all cursor-pointer">
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded"
        width={600}
        height={200}
        aria-hidden="true"
      />
      <h2 className="text-secondary text-xl font-semibold mt-2">{project.title}</h2>
    </div>
  );
}
