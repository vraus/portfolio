import Image from "next/image";
import projectsData from "../data/projects.json";

type Project = (typeof projectsData)["projects"][number];

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-secondary hover:shadow-strong transition-all cursor-pointer">
            <div className="relative">
                <div>
                    {project.image.includes(".webm") ? (
                    <video src={project.image}
                        className="w-full h-100 object-cover cursor-pointer"
                        autoPlay
                        loop
                        muted
                    />) : (
                    <Image
                        src={project.image}
                        alt={`Illustration ${project.title}`}
                        className="w-full h-100 object-cover cursor-pointer"
                        width={600}
                        height={100}
                        unoptimized={true}
                    />)}
                </div>
                <div className="absolute bottom-0 w-full bg-opacity-50 p-2 flex justify-between items-center  text-white additional-info">
                    <span>{project.team_size}</span>
                    <span>{project.duration}</span>
                    <span>{project.language}</span>
                </div>
            </div>
            <div className="p-4 text-justify">
                <h2>{project.title} - {project.date}</h2>
                <h3 className="mb-2">{project.role}</h3>
                <p className="">{project.short_description}</p>
            </div>
        </div>
    );
}
