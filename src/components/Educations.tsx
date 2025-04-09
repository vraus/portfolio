'use client';

import React from "react";
import Image from 'next/image';

const educations = [
    {
        title: "Apprenticeship, Squeegee",
        description: "Software Developer UE5.",
        key_points: ["UE5", "Blender", "C++"],
        link: "https://www.squeegeeverse.com",
        media: "./svgs/file.svg",
        date: "2024 - Present",
    },
    {
        title: "La Plaine Images",
        description: "Ambassador. Contact between Univ and La Plaine Images.",
        key_points: [],
        link: "https://www.univ-artois.fr",
        media: "./svgs/file.svg",
        date: "2023 - 2025",
    },
    {
        title: "University of Artois, Lens",
        description: "Master's Degree of Software Engineering in Games.",
        key_points: ["C++", "Cuda", "UE5"],
        link: "https://www.univ-artois.fr",
        media: "./svgs/file.svg",
        date: "2023 - 2025",
    },
    {
        title: "UQAC, Quebec",
        description: "Last year of Bachelor's Degree abroad.",
        key_points: ["C++ / Java", "Project Management", "AI Ethic", "Cybersecurity"],
        link: "https://www.uqac.ca",
        media: "./svgs/file.svg",
        date: "2022 - 2023",
    },
    {
        title: "UBO, Brest",
        description: "Bachelor's Degree in Computer Sciences.",
        key_points: ["Basic programming", "Software architecture", "Algo & Maths"],
        link: "https://www.univ-brest.fr/fr",
        media: "./svgs/file.svg",
        date: "2020 - 2023",
    },
];


export default function Educations() {
    return (
        <div className="py-12">
             {/*TODO: fix card size with invisible / squeeshed website button */}
            <h1 className="text-3xl font-bold mb-12 text-center">Experience</h1>

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
                        {/* Card */}
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="group card p-4 shadow-md transition-all duration-500 cursor-pointer">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-primary text-lg font-semibold">{edu.title}</h3>
                                    {edu.media && (
                                        <Image
                                            src={edu.media}
                                            alt="Media"
                                            className="w-10 h-10 ml-4"
                                            width={100}
                                            height={100}
                                        />
                                    )}
                                </div>

                                <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-60 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <p className="text-muted mt-2">{edu.description}</p>

                                    {edu.key_points && edu.key_points.length > 0 && (
                                        <ul className="mt-4 list-disc pl-6">
                                            {edu.key_points.map((point, i) => (
                                                <li key={i} className="text-paragraph">{point}</li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="mt-4">
                                        <button
                                            className="btn btn-primary cursor-pointer"
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

                        {/* Date on the opposite side of the card */}
                        <div className={`hidden lg:flex w-1/2 px-4 text-sm text-muted ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                            <p className="max-w-fit">{edu.date}</p>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}
