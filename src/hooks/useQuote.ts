import { useLearnStats } from './useLearnStats';
import { isRead } from '../store/selector/todayRead/selector';
import { useSelector } from 'react-redux';

interface Quote {
    value: string;
    author: string;
}

export function useQuote() {
    const {readTipsCount} = useLearnStats();
    const isReadToday = useSelector(isRead);
    return QUOTES[readTipsCount - (isReadToday ? 1 : 0)] || QUOTES[0];
}

const QUOTES: Quote[] = [
    {
        value: 'Sukces jest sumą małych wysiłków, powtarzanych dzień po dniu.',
        author: 'Robert Collier'
    },
    {
        value: 'Nie próbuj, rób albo nie rób, nie ma próbowania',
        author: 'Mistrz Yoda'
    },
    {
        value: 'Jeżeli chcesz uniknąć krytyki: nic nie mów, nic nie rób, bądź nikim.',
        author: 'Arystoteles'
    },
    {
        value: 'W życiu nie chodzi o to, by siebie odnaleźć. W życiu chodzi o to, aby siebie stworzyć!',
        author: 'George Bernard Shaw'
    },
    {
        value: 'Nic nie jest szczególnie trudne, jeżeli podzielisz to na małe zadania.',
        author: 'Henry Ford'
    },
    {
        value: 'Nie ma znaczenia jak wolno idziesz, tak długo jak nie przestajesz.',
        author: 'Konfucjusz'
    },
    {
        value: 'Nigdy nie rezygnuj z marzenia, tylko dlatego, że zrealizowanie go wymaga czasu. Czas i tak upłynie.',
        author: 'Earl Nightingale'
    },
    {
        value: 'Aby zer­wać z na­wykiem, wyrób so­bie in­ny, który go wymaże.',
        author: 'Mark Twain'
    },
    {
        value: 'Twój czas jest ograniczony, więc nie marnuj go na byciem kimś, kim nie jesteś.',
        author: 'Steve Jobs'
    },
    {
        value: 'Pudłujesz 100% strzałów, jeśli w ogóle ich nie wykonujesz.',
        author: 'Wayne Gretzky'
    },
    {
        value: 'Nie ma nic złego w świętowaniu sukcesu, ale ważniejsze jest wyciągnięcie nauki z porażki.',
        author: 'Bill Gates'
    },
    {
        value: 'Nie znam klucza do sukcesu, ale kluczem do porażki jest próbować zadowolić wszystkich.',
        author: 'Bill Cosby'
    },
    {
        value: 'Jeśli chcesz gdzieś dojść, najlepiej znajdź kogoś, kto już tam doszedł.',
        author: 'Robert Kiyosaki '
    },
    {
        value: 'Najtrudniejsze jest zdecydowanie się na działanie. Reszta to już tylko kwestia wytrwałości.',
        author: 'Amelia Earhart'
    },
    {
        value: 'Kiedyś – nie ma takiego dnia tygodnia.',
        author: 'Janet Dailey'
    },
    {
        value: 'Możesz zrobić wszystko, co chcesz jeśli tylko trzymasz się tego celu wystarczająco długo.',
        author: 'Helen Keller'
    }
];
