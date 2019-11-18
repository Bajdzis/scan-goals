import React from 'react';
import './GoalList.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/root';

export const GoalList: React.FC = () => {
    const goalArray = useSelector((state: RootState) => state.goals);

    return <>{goalArray.map((goal, index) => 
        <div key={index}>
            <h2>{goal.name}</h2>
        </div>
    )}</>;
};
