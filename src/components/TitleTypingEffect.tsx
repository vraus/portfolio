"use client";

import { useEffect, useState } from "react";

const WORDS = ["GAME DEVELOPER", "SOUND PROGRAMMER", "ENGINE DEVELOPER"];
const TYPING_SPEED = 100;
const DELETING_SPEED = 60;
const HOLD_BEFORE_DELETION = 1500;
const HOLD_AFTER_DELETION = 500;

export default function TitleTypingEffect() {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [hold, setHold] = useState(false);

    useEffect(() => {
        const currentWord = WORDS[wordIndex];
        const currentLength = text.length;

        let timeout: NodeJS.Timeout;

        if (!isDeleting && currentLength < currentWord.length) {
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, currentLength + 1));
            }, TYPING_SPEED);
        } else if (!isDeleting && currentLength === currentWord.length) {
            setHold(true);
            timeout = setTimeout(() => {
                setHold(false);
                setIsDeleting(true);
            }, HOLD_BEFORE_DELETION);
        } else if (isDeleting && currentLength > 0) {
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, currentLength - 1));
            }, DELETING_SPEED);
        } else if (isDeleting && currentLength === 0) {
            setHold(true);
            timeout = setTimeout(() => {
                setHold(false);
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % WORDS.length);
            }, HOLD_AFTER_DELETION);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, hold]);

    return (
        <span className="font-semibold font-mono text-primary text-4xl whitespace-nowrap gradient-text">
      {text}
            <span
                className="ml-1"
                style={{
                    animation: "blink 1s steps(1, start) infinite",
                }}
            >|</span>
    </span>
    );
}
