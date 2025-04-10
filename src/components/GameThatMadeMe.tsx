"use client";

import Image from "next/image";
import "../styles/masonry.css";

type Game = {
    title: string;
    image: string;
    description: string;
};

const games: Game[] = [
    {
        title: "Age Of Empire II",
        image: "./images/comming_soon.webp",
        description: "\"Age of Empires II\" was my inaugural gaming experience, and I still return to it, especially after the fourth installment's focus on historical accuracy. Beyond the strategic challenge, what captivates me is the franchise's immersive journey through different historical eras."
    },
    {
        title: "Risk Of Rain II",
        image: "./images/comming_soon.webp",
        description: "I'm drawn to Rogue-Like games, and 'Risk of Rain II' has truly captured my attention. Its seamless fusion of accessibility with high-octane gameplay is outstanding. The interplay of character abilities and item combinations offers a gratifying array of build options, ensuring each run is a unique journey. Whether solo or with friends, the enjoyment remains undiminished.",
    },
    {
        title: "Divinity: Original Sin II",
        image: "./images/comming_soon.webp",
        description: "'Divinity: Original Sin II' is my standout find of the year, captivating me with its compelling narrative, captivating music, and immersive gameplay. The meticulously crafted characters, intricate storylines, and player-driven world left a profound impression. As a devoted RPG enthusiast, I reveled in exploring its vast universe, uncovering the complex relationships within my party and the vibrant NPCs that bring this world to life.",
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
                            <p className="text-muted text-sm flex-1 ">{game.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
