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
    unlockFields: string[];
}

const LEARN_TIP: {[key: string]: Omit<LearnTip, 'id'>} = {
    'mind-1' : {
        title: 'Zerwij z rozmyślaniem',
        description: 'Jest tylko tu i teraz. Skończ z myśleniem o przeszłości i przyszłosci.',
        unlockFields: []
    },
    'time-1': {
        title: 'Skup się!',
        description: 'Zmiejsz ilość powiadomień',
        unlockFields: []
    },
    'time-2' : {
        title: 'Dlaczego',
        description: 'Odpowiedź sobie na jedno z najważniejszych pytań! Co dobrego stanie się w moim zyciu gdy zrealizuje okreslony cel. Warto się zastanowić dlaczego chcesz zrealizować określony cel? Aby Ci pomóc dodamy nowe pole w trybie edycji celu!',
        unlockFields: ['why']
    },
    'fit-1': {
        title: 'Rusz się!',
        description: 'Koniec z windą',
        unlockFields: []
    },
    'fit-2': {
        title: 'Rób pomiary!',
        description: 'Sprawdzaj czy Twoje działania przynoszą pożadany skutek',
        unlockFields: []
    }
};

export function getTip(id: string): LearnTip {
    if(LEARN_TIP[id]){
        return { ...LEARN_TIP[id] , id};
    }
    return {
        id: 'unknown',
        description: '',
        title: '',
        unlockFields: []
    };
}

export const LEARN_TIP_GROUP: {[key in LearnGroupNames]: LearnTip[]} = {
    mind: [
        getTip('mind-1'),
    ],
    time:[
        getTip('time-1'),
        getTip('time-2')
    ],
    fit: [
        getTip('fit-1'),
        getTip('fit-1')
    ]
};
