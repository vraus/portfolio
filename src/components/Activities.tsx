"use client";

import Image from "next/image";
import "../styles/masonry.css";
import React from "react";

const cards = [
    {
        title: "Music",
        description: "I've been playing the <strong>guitar and saxophone</strong> since I was a kid. Lately, I’ve fallen in love with the <strong>bass guitar</strong>, and I hope to take double bass lessons one day. <br/><br/>I also started experimenting with <strong>Ableton</strong> — it's been a lot of fun.",
        image: null,
    },
    {
        title: "Video Games",
        description: "I'm obviously a gamer, and I love all kinds of games — from RTS to turn-based RPGs, roguelikes, roguelites... you name it.",
        image: null,
    },
    {
        title: `<span class="lang-toggle"><span class="en">Cultural Festival of Nepal</span><span class="np"> नेपालको सांस्कृतिक पर्व</span></span>`,
        description: "Every year, I volunteer at the <strong><a href='https://maisonculturelledunepal.com' target='_blank'>Cultural Festival of Nepal</a></strong> in Paris.",
        image: null,
    },
    {
        title: "Game of the moment",
        description:
            "I'm currently going through my first Elden Ring run, and it's an absolute delight.<br/>Last defeated boss: <strong>The Fire Giant.</strong>💪🔥",
        image: "./images/games/eldenring.webp",
    },
    {
        title: "Game Development",
        description: "As a passionate video game developer, I love challenging myself with creative projects. Whether it’s a <strong>game, a procedural generation algorithm in pure C++, or even a game engine</strong>, coding is a huge part of both my life and my free time.",
        image: null,
    },
    {
        title: "Hikes",
        description: "Pretty self-explanatory — I’m not much of a sports guy, but hiking has always been my favorite way to get some <strong>fresh air and reset.</strong>",
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
                            <h2 className="text-xl font-semibold text-primary mb-2" dangerouslySetInnerHTML={{ __html: card.title }}></h2>
                            <p
                                className="text-sm text-muted"
                                dangerouslySetInnerHTML={{ __html: card.description }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
