// https://mdn.github.io/web-speech-api/speak-easy-synthesis/

export function useSpeechText (language: string = 'pl-PL') {

    if (!window.speechSynthesis) {
        return null;
    }

    if (!window.SpeechSynthesisUtterance) {
        return null;
    }

    return (text: string) => {

        const allowVoices: SpeechSynthesisVoice[] = window.speechSynthesis.getVoices().filter((voice: SpeechSynthesisVoice) => 
            language === voice.lang
        );

        const speechSynthesisUtterance = new SpeechSynthesisUtterance(text);
        speechSynthesisUtterance.pitch = 1;
        speechSynthesisUtterance.rate = 1;
        if (allowVoices[0]) {
            speechSynthesisUtterance.voice = allowVoices[0];
        }
        window.speechSynthesis.speak(speechSynthesisUtterance);
    };
}
