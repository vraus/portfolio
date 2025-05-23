import Image from 'next/image';
import { motion } from 'framer-motion';
import projectsData from "../data/projects.json";
import React from "react";
import '../styles/globals.css';

type Project = (typeof projectsData)["projects"][number];

type ModalProps = {
  project: Project;
  onClose: () => void;
};

const YoutubePreview = ({ url }: { url: string }) => {
  const videoId = url.includes("v=") ? url.split("v=")[1]?.split("&")[0] : url.split("/").pop();

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
};

const LinkPreview = ({ url, url_name }: { url: string; url_name : string }) => {
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
      <p className="text-secondary">{url_name}</p>
      <p className="font-semibold text-secondary">{new URL(url).hostname}</p>
    </a>
  );
};

export default function Modal({ project, onClose }: ModalProps) {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md text-justify"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="max-h-[95vh] overflow-y-auto relative modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton de fermeture */}
        <button
          className="bg-background absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Titre & Image */}
        <section className="container">
          <h1 className="text-primary text-3xl font-bold mb-4">{project.title}</h1>
          {project.image.includes(".webm") ? (
              <video
                  src={project.image}
                  className="w-full h-160 object-cover cursor-pointer"
                  autoPlay
                  loop
                  muted
              />
          ) : (
              <Image
                  src={project.image}
                  alt={`Illustration ${project.title}`}
                  className="w-full h-160 object-cover"
                  width={160}
                  height={160}
                  unoptimized={true}
              />
          )}
          {/* Description courte */}

        </section>

        {/* Détails du projet */}
        <section className="container my-8">
          <div className="grid-cols-responsive">

            <div className="card">
              <h3 className="text-primary">About</h3>
              <p className="text-paragraph mb-4">{project.short_description}</p>
              {/* Technologies */}
              <section className="">
                <div className="">
                  <h3 className="font-semibold">Used Technologies :</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.languages.map((lang, index) => (
                        <span key={index} className="detail-tech-tag">
                          {lang}
                        </span>
                    ))}
                    {project.technologies.engine && (
                        <span className="detail-tech-tag">
                          {project.technologies.engine}
                        </span>
                    )}
                  </div>
                </div>
              </section>
            </div>

            <div className="card flex flex-col text-left items-start justify-between">
              <div>
                <h3 className="text-primary">Project Infos</h3>
                <div className="mt-6">
                  <ul className="space-y-2 text-primary">
                    <li className="text-paragraph">
                      <strong className="text-primary">Duration :</strong> {project.duration}
                    </li>
                    <li className="text-paragraph">
                      <strong className="text-primary">Team Size :</strong> {project.team_size}
                    </li>
                    <li className="text-paragraph">
                      <strong className="text-primary">Type :</strong> {project.project_type}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Liens TODO: Add some icons, or even replace texts with icon (GitHub / itch.io etc...) */}
        <section className="container">
          {(project.links.youtube || project.links.itch_io || project.links.source_code) && (
              <div>
                <h2>Links :</h2>

                <div className={"grid grid-cols-responsive gap-4 mt-4 mb-4"}>
                  {project.links.source_code && <div><LinkPreview url={project.links.source_code} url_name={"Source Code"} /></div>}
                  {project.links.itch_io && <div><LinkPreview url={project.links.itch_io} url_name={"Try it on Itch.io"}/></div>}
                </div>

                {/* Affichage des vidéos YouTube */}
                {project.links.youtube && project.links.youtube.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.links.youtube.map((url, index) => (
                          <YoutubePreview key={index} url={url} />
                      ))}
                    </div>
                )}
              </div>
            )}
        </section>

        {/* Description */}
        <section className="container">
          <h2>Description :</h2>
          <div>
            {project.description.map((desc, index) => (
                <p
                    key={index}
                    className="mb-2"
                    dangerouslySetInnerHTML={{ __html: desc }}
                />
            ))}
          </div>
        </section>

        {/* Contribution */}
        {project.features.length > 0 && 
          <section className="container">
            <div className="mb-4">
              <h2 className="font-semibold">Contributions :</h2>
              <p
                  className="mb-2"
                  dangerouslySetInnerHTML={{ __html: project.contributions }}
              />
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Features :</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="card p-4 flex flex-col justify-between min-h-[300px]">
                    <div>
                      <p className="text-primary font-semibold">{feature.name}</p>
                      {feature.description && (
                        <p>{feature.description}</p>
                      )}
                    </div>
                    {feature.media && (
                      <div className="mt-4">
                        {feature.media.includes(".webm") ? (
                          <video
                            src={feature.media}
                            className="w-auto h-auto object-cover cursor-pointer"
                            autoPlay
                            loop
                            muted
                          />
                        ) : (
                          <Image
                            src={feature.media}
                            alt={`Illustration ${feature.name}`}
                            className="w-auto h-auto object-cover"
                            width={160}
                            height={74}
                            unoptimized={true}
                          />
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        }

        {/* Key Points TODO: Replace the basic list with KeyPoint name + short description */}
        { project.key_points.length > 0 &&
          <section className="container">
          <div className="mb-4">
            <h2 className="font-semibold text-primary">What I learned in this project :</h2>
            <ul className="list-disc pl-5 mt-2 text-secondary">
              {project.key_points.map((point, index) => (
                <li key={index}><p>{point}</p></li>
              ))}
            </ul>
          </div>
          </section>
        }
      </motion.div>
    </div>
  );
}
