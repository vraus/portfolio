'use client';

import React from "react";
import Image from 'next/image';

const educations = [
    {
        title: "Squeegee, Lille (current position)",
        description: "Software Developer Apprenticeship with UE5.",
        key_points: ["UE5", "Blender", "C++"],
        link: "https://www.squeegeeverse.com",
        media: "./svgs/file.svg", // Example media
    },
    {
        title: "University of Artois, Lens (2023-2025)",
        description: "Master's Degree in Game Development and Software Engineering in Games.",
        key_points: ["Advanced software engineering", "Game design principles"],
        link: "https://www.univ-artois.fr",
        media: null,
    },
    {
        title: "University of Artois, Lens (2023-2025)",
        description: "Master's Degree in Game Development and Software Engineering in Games.",
        key_points: ["Research in AI and game development"],
        link: "https://www.univ-artois.fr",
        media: null,
    },
    {
        title: "UQAC, Quebec (2022-2023)",
        description: "Last year of Bachelor's Degree abroad.",
        key_points: ["International collaboration", "Cross-cultural team projects"],
        link: "https://www.uqac.ca",
        media: null,
    },
    {
        title: "UBO, Brest (2020-2023)",
        description: "Bachelor's Degree in Computer Sciences.",
        key_points: ["Basic programming", "Software architecture"],
        link: "https://www.univ-brest.fr/fr",
        media: null,
    },
];

export default function Educations() {
    return (
        <div className="py-12">
             {/*TODO: fix card size with invisible / squeeshed website button */}
            <h1 className="text-3xl font-bold mb-12 text-center">Career</h1>

            <div className="relative w-full max-w-4xl mx-auto">
                {/* Timeline line */}
                <div className="timeline-line" />

                {educations.map((edu, index) => (
                    <div
                        key={index}
                        className={`mb-16 flex flex-col lg:flex-row items-center relative z-10 ${
                            index % 2 === 0 ? "lg:flex-row-reverse" : ""
                        }`}
                    >
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="group card p-4 shadow-md transition-all duration-500 cursor-pointer">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-primary text-lg font-semibold">{edu.title}</h3>

                                    {/* Display media if available */}
                                    {edu.media && (
                                        <Image
                                            src={edu.media}
                                            alt="Media"
                                            className="w-10 h-10 ml-4" // Adjust size as needed
                                            width={100}
                                            height={100}
                                        />
                                    )}
                                </div>

                                {/* Hidden section that shows on hover */}
                                <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <p className="text-muted mt-2">{edu.description}</p>

                                    {/* Key points list */}
                                    {edu.key_points && edu.key_points.length > 0 && (
                                        <ul className="mt-4 list-disc pl-6">
                                            {edu.key_points.map((point, index) => (
                                                <li key={index} className="text-paragraph">{point}</li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="mt-4">
                                        <button
                                            className="btn btn-primary"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(edu.link, "_blank");
                                            }}
                                        >
                                            Website
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dot */}
                        <div className="dot" />

                        <div className="hidden lg:block w-1/2" />
                    </div>
                ))}
            </div>
        </div>
    );
}
