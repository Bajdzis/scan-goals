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
    const goalFields = useSelector((state: RootState) => state.goalFields);
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const elements = Array.from(form.elements) as HTMLInputElement[];
        const fields = elements.reduce((fields, {value, name}) => {
            if (value && GOAL_FIELDS.includes(name as any)) {
                fields[name as 'name' | 'why'] = value;
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
                <label>
                    Nazwa
                    <input type="text" name="name" defaultValue={goal.name}/>
                </label>
                {goalFields.includes('why') && <label>
                    Co zmieni się w twoim zyciu gdy zrealizuejsz cel? Dlaczego chcesz go osiągnać?
                    <input type="text" name="why" defaultValue={goal.why}/>
                </label>}
                <button type="submit">Zapisz</button>
            </form>
            {!!goal.tipsId.length && <h2>Przydatne wskazówki:</h2>}
            {goal.tipsId.map(tipId => {
                const tip = getTip(tipId);

                return <div key={tipId}>{tip.title}</div>;
            })}
        </div>
    );
};
