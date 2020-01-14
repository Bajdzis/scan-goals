import React, { useEffect, useState } from 'react';

import { useSpeechText } from '../../hooks/useSpeechText';

export const TextPlayer: React.FC = () => {
    const [text, setText] = useState('');
    const speech = useSpeechText();

    useEffect(() => {
        const handler:EventListener = ((e: CustomEvent) => {
            setText(e.detail.text);
        }) as EventListener;

        window.document.body.addEventListener('speech-text', handler);
        return () => window.document.body.removeEventListener('speech-text', handler);
    });

    if (speech === null) {
        return <></>;
    }

    return  <div>
        <button 
            className="circle two" 
            onClick={() => {
                speech.toggleSpeech(text);
            }} 
            title= {speech.play ? 'Zatrzymaj': 'Przeczytaj'}
        > 
            {speech.play ? 
                <svg style={{ width:'24px',height:'38px' }} viewBox="0 0 24 24">
                    <path fill="#ffffff" d="M18,18H6V6H18V18Z" />
                </svg>
                :
                <svg style={{ width:'24px',height:'38px' }} viewBox="0 0 24 24">
                    <path fill="#ffffff" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                </svg>}
        </button>
    </div>
;

};