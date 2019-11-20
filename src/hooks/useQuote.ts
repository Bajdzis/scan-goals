import { useLearnStats } from './useLearnStats';

interface Quote {
    value: string;
    author: string;
}

export function useQuote() {
    const {readTipsCount} = useLearnStats();
    return QUOTES[readTipsCount] || QUOTES[0];
}


const QUOTES: Quote[] = [
    {
        value: "Sukces jest sumą małych wysiłków, powtarzanych dzień po dniu.",
        author: "Robert Collier"
    },
    {
        value: "Nie próbuj, rób albo nie rób, nie ma próbowania",
        author: "Mistrz Yoda"
    },
    {
        value: "Jeżeli chcesz uniknąć krytyki: nic nie mów, nic nie rób, bądź nikim.",
        author: "Arystoteles"
    },
    {
        value: "W życiu nie chodzi o to, by siebie odnaleźć. W życiu chodzi o to, aby siebie stworzyć!",
        author: "George Bernard Shaw"
    },
    {
        value: "Nic nie jest szczególnie trudne, jeżeli podzielisz to na małe zadania.",
        author: "Henry Ford"
    },
    {
        value: "Nie ma znaczenia jak wolno idziesz, tak długo jak nie przestajesz.",
        author: "Konfucjusz"
    },
    {
        value: "Nigdy nie rezygnuj z marzenia, tylko dlatego, że zrealizowanie go wymaga czasu. Czas i tak upłynie.",
        author: "Earl Nightingale"
    }
];
