import React from 'react';
import './EditGoal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/root';
import { editGoals } from '../../../../store/actions/goals/action';
import { Goal, GOAL_FIELDS } from '../../../../store/reducers/goals/goalsReducer';
import { getTip } from '../../../../store/reducers/learn/learnReducer';

interface EditGoalProps {
    goalIndex: number;
    onStopEdit(): void;
}

export const EditGoal: React.FC<EditGoalProps> = ({ goalIndex, onStopEdit }: EditGoalProps) => {
    const dispatch = useDispatch();
    const goal = useSelector((state: RootState) => state.goals[goalIndex]);
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const elements = Array.from(form.elements) as HTMLInputElement[];
        const fields = elements.reduce((fields, {value, name}) => {
            if (value && GOAL_FIELDS.includes(name as any)) {
                fields[name as 'name'] = value;
            }
            return fields;
        }, {} as Partial<Goal>);
        dispatch(editGoals({
            index: goalIndex,
            fields
        }));
        onStopEdit();
    };

    return (
        <div>
            <button onClick={onStopEdit}>{'<'} Wróć</button>
            <form action="" onSubmit={onSubmit}>
                <input type="text" name="name" defaultValue={goal.name}/>
                <button type="submit">Zapisz</button>
            </form>
            <h2>Przydatne wskazówki:</h2>
            {goal.tipsId.map(tipId => {
                const tip = getTip(tipId);

                return <div key={tipId}>{tip.title}</div>;
            })}
        </div>
    );
};
