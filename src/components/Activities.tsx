"use client";

import Image from "next/image";
import "../styles/masonry.css";

const cards = [
    {
        title: "Musique",
        description: "Je joue du piano et compose régulièrement.",
        image: null,
    },
    {
        title: "Jeux vidéo",
        description: "Fan de RPG, roguelike et jeux tactiques.",
        image: null,
    },
    {
        title: "Voyages",
        description: "Découverte de nouveaux paysages et cultures à travers l’Europe et le Canada.",
        image: null,
    },
    {
        title: "Lecture",
        description:
            "Science-fiction, fantasy, essais tech, philosophie et tout ce qui pousse à réfléchir.",
        image: null,
    },
    {
        title: "Photographie",
        description: "Photos de rue et paysages avec un hybride Fuji.",
        image: null,
    },
    {
        title: "Modélisation 3D",
        description: "J’apprends Blender pour créer mes propres assets de jeu.",
        image: null,
    },
];

export default function Activities() {
    return (
        <div className="py-12 px-4 sm:px-8">
            <h1 className="text-4xl font-bold mb-10 text-center">Hobbies</h1>

            <div className="masonry">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="break-inside-avoid mb-6 bg-secondary shadow-md overflow-hidden"
                    >
                        {card.image && (
                            <div className="relative w-full h-48">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                    unoptimized={true}
                                />
                            </div>
                        )}
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-primary mb-2">{card.title}</h2>
                            <p className="text-muted text-sm">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
