import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createNewGoals, editGoals, assignTipToGoals } from '../../actions/goals/action';

export interface Goal {
    name: string;
    tipsId: string[];
}

export type GoalField = keyof Goal;

export const GOAL_FIELDS: GoalField[] = ['name'];

export type GoalsState = Goal[];

export const goalsReducer = reducerWithInitialState<GoalsState>([])
    .case(createNewGoals, (state, name) => [...state, { name, tipsId: [] }])
    .case(assignTipToGoals, (state, {index, tipId}) => {
        const newState = [...state];
        newState[index].tipsId.push(tipId);
        return newState;
    })
    .case(editGoals, (state, {fields, index}) => {
        const newState = [...state];

        newState[index] = {
            ...state[index],
            ...fields
        };
        return newState;
    });
