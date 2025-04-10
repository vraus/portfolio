'use client';

import Image from "next/image";
import React from "react";

export default function Links() {

  const links = [
    {
      name: "Resume",
      href: "./portfolio_cv.pdf",
      logo: "./images/logos/resume_logo.webp",
    },
    {
      name: "GitHub",
      href: "https://github.com/vraus",
      logo: "./images/logos/github_logo.webp",
    },
    {
      name: "Itch.io",
      href: "https://vraus.itch.io",
      logo: "./images/logos/itchio_logo.webp",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/hadrien-belleville-b25463176/",
      logo: "./images/logos/linkedin_logo.webp",
    },
  ];

  return (
      <div className="flex flex-col mb-4">
        <section className="mb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <div className="card flex justify-between items-center p-4">
                    <h3 className="text-secondary">{link.name}</h3>
                    <Image
                        src={link.logo}
                        alt="Media"
                        width={60}
                        height={60}
                        unoptimized={true}
                    />
                  </div>
                </a>
            ))}
          </div>
        </section>
      </div>
  );
}
