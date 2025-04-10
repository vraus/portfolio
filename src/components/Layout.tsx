"use client";

import TitleTypingEffect from "@/components/TitleTypingEffect";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start justify-center max-h-screen p-8 hide-scrollbar">
      <div className="text-6xl font-bold w-full bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Hadrien Belleville
      </div>

      <div className={"mb-4 mt-6"}>
        <TitleTypingEffect />
      </div>

        <p className="h4-muted font-mono text-left">
            Master’s student in Computer Science and Game Engine development.<br/>
        </p>

        <p className="h5-muted font-mono">
            Game dev enthusiast and engine tinkerer with a passion for code and sound. As a musician, I love diving into audio programming to bring my worlds to life.
            After a semester in Canada, I’m more driven than ever to push my skills further.
        </p>
        <div className="w-full">{children}</div>

    </div>
  );
}
