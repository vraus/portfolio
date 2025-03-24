import Image from "next/image";
import projectsData from "../data/projects.json";

type Project = (typeof projectsData)["projects"][number];

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-secondary shadow-soft hover:shadow-strong transition-all cursor-pointer">
            <div className="relative">
                <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-100 object-cover"
                    width={600}
                    height={100}
                    aria-hidden="true"
                    unoptimized={true}
                />
                <div className="absolute bottom-0 w-full bg-opacity-50 p-2 flex justify-between items-center additional-info text-primary ">
                    <span>{project.team_size}</span>
                    <span>{project.duration}</span>
                    <span>{project.language}</span>
                </div>
            </div>
            <div className="p-4 text-justify">
                <h2>{project.title} - {project.date}</h2>
                <h3 className="mb-2">{project.role}</h3>
                <p className="text-secondary">{project.short_description}</p>
            </div>
        </div>
    );
}
