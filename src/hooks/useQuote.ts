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
        value: "Nie próbuj, rób albo nie rób, nie ma próbowania",
        author: "Mistrz Yoda"
    },
    {
        value: "Jeżeli chcesz uniknąć krytyki: nic nie mów, nic nie rób, bądź nikim.",
        author: "Arystoteles"
    }
];
