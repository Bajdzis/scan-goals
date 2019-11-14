import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { createNewGoals } from '../../actions/goals/action';

export interface Goal {
    name: string;
}

export type GoalsState = Goal[];

export const goalsReducer = reducerWithInitialState<GoalsState>([])
    .case(createNewGoals, (state, name) => [...state, { name }]);
