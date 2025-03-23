import Image from 'next/image';
import { motion } from 'framer-motion';
import projectsData from "../data/projects.json";

type Project = (typeof projectsData)["projects"][number];

type ModalProps = {
  project: Project;
  onClose: () => void;
};

const LinkPreview = ({ url }: { url: string }) => {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return (
      <div className="relative w-full h-56 mt-2">
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block p-2 rounded-xl link-primary transition">
      <p className="font-semibold text-primary">{new URL(url).hostname}</p>
      <p className="text-secondary truncate">{url}</p>
    </a>
  );
};

export default function Modal({ project, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 bg-opacity-50 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-secondary p-6 rounded-2xl shadow-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton de fermeture */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Titre & Image */}
        <section className="container">
          <h1 className="text-primary text-3xl font-bold mb-4">{project.title}</h1>
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-xl mb-4"
            width={800}
            height={300}
            />
          {/* Description courte */}
          <p className="text-secondary mb-4">{project.short_description}</p>
        </section>

        {/* Détails du projet */}
        <section className="container">
          <h2>Informations</h2>
          <ul className="space-y-2 text-secondary">
            <li><strong className="text-primary">Duration :</strong> {project.duration}</li>
            <li><strong className="text-primary">Team Size :</strong> {project.team_size} personnes</li>
            <li><strong className="text-primary">Type :</strong> {project.project_type}</li>
          </ul>
        </section>

        {/* Liens */}
        <section className="container">
          <h2>Links :</h2>
          <ul className="space-y-2">
            {project.links.source_code && <li><LinkPreview url={project.links.source_code} /></li>}
            {project.links.itch_io && <li><LinkPreview url={project.links.itch_io} /></li>}
            {project.links.youtube && <li><LinkPreview url={project.links.youtube} /></li>}
          </ul>
        </section>

        {/* Technologies */}
        <section className="container">
          <div className="mb-4">
            <h2 className="font-semibold">Used Technologies :</h2>
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
        </section>

        {/* Contribution */}
        <section className="container">
          <div className="mb-4">
            <h2 className="font-semibold">Contributions :</h2>
            <p className="text-gray-700 mt-2">{project.contributions}</p>
          </div>

          {/* Fonctionnalités */}
          <div className="mb-4">
            <h3 className="font-semibold">Developped Features :</h3>
            <ul className="list-disc pl-5 mt-2">
              {project.features.map((feature, index) => (
                <li key={index} className="mb-3">
                  <p className="text-primary font-semibold">{feature.name}</p>
                  <p className="text-secondary">{feature.description}</p>
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
        </section>

        {/* Points Clés */}
        <section className="container">
        <div className="mb-4">
          <h2 className="font-semibold text-primary">📌 Key Points :</h2>
          <ul className="list-disc pl-5 mt-2 text-secondary">
            {project.key_points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        </section>
      </motion.div>
    </div>
  );
}
