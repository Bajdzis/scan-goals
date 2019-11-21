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
        <div>
            Do których celów użyjesz zdobytą wiedzę?
            
            {goalArray.map((goal, index) => 
                <label key={index} >
                    <input 
                        type="checkbox" 
                        onChange={() => toggleSelectByIndex(index)} 
                        checked={selectedIndex.includes(index)}
                    />
                    {goal.name}
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
