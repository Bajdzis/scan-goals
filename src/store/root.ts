
import { combineReducers, createStore, Action } from 'redux';
import { goalsReducer, GoalsState } from './reducers/goals/goalsReducer';
import { tipsReducer, TipsState } from './reducers/tips/tipsReducer';

interface RootState {
    goals: GoalsState,
    tips: TipsState
}

const rootReducer = combineReducers({goals: goalsReducer, tips: tipsReducer});

const initialState: RootState = JSON.parse(window.localStorage.getItem('state') || '{}') as RootState;

// @ts-ignore
export const store = createStore<RootState, Action, unknown, unknown>(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    const state = store.getState();
    window.localStorage.setItem('state', JSON.stringify(state));
});