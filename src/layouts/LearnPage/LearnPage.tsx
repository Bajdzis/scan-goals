import React, { useState } from 'react';
import './LearnPage.scss';
import { LearnGroupNames, LEARN_TIP_GROUP } from '../../store/reducers/learn/learnReducer';
import { NewTip, countReadTips } from './components/NewTip/NewTip';
import { usePageRoute } from '../../hooks/usePageRoute';
import { useSelector } from 'react-redux';

export const LearnPage: React.FC = () => {
    const goToHome = usePageRoute('home');
    const [page, setPage] = useState<LearnGroupNames|null>(null);
    const mindCount = useSelector(countReadTips('mind'));
    const timeCount = useSelector(countReadTips('time'));
    const fitCount = useSelector(countReadTips('fit'));
    return (
        <div>
            {page === null && <>
                <button className="backButton" onClick={goToHome} title="Wróć">{'<'} </button>
                <h1>Rozwijaj się</h1>
                <p>Wybierz jeden z trzech obszarów w których chciałbyś się rozwijać. Dziennie może odczytać tylko jedną wzkazówkę. </p>

                <button type="button" onClick={() => setPage('mind')} disabled={mindCount === LEARN_TIP_GROUP.mind.length}>Wiedza</button>
                <p>Lekcji {mindCount}/{LEARN_TIP_GROUP.mind.length}</p>
                <br/>

                <button type="button" onClick={() => setPage('time')} disabled={timeCount === LEARN_TIP_GROUP.time.length}>Czas</button>
                <p>Lekcji {timeCount}/{LEARN_TIP_GROUP.time.length}</p>
                <br/>

                <button type="button" onClick={() => setPage('fit')} disabled={fitCount === LEARN_TIP_GROUP.fit.length}>Zdrowie</button>
                <p>Lekcji {fitCount}/{LEARN_TIP_GROUP.fit.length}</p>
            
            </>}

            {page !== null && <NewTip groupName={page} onRead={() => {
                setPage(null);
            }} />}
            
        </div>

    );
};
