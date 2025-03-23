import Image from 'next/image';
import { motion } from 'framer-motion';
import projectsData from "../data/projects.json";

type Project = (typeof projectsData)["projects"][number];

type ModalProps = {
  project: Project;
  onClose: () => void;
};

export default function Modal({ project, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-secondary p-6 rounded-2xl shadow-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant à l'intérieur
      >
        {/* Bouton de fermeture */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Titre & Image */}
        <h2 className="text-primary text-3xl font-bold mb-4">{project.title}</h2>
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-xl mb-4"
          width={800}
          height={300}
        />

        {/* Description courte */}
        <p className="text-gray-700 mb-4">{project.short_description}</p>

        {/* Détails du projet */}
        <div className="mb-4 text-gray-600">
          <p><strong>⏳ Durée :</strong> {project.duration}</p>
          <p><strong>👥 Équipe :</strong> {project.team_size} personnes</p>
          <p><strong>📌 Type :</strong> {project.project_type}</p>
        </div>

        {/* Liens */}
        <div className="mb-4">
          <p className="font-semibold">🔗 Liens :</p>
          <div className="flex gap-3 mt-2">
            {project.links.source_code && (
              <a
                href={project.links.source_code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                🔗 Code Source
              </a>
            )}
            {project.links.itch_io && (
              <a
                href={project.links.itch_io}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                🎮 Itch.io
              </a>
            )}
            {project.links.youtube && (
              <a
                href={project.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                📺 Vidéo
              </a>
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <p className="font-semibold">⚙️ Technologies utilisées :</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.languages.map((lang, index) => (
              <span key={index} className="px-3 py-1 text-sm bg-gray-200 rounded-lg">
                {lang}
              </span>
            ))}
            {project.technologies.engine && (
              <span className="px-3 py-1 text-sm bg-gray-300 rounded-lg">
                {project.technologies.engine}
              </span>
            )}
          </div>
        </div>

        {/* Contribution */}
        <div className="mb-4">
          <p className="font-semibold">🛠 Contributions :</p>
          <p className="text-gray-700 mt-2">{project.contributions}</p>
        </div>

        {/* Fonctionnalités */}
        <div className="mb-4">
          <p className="font-semibold">🚀 Fonctionnalités développées :</p>
          <ul className="list-disc pl-5 mt-2">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-3">
                <p className="font-semibold">{feature.name}</p>
                <p className="text-gray-700">{feature.description}</p>
                {feature.media && (
                  <Image
                    src={feature.media}
                    alt={`Illustration ${feature.name}`}
                    className="w-full h-40 object-cover rounded mt-2 cursor-pointer"
                    width={500}
                    height={300}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Points Clés */}
        <div className="mb-4">
          <p className="font-semibold">📌 Points Clés :</p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            {project.key_points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
