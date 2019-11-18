import React from 'react';
import './GoalPage.scss';
import { GoalList } from '../../components/GoalList/GoalList';
import { useGoalCreator } from '../../hooks/useGoalCreator';
import { usePageRoute } from '../../hooks/usePageRoute';

export const GoalPage: React.FC = () => {
    const createGoal = useGoalCreator();
    const goToHome = usePageRoute('home');

    return (
        <div>
            <button onClick={goToHome}>{'<'} Wróć</button>
            <h1>Twoje cele</h1>
            <p>Kliknij w nazwe celu aby go przeglądać lub edytować.</p>
            <button type="button" onClick={createGoal}>Dodaj cel</button>
            <GoalList/>
        </div>
    );
};
