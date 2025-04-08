"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TitleTypingEffect from "@/components/TitleTypingEffect";

export default function Layout({ children }: { children: React.ReactNode }) {
    const rolesLeft = ["GAME", "SOUND", "ENGINE", "GAMEPLAY"];
    const rolesRight = ["PROGRAMMER"];

    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLeftIndex((prev) => (prev + 1) % rolesLeft.length);
        }, 6000);

        const secondInterval = setInterval(() => {
            setRightIndex((prev) => (prev + 1) % rolesRight.length);
        }, 9000);

        return () => {
            clearInterval(interval);
            clearInterval(secondInterval);
        };
    }, []);

    return (
        <div className="flex flex-col items-start justify-center min-h-screen p-8">
            <div className="text-6xl font-bold w-full bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                Hadrien Belleville
            </div>

            <div className="flex space-x-2 h-14 overflow-hidden mb-6 mt-6">
                <div className="font-mono relative w-[170px] text-left text-4xl font-semibold text-primary">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={rolesLeft[leftIndex]}
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            exit={{ y: "-100%", opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute w-full bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                        >
                            {rolesLeft[leftIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>

                <div className="relative w-[250px] text-left text-4xl font-semibold text-primary">
                    <div className="font-mono absolute w-full bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
                        {rolesRight[rightIndex]}
                    </div>
                </div>
            </div>

            <div className={"mb-6 mt-6"}>
                <TitleTypingEffect />
            </div>

            <h3 className="text-muted-foreground text-white font-mono text-left max-w-md mb-6">
                Student&apos;s in Master&apos;s Degree of<br/>Computer Sciences<br/>Game Engine
            </h3>

            <div className="mt-8 w-full">{children}</div>
        </div>
    );
}
