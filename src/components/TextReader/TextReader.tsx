import React, { useRef, useEffect } from 'react';

import './TextReader.scss';

interface TextReaderProps {
    children: React.ReactNode;
}

export const TextReader: React.FC<TextReaderProps> = ({children}: TextReaderProps) => {
    const div = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const text = div.current ? div.current.innerText : '';

        text && window.document.body.dispatchEvent(new CustomEvent('speech-text', { 
            detail: {
                text
            }
        }));
    }, [div]);

    return <div ref={div}>
        {children}
    </div>;

};
