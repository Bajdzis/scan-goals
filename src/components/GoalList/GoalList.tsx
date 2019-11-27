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
        <div className="goalList" key={index} onClick={() => onClick && onClick(index)}>
            <span>{goal.name}</span>
        </div>
    )}</>;
};
