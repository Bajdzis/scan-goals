import React from 'react';
import './EditGoal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/root';
import { editGoals, deleteGoal } from '../../../../store/actions/goals/action';
import { Goal, GOAL_FIELDS } from '../../../../store/reducers/goals/goalsReducer';
import { getTip } from '../../../../store/reducers/learn/learnReducer';
import { Header } from '../../../../components/Header/Header';
import { StickyScroll } from '../../../../components/StickyScroll/StickyScroll';
import { StickyItem } from '../../../../components/StickyItem/StickyItem';

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
    const onClickDelete = () => {
        if (window.confirm('Czy napewno chcesz usunąć cel?')) {
            dispatch(deleteGoal(goalIndex));
            onStopEdit();
        }
    };

    return (
        <div style={
            {
                display: 'grid',
                height: '100%',
                gridTemplateRows: 'auto 1fr'
            }
        }>
            <Header onClickBack={onStopEdit}>
                Edycja celu
            </Header>
            <StickyScroll>
                <form action="" onSubmit={onSubmit}>
                    <label>
                        Nazwa
                        <input type="text" name="name" defaultValue={goal.name}/>
                    </label>
                    {goalFields.includes('why') && <label>
                        Co zmieni się w twoim zyciu gdy zrealizuejsz cel? Dlaczego chcesz go osiągnać?
                        <input type="text" name="why" defaultValue={goal.why}/>
                    </label>}

                    {goalFields.includes('specific') && <label>
                        Co chcesz osiągnąć? Po co chcesz zrealizować ten cel?
                        <input type="text" name="specific" defaultValue={goal.specific}/>
                    </label>}

                    {goalFields.includes('measure') && <label>
                        W jaki sposób chcesz mierzyć postęp? Skąd bedziesz wiedział czy idzesz do przodu?
                        <textarea name="measure" defaultValue={goal.measure}/>
                    </label>}

                    {goalFields.includes('achievable') && <label>
                        Na jakie mniejsze kroki można rozpisać twój cel?
                        <textarea name="achievable" defaultValue={goal.achievable}/>
                    </label>}

                    {goalFields.includes('time') && <label>
                        W jakim terminie powinieneś zrealizować pierwszy mniejszy krok z listy powyżej?
                        <textarea name="time" defaultValue={goal.time}/>
                    </label>}

                    {goalFields.includes('exciting') && <label>
                        Na jaki prezent sobie pozwolisz gdy spełnisz każdy mniejszy cel? 
                        <textarea name="exciting" defaultValue={goal.exciting}/>
                    </label>}

                    {goalFields.includes('events') && <label>
                        Jakie sytuacje mogą Ci przeszkodzić w realizacji celu? 
                        Jak zachowasz się gdy się pojawią?
                        <textarea name="events" defaultValue={goal.events}/>
                    </label>}

                    {goalFields.includes('delete') && <label>
                        Czy na pewno ten cel jest warty Twojej uwagi?
                        <div style={{margin: '16px 0'}}>
                            <button 
                                type="button" 
                                onClick={onClickDelete}
                                style={{background:'red',width: 'auto', color:'white'}}
                            >
                                Usuń aby zyskać czas
                            </button>
                        </div>
                    </label>}
                    
                    {goalFields.length < 7 && <div className="learnPage__alert">
                        Odczytuj codziennie wskazówki i odblokuj nowe pola do uzupełnienia.
                        Jeszcze nie odblokowałeś wszystkich pól!
                    </div>}

                    {!!goal.tipsId.length && <h2>Przydatne wskazówki:</h2>}
                    {goal.tipsId.map(tipId => {
                        const tip = getTip(tipId);
                        return <div key={tipId}>{tip.title}</div>;
                    })}
                
                    <StickyItem bottom={0} >
                        <button type="submit">Zapisz</button>
                    </StickyItem>
                </form>
            </StickyScroll>
        </div>
    );
};
