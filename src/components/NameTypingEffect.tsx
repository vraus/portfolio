"use client";

import { useEffect, useState } from "react";

const WORDS = ["Hadrien Belleville >", "Vraus >"];
const TYPING_SPEED = 100;
const DELETING_SPEED = 60;
const PAUSE_BETWEEN = 1200;

export default function NameTypingEffect() {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = WORDS[wordIndex];
        const currentLength = text.length;

        let timeout: NodeJS.Timeout;

        if (!isDeleting && currentLength < currentWord.length) {
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, currentLength + 1));
            }, TYPING_SPEED);
        } else if (isDeleting && currentLength > 0) {
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, currentLength - 1));
            }, DELETING_SPEED);
        } else {
            timeout = setTimeout(() => {
                setIsDeleting(!isDeleting);
                if (!isDeleting) {
                } else {
                    setWordIndex((prev) => (prev + 1) % WORDS.length);
                }
            }, PAUSE_BETWEEN);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex]);

    return (
        <span className="font-mono text-primary text-lg whitespace-nowrap">
      {text}
            <span
                className="ml-1"
                style={{
                    animation: "blink 1s steps(1, start) infinite",
                }}
            >
        |
      </span>
    </span>
    );
}
