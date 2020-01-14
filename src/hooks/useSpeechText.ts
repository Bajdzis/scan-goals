import { useEffect, useState } from "react";

// https://mdn.github.io/web-speech-api/speak-easy-synthesis/

export function useSpeechText (language: string = 'pl-PL') {

    const [play, setPlay] = useState(false);
    useEffect(() => {
        return () => window.speechSynthesis && window.speechSynthesis.cancel();
    }, []);

    if (!window.speechSynthesis) {
        return null;
    }

    if (!window.SpeechSynthesisUtterance) {
        return null;
    }

    return { 
        play, 
        toggleSpeech: (text: string) => {
            if (play) {
                window.speechSynthesis.cancel();
                return setPlay(false);
            }
            const allowVoices: SpeechSynthesisVoice[] = window.speechSynthesis.getVoices().filter((voice: SpeechSynthesisVoice) => 
                language === voice.lang
            );

            const speechSynthesisUtterance = new SpeechSynthesisUtterance(text);
            speechSynthesisUtterance.pitch = 1;
            speechSynthesisUtterance.rate = 1;
            if (allowVoices[0]) {
                speechSynthesisUtterance.voice = allowVoices[0];
            }

            setPlay(true);
            window.speechSynthesis.speak(speechSynthesisUtterance);
        }
    };
}
