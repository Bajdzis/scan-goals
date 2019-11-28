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
        <div  style={
            {
                display: 'grid',
                height: '100%',
                gridTemplateRows: 'auto 1fr'
            }
        }>
            <div>
                <h1>Mój everest</h1>
                <Quote />
            </div>
            <div  style={
                {
                    display: 'grid',
                    height: '100%',
                    gridTemplateRows: 'auto 1fr auto 1fr auto'
                }
            }>
                <div>
                    <button type="button" onClick={goToGoal}>Edytuj cele</button>
                    <p style={{ margin: 0, fontSize: '0.85em', textAlign: 'center' }}>Obecna liczba celów to <strong>{countGoal}</strong>.</p>
                </div>
                <div></div>
                <div>
                    <button type="button" onClick={goToLearn} disabled={readTipsCount === allTipsCount}>Rozwijaj się</button>
                    <p style={{ margin: 0, fontSize: '0.85em', textAlign: 'center' }}>Odkryto <strong>{readTipsCount}</strong> / {allTipsCount} porad.</p>
                </div>
                <div></div>
                <div>
                    <button type="button" className="two">Zmotywuj znajomych</button>
                    <p style={{ margin: 0, fontSize: '0.85em', textAlign: 'center' }}>Napisz do znajomych o swoich celach!</p>
                </div>
            </div>
        </div>

    );
};
