"use client";

import Image from "next/image";
import "../styles/masonry.css";
import React from "react";

type Game = {
    title: string;
    image: string;
    description: string;
};

const games: Game[] = [
    {
        title: "Age Of Empire II",
        image: "./images/games/aoeii.webp",
        description: "<strong>\"Age of Empires II\"</strong> was my inaugural gaming experience, and I still return to it, especially after the fourth installment's focus on <strong>historical accuracy</strong>. <br/><br/>Beyond the strategic challenge, what captivates me is the franchise's immersive journey through different <strong>historical eras.</strong>"
    },
    {
        title: "Risk Of Rain II",
        image: "./images/games/ror2.webp",
        description: "I'm drawn to Rogue-Like games, and <strong>'Risk of Rain II'</strong> has truly captured my attention.<br/><br/>Its seamless fusion of accessibility with high-octane gameplay is outstanding. The interplay of character abilities and item combinations offers a <strong>gratifying array of build options</strong>, ensuring each run is a unique journey.<br/><br/>Whether solo or with friends, the enjoyment remains <strong>undiminished</strong>.",
    },
    {
        title: "Divinity: Original Sin II",
        image: "./images/games/dos2.webp",
        description: "<strong>'Divinity: Original Sin II'</strong> is my standout find of 2022, captivating me with its compelling narrative, <strong>captivating music</strong>, and immersive gameplay. The meticulously crafted characters, intricate storylines, and player-driven world left a profound impression.<br/><br/>As a devoted RPG enthusiast, I reveled in exploring its <strong>vast universe</strong>, uncovering the complex relationships within my party and the vibrant NPCs that bring this world to life.",
    },
];

export default function GamesThatMadeMe() {
    return (
        <section className="py-16 px-4 sm:px-8">
            <h1 className="text-4xl font-bold mb-12 text-center">Games That Made Me</h1>
            <div className="masonry">
                {games.map((game, index) => (
                    <div
                        key={index}
                        className="bg-secondary shadow-lg overflow-hidden flex flex-col"
                    >
                        <div className="relative w-full h-64">
                            <Image
                                src={game.image}
                                alt={game.title}
                                fill
                                className="object-cover"
                                unoptimized={true}
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h2 className="text-2xl font-bold text-primary mb-4">
                                {game.title}
                            </h2>
                            <p
                                className="text-muted text-sm flex-1 "
                                dangerouslySetInnerHTML={{ __html: game.description }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
