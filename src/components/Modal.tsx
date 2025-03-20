import Image from 'next/image';

import projectsData from "../data/projects.json";
type Project = typeof projectsData[number];

type ModalProps = {
  project: Project;
  onClose: () => void;
};


export default function Modal({ project, onClose }: ModalProps) {
    return (
      <div
        className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md"
        onClick={onClose}
      >
        <div
          className="bg-black p-6 rounded-lg shadow-lg max-w-[90vh] w-full max-h-[80vh] h-auto overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant à l'intérieur
        >
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-black"
            onClick={onClose}
          >
            ✖
          </button>
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover rounded mb-2"
            width={800}
            height={100}
          />
          
          {/* Description courte */}
          <p className="text-gray-700 mb-2">{project.short_description}</p>
  
          {/* Détails du projet */}
          <div className="mb-4">
            <p><strong>Duration:</strong> {project.duration}</p>
            <p><strong>Team size:</strong> {project.team_size} personnes</p>
            <p><strong>Type of project:</strong> {project.project_type}</p>
          </div>
  
          {/* Liens du projet */}
          <div className="mb-4">
            <p><strong>Links:</strong></p>
            <ul>
              {project.links.source_code && (
                <li>
                  <a href={project.links.source_code} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    Source Code
                  </a>
                </li>
              )}
              {project.links.itch_io && (
                <li>
                  <a href={project.links.itch_io} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    Itch.io
                  </a>
                </li>
              )}
              {project.links.youtube_demo && (
                <li>
                  <a href={project.links.youtube_demo} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    Demo Video
                  </a>
                </li>
              )}
            </ul>
          </div>
  
          {/* Technologies utilisées */}
          <div className="mb-4">
            <p><strong>Used Technologies:</strong></p>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
  
          {/* Contribution */}
          <div className="mb-4">
            <p><strong>Contribution:</strong></p>
            <p>{project.contribution.overview}</p>
          </div>
          <div className='mb-4'>
            <p><strong>Features:</strong></p>
            <ul>
              {project.contribution.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  <div>{feature.feature}</div>
                  {feature.media && (
                    <Image
                      src={feature.media}
                      alt={`Media for ${feature.feature}`}
                      className="w-full h-40 object-cover rounded mt-2"
                      width={500}
                      height={350}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  