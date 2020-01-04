// https://mdn.github.io/web-speech-api/speak-easy-synthesis/

export function useSpeechText (language: string = 'pl-PL') {

    if (!window.speechSynthesis) {
        return null;
    }

    if (!window.SpeechSynthesisUtterance) {
        return null;
    }

    const allowVoices: SpeechSynthesisVoice[] = window.speechSynthesis.getVoices().filter((voice: SpeechSynthesisVoice) => language === voice.lang);

    if (allowVoices.length === 0) {
        return null;
    }

    return (text: string) => {
        const speechSynthesisUtterance = new SpeechSynthesisUtterance(text);
        speechSynthesisUtterance.pitch = 1;
        speechSynthesisUtterance.rate = 1;
        speechSynthesisUtterance.voice = allowVoices[0];
        window.speechSynthesis.speak(speechSynthesisUtterance);
    };
}
