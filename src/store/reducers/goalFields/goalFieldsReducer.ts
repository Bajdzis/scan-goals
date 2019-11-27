import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { readTip } from '../../actions/learn/action';
import { getTip } from '../learn/learnReducer';

export type GoalFieldsState = string[];

export const goalFieldsReducer = reducerWithInitialState<GoalFieldsState>([])
    .case(readTip, (state, {id}) => [...state, ...getTip(id).unlockFields]);

