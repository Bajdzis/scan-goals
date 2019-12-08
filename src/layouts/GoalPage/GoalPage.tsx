import React, { useState } from 'react';
import './GoalPage.scss';
import { GoalList } from '../../components/GoalList/GoalList';
import { useGoalCreator } from '../../hooks/useGoalCreator';
import { usePageRoute } from '../../hooks/usePageRoute';
import { EditGoal } from './components/EditGoal/EditGoal';
import { Header } from '../../components/Header/Header';
import { StickyScroll } from '../../components/StickyScroll/StickyScroll';
import { StickyItem } from '../../components/StickyItem/StickyItem';

export const GoalPage: React.FC = () => {
    const createGoal = useGoalCreator();
    const goToHome = usePageRoute('home');
    const [editIndex, setEditIndex] = useState<number | null>(null);

    if(editIndex !== null){
        return <EditGoal goalIndex={editIndex} onStopEdit={() => setEditIndex(null)}/>;
    }
    return (
        <div style={
            {
                display: 'grid',
                height: '100%',
                gridTemplateRows: 'auto 1fr'
            }
        }>
            <Header onClickBack={goToHome}>
                Twoje cele
            </Header>
            <StickyScroll>
                <p>Kliknij w nazwe celu aby go przeglądać lub edytować.</p>
                <GoalList onClick={index => setEditIndex(index)}/>

                <StickyItem bottom={0}>
                    <button type="button" onClick={createGoal}>Dodaj nowy cel</button>
                </StickyItem>
            </StickyScroll>
        </div>
    );
};
