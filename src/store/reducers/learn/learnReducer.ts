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
    'mind-2' : {
        title: 'Opisz dokłanie co chcesz osiagnać',
        description: [
            'Staraj nie skupiać się nad sposobem realizacji celu.'
        ],
        unlockFields: ['specific']
    },
    'mind-3' : {
        title: 'Rozłóż plan w czasie',
        description: [
            'Podziel plan ma kilka mniejszych fragmentów.'
        ],
        unlockFields: ['achievable']
    },
    'mind-4' : {
        title: 'Określ plan w czasie',
        description: [
            ''
        ],
        unlockFields: ['time']
    },
    'mind-5' : {
        title: 'Odpoczynek i nagrody też są ważne!',
        description: [
            ''
        ],
        unlockFields: ['exciting']
    },
    'mind-6' : {
        title: 'Plan B',
        description: [
            'Nie zawsze mamy siłę na realizację danego zadania. Wówczas warto wykonać inne zadanie jeśli to przybliży nas do wykonania celu.'
        ],
        unlockFields: ['events']
    },
    'time-1': {
        title: 'Skup się!',
        description: [
            'Często jesteśmy zalatani i wszystko robimy równocześnie. W naszym otoczeniu posiadamy też mnóstwo rozpraszaczy i często nad nimi nie panujemy. Warto wyrobić sobie nawyk pracy w skupieniu i zawalczyć o mniejszą ilość rozpraszających elementów w ciągu naszego dnia.',
            'W pierwszej kolejności powinniśmy się zająć powiadomieniami które dostajemy na naszym telefonie. Bardzo często powiadomienia nas zasypują i rozpraszają gdy tego nie potrzebujemy. W ustawieniach systemu android możesz w wygodny sposób  zmienić ustawienia powiadomień dla każdej aplikacji.',
            'Gdy mamy już z głowy powiadomienia warto zająć się adresem e-mail. Zacznijmy od SPAMu jest to problem który nas niepotrzebnie angażuje dlatego warto założyć swoja skrzynke pocztową w firmach które nie świadczą usług wysyłania reklam poprzez e-mail. Jeśli spam dotyczy nas w małym stopniu być może warto wypisać się z niektórych newsletterów?',
            'Ostatnim punktem który zalecamy zrobić jest skonfigurowanie powiadomień na facebooku. Facebook wysyła nam bardzo duża ilość powiadomień które nie zawsze nas interesują. Warto je ograniczyć aby nie zajmowały nam niepotrzebnie czasu.'
        ],
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
            'Jeśli ktoś wysyła Ci e-mail nie oczekuje natychmiastowej odpowiedzi. W przeciwnym razie zawdzonił by do Ciebie lub napisał na czacie (facebook, slack, itd)',
            'Często tracimy czas na bez sensowne odświezanie naszej poczty sprawdzając bardzo często czy nie dostaliśmy odpowiedzi w ważnej dla nas sprawie.',
            'Zrób sobie wolne! W zależności od ilosci poczty którą dostajesz sprawdzaj i odpisuj na wszystkie e-maila codzienie lub co dwa dni.'
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
        description:[
            'Często popełniamy błąd i od nowego roku wybieramy się na siłownie. Często nieświadomie robimy sobie krzywde zaczynająć nasz trening bez przygotowania. Dlatego warto uświadomić sobie że nie trzeba chodzić na siłownie aby pozbyć się zbędnych kilogramów. Wystarczą nam inne formy aktywności dopasowane do nas samych.',
            'Jak wpleść wykonywanie drobnych aktywności nasz dzień? Jest wiele sposobów które pomogą się nam przygotować się na cięższe ćwiczenia. Najprostrzym sposobem jest zmiana środku transportu. Nie musimy wszędzie jeździć autem. Wybierając spacer lub rower unikniemy korków. Jeśli masz naprawde długą drogę do pracy możesz starać się parkować dalej od pracy aby przejść się kawałek :)',
            'Kolejną aktywnością są czynności domowe. Możesz zabrać się za gruntowne porządki w domu które zapewnią sporo aktywności. Również przygotowywanie własnych posiłków możemy zaliczyć do tak zwanych spontanicznych aktywności w ciągu dnia (NEAT). ',
            'Jak widzisz możliwości jest sporo. Sam pewnie znajdziesz kolejne sposoby zapewnienia sobie większej aktywności w ciągu dnia. Postaraj się już dziś dodać taką aktywność do swojego planu dnia. ',
            'Powodzenia !'
        ],
        unlockFields: []
    },
    'fit-2': {
        title: 'Sprawdzaj kalorycznosć!',
        description: ['Sprawdzaj czy Twoje działania przynoszą pożadany skutek'],
        unlockFields: ['measure']
    },
    'fit-3': {
        title: 'Rób pomiary!',
        description: ['Sprawdzaj czy Twoje działania przynoszą pożadany skutek'],
        unlockFields: ['measure']
    },
    'fit-4': {
        title: 'Eksperymentuj!',
        description: ['Zmieniaj diete jeśli Ci nie odpowiada, poznaj nowe smaki?'],
        unlockFields: []
    },
    'fit-5': {
        title: 'Zadbaj o jakość snu!',
        description: [
            'Nie wysypiasz się? To nie dobrze! Gdy jesteśmy zaspani jesteśmy mniej efektywni i trudniej nam realizować spontaniczną aktywność w ciągu dnia! Do tego nie zapewniamy sobie odpowiedniej regeneracji naszego organizmu. Jakość snu może wpływać na nasze efekty utrzymania wagi. Zwracaj uwagę co poprawia Twoją jakość snu a co mu przeszkadza.',
            'Warto zacząć od określenia stałej pory kładzenia się spać oraz budzenia się. Wyrobienie sobie takiego nawyku jest proste i pozwoli nam łatwiej określać kiedy powinniśmy iść spać. Warto też zadbać o zmniejszoną emisję światła niebieskiego z ekranów naszych urządzeń. Znajdź ustawienia w swoim telefonie które zmienią barwy Twojego wyświetlacza przed pójściem spać.',
            'Jeśli posiadasz sportowe smart zegarki możesz mierzyć swój sen. Kontroluj i sprawdzaj co na Ciebie działa. Często mogą pomóc odpowiednie zasłony które od izolują nas od świateł ulicznych czy wschodu słońca.'
        ],
        unlockFields: []
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
        getTip('mind-2'),
        getTip('mind-3'),
        getTip('mind-4'),
        getTip('mind-5'),
        getTip('mind-6'),
    ],
    time:[
        getTip('time-1'),
        getTip('time-2'),
        getTip('time-3'),
        getTip('time-4')
    ],
    fit: [
        getTip('fit-1'),
        getTip('fit-2'),
        getTip('fit-3'),
        getTip('fit-4'),
        getTip('fit-5'),
    ]
};
