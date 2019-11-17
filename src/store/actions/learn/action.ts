import actionCreatorFactory from 'typescript-fsa';
import { string } from 'prop-types';
import { LearnGroupNames } from '../../reducers/learn/learnReducer';
 
const actionCreator = actionCreatorFactory('LEARN');

interface ReadTipParams {
    id: string;
    groupName: LearnGroupNames;
    feedback: 'good'|'bad';
}

export const readTip = actionCreator<ReadTipParams>('READ_TIP');

