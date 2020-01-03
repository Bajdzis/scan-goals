import React from 'react';
import './Quote.scss';
import { useQuote } from '../../hooks/useQuote';

export const Quote: React.FC = () => {
    const quote = useQuote();

    return (<div className="quote">
        <small className="quote__label">
            Cytat na dziś:
        </small>
        <div className="quote__value">
            {quote.value}
        </div>
        <div className="quote__author">
            {quote.author}
        </div>
    </div>);
};
