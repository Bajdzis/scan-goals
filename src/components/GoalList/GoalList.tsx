import React from 'react';
import './GoalList.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/root';

interface GoalListProps {
    onClick?(index: number): void;
}

export const GoalList: React.FC<GoalListProps> = ({ onClick }: GoalListProps) => {
    const goalArray = useSelector((state: RootState) => state.goals);

    return <>{goalArray.map((goal, index) => 
        <div key={index} onClick={() => onClick && onClick(index)}>
            <h2>{goal.name}</h2>
        </div>
    )}</>;
};
