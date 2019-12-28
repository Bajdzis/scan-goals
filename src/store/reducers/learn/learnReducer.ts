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
        title: 'Opisz dokładnie co chcesz osiągnąć',
        description: [
            'Nasze plany trudno nam zrealizować gdy nie wiemy co tak naprawde chcemy osiągnąć. Nasz cel powinien być najlepiej jak to możliwe sprecyzowany. Przykładami mało sprecyzowanych celów mogą być plany: “chcę schudnąć”, “chcę czytać więcej książek”. Obydwa przykłady nic nam nie mówią ponieważ są mało precyzyjne. Powinniśmy starać się wyznaczyć cel w taki sposób aby wiedzieć kiedy osiągniemy cel.',
            'Prawidłowo sprecyzowane cele powinny brzmieć : “chcę schudnąć 5 kg”, “chcę przeczytać 3 książki każdego miesiąca”.', 
            'Staraj nie skupiać się nad sposobem realizacji celu. Jedyne co powinieneś teraz określić to gdzie chcesz być a nie jak tam dojść.'
        ],
        unlockFields: ['specific']
    },
    'mind-3' : {
        title: 'Rozłóż plan na części',
        description: [
            'Duży skomplikowany cel może nas przerosnąć. Gdy będziemy patrzeć jak dużo nam brakuje do jego realizacji możemy czuć że nie damy rady. Przez to odległe cel mogą być trudne w realizacji. A ich realizacja często odwlekana. Aby sobie pomóc warto wyznaczyć kilka mniejszych celów.',
            'Załóżmy że chcemy schudnąć 10 kg. Warto aby pierwsza część celu była łatwa do osiągnięcia. Dlatego też możemy zacząć od 1 kg, następnie spróbować zawalczyć o 3 kg a na samym końcu zacząć realizować cel 10 kg. Dzięki temu nasz cel jest podzielony na 3 mniejsze fragmenty i możemy się skupić tylko na najbliższym aspekcie.'
        ],
        unlockFields: ['achievable']
    },
    'mind-4' : {
        title: 'Odpoczynek i nagrody też są ważne!',
        description: [
            'Aby utrzymać motywację stosuj nagrody. Nagrody należą Ci się za realizację celów oraz za mniejsze części na które podzieliłeś cel w poprzedniej wskazówce. Pamiętaj aby nagroda nie była sprzeczna z jakimkolwiek innym celem. Wpisz do każdego celu jak możesz sobie uprzyjemnić dzień gdy osiągniesz określony stopień postępu prac. '
        ],
        unlockFields: ['exciting']
    },
    'mind-5' : {
        title: 'Określ plan w czasie',
        description: [
            'Określ jak długo może Ci zająć zrealizowanie celu. Jeśli nie jesteś w stanie tego określić być może warto w pierwszej kolejności zrealizować tylko część celu. Możesz podzielić go na kilka mniejszych części a następnie zrezygnować z wykonywania niektórych z nich. Warto abyś był w stanie mniej więcej określić ile może zająć jego realizacja.'
        ],
        unlockFields: ['time']
    },
    'mind-6' : {
        title: 'Plan B',
        description: [
            'Nie zawsze mamy siłę na realizację danego zadania. Wówczas warto wykonać inne zadanie jeśli to przybliży nas do wykonania celu. Jednym z takich zadań jest używanie naszej aplikacji lecz sposobów jest dużo więcej!',
            'Gdy nie mamy siły na realizację zadań możemy obejrzeć inspirujący film o tematyce związanej z naszymi postanowieniami, przeczytać książkę lub przeglądać posty na facebook z wartościowych grup związanych z naszą branżą.',
            'Wypisz wszystkie alternatywne czynności które możesz wykonywać aby przybliżyć się do realizacji celu!'
        ],
        unlockFields: ['events']
    },
    'mind-7' : {
        title: 'Przypominajki',
        description: [
            'Często przypominaj sobie o swoich celach. Powinieneś otoczyć się materiałami i przypominajkami które pomogą Ci skupić się na określonym celu. Gdzie i w jaki sposób powinieneś umieszczać przypomnienia? Nie ma ograniczeń!',
            'Możesz ustawić hasło do komputera (np. “schudne20kg!”) oraz ustawić nową tapetę. Warto też wydrukować sobie cały nasz cel i powiesić sobie go w widocznym miejscu. Możesz powiesić go na lodówce lub obok łóżka. Dobrym miejscem jest również  lustro w łazience. Codziennie podczas mycia zębów będziemy mogli go przeczytać.'
        ],
        unlockFields: []
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
        title: 'Ogranicz dostęp do facebook oraz innych mediów',
        description: [
            'Mozliwość praktycznie nieskończonego przewijania głównej strony na facebook czy instagramie zabiera nam bardzo dużo czasu! Warto ustalić sobie limit czasowy na przeglądanie niekończących się treści.',
            'Jeśli posiadasz telefon z systemem android w ustawieniach powinieneś znaleźć zakładkę “Cyfrowa równowaga” Możesz tam zweryfikować ile czasu poświęcasz na każda z zainstalowanych aplikacji. Możesz również ustawić tak zwany minutnik który będzie pilnował Cię aby zmniejszyć ilość poświecanego czasu na konkretne aplikacji'
        ],
        unlockFields: []
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
    'time-5' : {
        title: 'Odpocznij od ciągłego myślenia',
        description: [
            'Często poświęcamy czas na powtarzanie sobie w myślach ważnych informacji lub zadań które mamy zrealizować. Zawsze mówimy sobie że przecież wszystko zapamiętamy. Jednak nie zawsze wychodzi to po naszej myśli.',
            'Warto zastosować triki metody GTD (getting things done). Jeżeli masz jakiś pomysł/ myśl którą musisz zapamiętać wyciągnij telefon i ja zapisz. Dzięki temu będziesz mógł o niej zapomnieć. Jeśli będziesz zapisywał wszystkie zadania poczujesz się bardziej zrelaksowany oraz nie będziesz tracił czasu na zadawanie pytań takich jak : “Czy na pewno pamiętałem o wszystkim?”, “Coś ja miałem zrobić?”.'
        ],
        unlockFields: []
    },
    'fit-1': {
        title: 'Rusz się!',
        description:[
            'Często popełniamy błąd i od nowego roku wybieramy się na siłownie. Często nieświadomie robimy sobie krzywde zaczynająć nasz trening bez przygotowania. Dlatego warto uświadomić sobie że nie trzeba chodzić na siłownie aby pozbyć się zbędnych kilogramów. Wystarczą nam inne formy aktywności dopasowane do nas samych.',
            'Jak wpleść wykonywanie drobnych aktywności w nasz dzień? Jest wiele sposobów które pomogą nam przygotować się na cięższe ćwiczenia. Najprostrzym sposobem jest zmiana środku transportu. Nie musimy wszędzie jeździć autem. Wybierając spacer lub rower unikniemy korków. Jeśli masz naprawde długą drogę do pracy możesz starać się parkować dalej od pracy aby przejść się kawałek :)',
            'Kolejną aktywnością są czynności domowe. Możesz zabrać się za gruntowne porządki w domu które zapewnią sporo aktywności. Również przygotowywanie własnych posiłków możemy zaliczyć do tak zwanych spontanicznych aktywności w ciągu dnia (NEAT). ',
            'Jak widzisz możliwości jest sporo. Sam pewnie znajdziesz kolejne sposoby zapewnienia sobie większej aktywności w ciągu dnia. Postaraj się już dziś dodać taką aktywność do swojego planu dnia. ',
            'Powodzenia !'
        ],
        unlockFields: []
    },
    'fit-2': {
        title: 'Eksperymentuj!',
        description: [
            'Często słyszymy o efekcie jojo oraz o dietach cud. Jeśli ktoś osiągnął super sylwetkę często pytamy jaką dietę stosował. Jednak każdy z nas powinien taką dietę stworzyć pod siebie!',
            'Nie jest to trudne! Zacznijmy od tego jak długo powinniśmy być na diecie? Biorąc pod uwage fakt że nie jesteśmy zadowoleni z swojej sylwetki powinniśmy porzucić nasz sposób odżywiania raz na zawsze! Jednak często wystarczą drobne zmiany aby nasza dieta nie dodawała nam kilogramów które zrzucimy.',
            'Każda dieta odchudzająca działa na takiej samej zasadzie. Musimy jeść mniej kalorii niż potrzebujemy. Dlatego schudnąć możemy na każdej diecie nawet jedząc czekoladę w jej trakcie. Jednak warto ograniczyć słodycze oraz tłuste potrawy w trakcie diety odchudzającej. Dzięki temu będziemy jeść dużo większe posiłki zachowując tą samą liczbę kalorii. Dlatego też nie będziemy głodni.',
            'Znajdź w sklepie google play “<a href="https://play.google.com/store/apps/details?id=pl.scan.food.twa" target="_blank">Kalkulator kalorii scanfood</a>” i zacznij zapisywać swoją obecną dietę w kalkulatorze. Nie musisz od razu przechodzić na dietę odchudzającą. Warto policzyć ile kalorii zapewnia nam nasza obecna dieta i na bieżąco wprowadzać zmiany.'
        ],
        unlockFields: []
    },
    'fit-3': {
        title: 'Rób pomiary!',
        description: [
            'Jeśli poprawnie określisz sposób mierzenia postępów masz większe szanse na zrealizowanie celu. Gdy idzie nam dobrze i widzimy efekty łatwiej nam utrzymać motywację. Gdy efektów brak możemy szybko skorygować nasze działania.',
            'W przypadku diety najlepiej sprawdza się średnia waga z całego tygodnia oraz zdjęcia naszej sylwetki. Obie metryki są dostępne za darmo w <a href="https://play.google.com/store/apps/details?id=pl.scan.food.twa" target="_blank">kalkulatorze kalorii scan food</a>. Podczas robienia zdjęć porównujących naszą sylwetkę scan-food pokaże Ci jak się ustawić w podobnej pozycji do poprzedniego zdjęcia.',
            'W przypadku innych celów naszymi metrykami może być liczba zdobytych klientów, ilość przeczytanych książek lub cokolwiek innego możliwego do zmierzenia. Zapisz w każdym swoim celu w jaki sposób możesz mierzyć postęp jego realizacji'
        ],
        unlockFields: ['measure']
    },
    'fit-4': {
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
        getTip('mind-7'),
    ],
    time:[
        getTip('time-1'),
        getTip('time-2'),
        getTip('time-3'),
        getTip('time-4'),
        getTip('time-5')
    ],
    fit: [
        getTip('fit-1'),
        getTip('fit-2'),
        getTip('fit-3'),
        getTip('fit-4'),
    ]
};
