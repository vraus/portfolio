"use client";

import TitleTypingEffect from "@/components/TitleTypingEffect";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-start justify-center min-h-screen p-8">
            <div className="text-6xl font-bold w-full bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                Hadrien Belleville
            </div>

            <div className={"mb-4 mt-6"}>
                <TitleTypingEffect />
            </div>

            <h4 className="text-white font-mono text-left max-w-md">
                Student&apos;s in Master&apos;s Degree of<br/>Computer Sciences<br/>Game Engine
            </h4>

            <div className="mt-8 w-full">{children}</div>
        </div>
    );
}
