import React from 'react';
import './WelcomePage.scss';
import { GoalList } from '../../components/GoalList/GoalList';
import { useGoalCreator } from '../../hooks/useGoalCreator';
import { usePageRoute } from '../../hooks/usePageRoute';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/root';

export const WelcomePage: React.FC = () => {
    const countGoal = useSelector((state: RootState) => state.goals.length);
    const createGoal = useGoalCreator();
    const goToHome = usePageRoute('home');
    return (
        <div>
            <h1>Witaj w naszej aplikacji!</h1>
            <p>Na początek wypisz swoje wszystkie cele, plany, marzenia które chciałbyś zrealizować. Będziemy intensywnie nad nimi pracować abyś mógł je spełnić. Pamiętaj marzenia się nie spełniają marzenia się spełnia!</p>
            <button type="button" onClick={createGoal}> Dodaj cel</button>
            <GoalList/>
            <br/>
            <button type="button" onClick={goToHome} disabled={countGoal <= 0}> Zakończ dodawanie </button>
        </div>
    );
};
