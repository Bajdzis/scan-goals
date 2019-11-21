import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createNewGoals, editGoals } from '../../actions/goals/action';

export interface Goal {
    name: string;
}

export type GoalField = keyof Goal;

export const GOAL_FIELDS: GoalField[] = ['name'];

export type GoalsState = Goal[];

export const goalsReducer = reducerWithInitialState<GoalsState>([])
    .case(createNewGoals, (state, name) => [...state, { name }])
    .case(editGoals, (state, {fields, index}) => {
        const newState = [...state];

        newState[index] = {
            ...state[index],
            ...fields
        };
        return newState;
    });
