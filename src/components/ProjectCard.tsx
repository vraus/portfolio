import Image from 'next/image';

import projectsData from "../data/projects.json";
type Project = typeof projectsData[number];

export default function ProjectCard({ project }: { project: Project }) {
    return (
      <div className="block border rounded-lg p-4 shadow hover:shadow-lg hover:shadow-lg cursor-pointer">
        <Image 
          src={project.image} 
          alt={project.title} 
          className="w-full h-40 object-cover rounded"
          width={600}
          height={100}
        />
        <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
      </div>
    );
  }
  