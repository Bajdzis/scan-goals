import actionCreatorFactory from 'typescript-fsa';
 
const actionCreator = actionCreatorFactory('GOALS');

export const createNewGoals = actionCreator<string>('CREATE_NEW');

