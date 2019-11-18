import React from 'react';
import './HomePage.scss';
import { usePageRoute } from '../../hooks/usePageRoute';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/root';
import { useLearnStats } from '../../hooks/useLearnStats';
import { Quote } from '../../components/Quote/Quote';

export const HomePage: React.FC = () => {
    const goToLearn = usePageRoute('learn');
    const goToGoal = usePageRoute('goal');
    const countGoal = useSelector((state: RootState) => state.goals.length);
    const {allTipsCount, readTipsCount} = useLearnStats();
    return (
        <div>
            <h1>Scan goals</h1>
            <Quote />

            <button type="button" onClick={goToGoal}>Zaplanuj cele</button>
            <p>Obecna liczba celów {countGoal}</p>
            <br/>

            <button type="button" onClick={goToLearn} disabled={readTipsCount === allTipsCount}>Rozwijaj się</button>
            <p>Poznano {readTipsCount}/{allTipsCount}</p>
            <br/>

            <button type="button">Zmotywuj znajomych</button>
        </div>

    );
};
