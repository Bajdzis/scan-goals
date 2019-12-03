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
    description: string[];
    unlockFields: string[];
}

const LEARN_TIP: {[key: string]: Omit<LearnTip, 'id'>} = {
    'mind-1' : {
        title: 'Zerwij z rozmyślaniem',
        description: [
            'Często wyobrażamy sobie jak może potoczyć się przyszłość. Jednak często jest to źródło naszego niezadowolenia z obecnego stanu. Gdy nastawimy się na jedno konkretne wydarzenie czujemy się rozczarowani gdy coś pójdzie nie po naszej myśli. Staraj się działać DZIŚ aby wpłynąć na JUTRO. Myślenie o dniu jutrzejszym nie przybliży nas do celu.',
            'Przeszłość jest ważna jednak musisz pamiętać że jej nie zmienisz. Działać możesz tylko DZIŚ. Analizuj co zrobiłeś źle. Pamiętaj że dzięki popełnianym błędom stajesz się mądrzejszy i skuteczniejszy. ', 
            'Jest tylko tu i teraz. Skończ z myśleniem o przeszłości i przyszłosci.'
        ],
        unlockFields: []
    },
    'time-1': {
        title: 'Skup się!',
        description: ['Zmiejsz ilość powiadomień'],
        unlockFields: []
    },
    'time-2' : {
        title: 'Dlaczego',
        description: ['Odpowiedź sobie na jedno z najważniejszych pytań! Co dobrego stanie się w moim zyciu gdy zrealizuje okreslony cel. Warto się zastanowić dlaczego chcesz zrealizować określony cel? Aby Ci pomóc dodamy nowe pole w trybie edycji celu!'],
        unlockFields: ['why']
    },
    'time-3': {
        title: 'E-mail to poczta!',
        description: [
            'Jeśli ktoś wysyła Ci e-mail oczekuje natychmiastowej odpowiedzi. W przeciwnym razie zawdzonił by do Ciebie lub napisał na czacie (facebook, slack, itd)',
            'Często tracimy czas na bez sensowne odświezanie naszej poczty sprawdzając bardzo często czy nie dostaliśmy odpowiedzi w ważnej dla nas sprawie.',
            'Zrób sobie wolne! W zalezności od ilosci poczty którą dostajesz dziennie sprawdzaj i odpisuj na wszystkie e-maila codzienie lub co dwa dni.'
        ],
        unlockFields: []
    },
    'time-4' : {
        title: 'Sztuka priorytetów',
        description: [
            'Może szkoda czasu na jakiś cel? Czasem nie można zrobić wszystkiego na raz! Jeśli tego potrzebujesz od dziś w edycji celu bedzie widniał przycisk usuń.',
            'Pamietaj jednak aby nie rezygnować z celów które są dla nas ważne! Przycisk powinien być używany tylko jeśli zyskamy dzięki temu czas na realizacje ważniejszych celów!'
        ],
        unlockFields: ['delete']
    },
    'fit-1': {
        title: 'Rusz się!',
        description: ['Koniec z windą'],
        unlockFields: []
    },
    'fit-2': {
        title: 'Rób pomiary!',
        description: ['Sprawdzaj czy Twoje działania przynoszą pożadany skutek'],
        unlockFields: ['measure']
    }
};

export function getTip(id: string): LearnTip {
    if(LEARN_TIP[id]){
        return { ...LEARN_TIP[id] , id};
    }
    return {
        id: 'unknown',
        description: [],
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
        getTip('time-2'),
        getTip('time-3'),
        getTip('time-4')
    ],
    fit: [
        getTip('fit-1'),
        getTip('fit-1')
    ]
};
