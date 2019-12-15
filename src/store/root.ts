
import { combineReducers, createStore, Action } from 'redux';
import { goalsReducer, GoalsState } from './reducers/goals/goalsReducer';
import { tipsReducer, TipsState } from './reducers/tips/tipsReducer';
import { LearnState, learnReducer } from './reducers/learn/learnReducer';
import { PageState, pageReducer } from './reducers/page/pageReducer';
import { goalFieldsReducer, GoalFieldsState } from './reducers/goalFields/goalFieldsReducer';
import { ToastrState, toastrReducer } from './reducers/toastr/toastrReducer';
import { TodayReadState, todayReadReducer } from './reducers/todayRead/todayReadReducer';

export interface RootState {
    goals: GoalsState,
    tips: TipsState,
    learn: LearnState,
    page: PageState,
    goalFields: GoalFieldsState,
    toastr: ToastrState,
    todayRead: TodayReadState
}

const rootReducer = combineReducers({
    goals: goalsReducer, 
    tips: tipsReducer, 
    learn: learnReducer,
    page: pageReducer,
    goalFields: goalFieldsReducer,
    toastr: toastrReducer,
    todayRead: todayReadReducer,
});

const initialState: RootState = JSON.parse(window.localStorage.getItem('state') || '{}') as RootState;

// @ts-ignore
export const store = createStore<RootState, Action, unknown, unknown>(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    const state = store.getState();
    window.localStorage.setItem('state', JSON.stringify(state));
});
