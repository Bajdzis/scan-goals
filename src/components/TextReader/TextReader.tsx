import React from 'react';

import './TextReader.scss';
import { useSpeechText } from '../../hooks/useSpeechText';

interface TextReaderProps {
    children: React.ReactElement;
}

export const TextReader: React.FC<TextReaderProps> = ({children}: TextReaderProps) => {

    const speech = useSpeechText();

    if (speech === null) {
        return children;
    }

    return <div onClick={(e) => {
        // @ts-ignore
        speech(e.target.innerText);
        // @ts-ignore
        console.log(e.target.innerText);
    }}>
        {children}
    </div>;

}
