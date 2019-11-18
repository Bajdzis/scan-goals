import React from 'react';
import './Quote.scss';
import { useQuote } from '../../hooks/useQuote';

export const Quote: React.FC = () => {
    const quote = useQuote();

    return (<div >
        {quote.value}
         - 
        {quote.author}
    </div>);
};
