import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { readTip } from '../../actions/learn/action';

export interface LearnGroup {
    goodTips: string[];
    badTips: string[];
}

export interface LearnState {
    mind: LearnGroup;
    time: LearnGroup;
    fit: LearnGroup;
}

export type LearnGroupNames = keyof LearnState;

const INITIAL_STATE: LearnState = {
    mind: { goodTips: [], badTips:[]},
    time: { goodTips: [], badTips:[]},
    fit: { goodTips: [], badTips:[]},
};

export const learnReducer = reducerWithInitialState<LearnState>(INITIAL_STATE)
    .case(readTip, (state, payload) => {
        return {
            ...state,
            [payload.groupName]: {
                goodTips: [...state[payload.groupName].goodTips, ...(payload.feedback === 'good' ? [payload.id] : [])],
                badTips: [...state[payload.groupName].badTips, ...(payload.feedback === 'bad' ? [payload.id] : [])]
            }
        };
    });


export interface LearnTip {
    id: string;
    title: string;
    description: string;
}

export const LEARN_TIP: {[key in LearnGroupNames]: LearnTip[]} = {
    mind: [
        {
            id: 'mind-1',
            title: 'Zerwij z rozmyślaniem',
            description: 'Jest tylko tu i teraz. Skończ z myśleniem o przeszłości i przyszłosci.'
        }
    ],
    time:[
        {
            id: 'time-1',
            title: 'Skup się!',
            description: 'Zmiejsz ilość powiadomień'
        }
    ],
    fit: [
        {
            id: 'fit-1',
            title: 'Rusz się!',
            description: 'Koniec z windą'
        },
        {
            id: 'fit-2',
            title: 'Rób pomiary!',
            description: 'Sprawdzaj czy Twoje działania przynoszą pożadany skutek'
        }
    ]
};
