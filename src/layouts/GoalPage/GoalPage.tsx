import React, { useState } from 'react';
import './GoalPage.scss';
import { GoalList } from '../../components/GoalList/GoalList';
import { useGoalCreator } from '../../hooks/useGoalCreator';
import { usePageRoute } from '../../hooks/usePageRoute';
import { EditGoal } from './components/EditGoal/EditGoal';

export const GoalPage: React.FC = () => {
    const createGoal = useGoalCreator();
    const goToHome = usePageRoute('home');
    const [editIndex, setEditIndex] = useState<number | null>(null);

    if(editIndex !== null){
        return <EditGoal goalIndex={editIndex} onStopEdit={() => setEditIndex(null)}/>;
    }
    return (
        <div>
            <button onClick={goToHome}>{'<'} Wróć</button>
            <h1>Twoje cele</h1>
            <p>Kliknij w nazwe celu aby go przeglądać lub edytować.</p>
            <button type="button" onClick={createGoal}>Dodaj cel</button>
            <GoalList onClick={index => setEditIndex(index)}/>
        </div>
    );
};
