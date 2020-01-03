import React from 'react';
import './WelcomePage.scss';
import { GoalList } from '../../components/GoalList/GoalList';
import { useGoalCreator } from '../../hooks/useGoalCreator';
import { usePageRoute } from '../../hooks/usePageRoute';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/root';
import { StickyScroll } from '../../components/StickyScroll/StickyScroll';
import { StickyItem } from '../../components/StickyItem/StickyItem';

export const WelcomePage: React.FC = () => {
    const countGoal = useSelector((state: RootState) => state.goals.length);
    const createGoal = useGoalCreator();
    const goToHome = usePageRoute('home');
    return (
        <div style={
            {
                display: 'grid',
                height: '100%',
                gridTemplateRows: 'auto 1fr'
            }
        }>
            <h1>Witaj w naszej aplikacji!</h1>
            <StickyScroll>
                <p>
                    Na początek wypisz swoje wszystkie cele, plany, marzenia które chciałbyś zrealizować. Będziemy intensywnie nad nimi pracować abyś mógł je spełnić. Zapisz także bardzo odległe cele, być może uda się je spełnić 
                    <span role="img" aria-label="">😉</span>
                    Jeśli zapomnisz wpisać teraz celu mozna go dodać później :)
                </p>

                <StickyItem top={0}>
                    <button type="button" onClick={createGoal}>Dodaj cel lub postanownie</button>
                </StickyItem>

                <GoalList/>

                <div style={{height:"50vh"}}></div>

                <StickyItem bottom={0}>
                    <button type="button" className="two" onClick={() => {
                        if(countGoal <= 0) {
                            return alert('Dodaj przynajmniej jeden cel nad którym możesz pracować!');
                        }
                        goToHome();
                    }}>
                        Zakończ dodawanie
                    </button>
                </StickyItem>
            </StickyScroll>
        </div>
    );
};
