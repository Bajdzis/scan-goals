import actionCreatorFactory from 'typescript-fsa';
import { Goal } from '../../reducers/goals/goalsReducer';
 
const actionCreator = actionCreatorFactory('GOALS');

export const createNewGoals = actionCreator<string>('CREATE_NEW');

interface EditGoalsParams{
    index: number;
    fields: Partial<Goal>;
}

export const editGoals = actionCreator<EditGoalsParams>('EDIT');

