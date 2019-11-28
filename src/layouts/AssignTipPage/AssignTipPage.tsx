import React, { useState } from 'react';
import './AssignTipPage.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/root';
import { assignTipToGoals } from '../../store/actions/goals/action';
import { usePageRoute } from '../../hooks/usePageRoute';

export interface AssignTipPageProps {
    tipId: string
}

export const AssignTipPage: React.FC<AssignTipPageProps> = ({ tipId }: AssignTipPageProps) => {
    const dispatch = useDispatch();
    const goToHome = usePageRoute('home');
    const goalArray = useSelector((state: RootState) => state.goals);
    const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
    const toggleSelectByIndex = (index: number) => {
        if (selectedIndex.includes(index)) {
            setSelectedIndex(selectedIndex.filter((value) => value !== index));
        } else {
            setSelectedIndex([...selectedIndex, index]);
        }
    };

    return (
        <div className="assignTipPage">
            <h2>Do których celów użyjesz zdobytą wiedzę?</h2>
            
            {goalArray.map((goal, index) => 
                <label key={index} className="assignTipPage__goal">
                    <input 
                        className="assignTipPage__input"
                        type="checkbox" 
                        onChange={() => toggleSelectByIndex(index)} 
                        checked={selectedIndex.includes(index)}
                    />
                    <span>{goal.name}</span>
                </label>
            )}

            <button onClick={() => {
                selectedIndex.forEach((index) => {
                    dispatch(assignTipToGoals({
                        index,
                        tipId
                    }));
                });
                goToHome();
            }}>
                Gotowe
            </button>
        </div>
    );
};
