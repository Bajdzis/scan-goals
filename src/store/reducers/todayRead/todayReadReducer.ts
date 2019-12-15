import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { readTip } from '../../actions/learn/action';
import { getTip } from '../learn/learnReducer';

export interface TodayReadState {
    today: string;
    read: boolean;
};

const INITIAL_STATE: TodayReadState = {
    today: '-',
    read: false
};

export const getToday = () => {
    const today = new Date();
    return `${today.getDay()}-${today.getMonth()}-${today.getFullYear()}`;
}

export const todayReadReducer = reducerWithInitialState<TodayReadState>(INITIAL_STATE)
    .case(readTip, (state) => ({today: getToday(), read: true}));

