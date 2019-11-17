import React, { useState } from 'react';
import './LearnPage.scss';
import { LearnGroupNames } from '../../store/reducers/learn/learnReducer';
import { NewTip } from './components/NewTip/NewTip';

export const LearnPage: React.FC = () => {
    const [page, setPage] = useState<LearnGroupNames|null>(null);
    return (
        <div>
            {page === null && <>
                <h1>Rozwijaj się</h1>

                <button type="button" onClick={() => setPage('mind')}>Wiedza</button>
                <button type="button" onClick={() => setPage('time')}>Czas</button>
                <button type="button" onClick={() => setPage('fit')}>Zdrowie</button>
            </>}

            {page !== null && <NewTip groupName={page} onRead={() => setPage(null)}/>}
            
        </div>

    );
}
