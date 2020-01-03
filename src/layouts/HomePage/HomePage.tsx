import React from 'react';
import './HomePage.scss';
import { usePageRoute } from '../../hooks/usePageRoute';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/root';
import { useLearnStats } from '../../hooks/useLearnStats';
import { Quote } from '../../components/Quote/Quote';
import { useShare } from '../../hooks/useShare';
import { useSaveState } from '../../hooks/useSaveState';
import { StickyScroll } from '../../components/StickyScroll/StickyScroll';

export const HomePage: React.FC = () => {
    const goToLearn = usePageRoute('learn');
    const goToGoal = usePageRoute('goal');
    const countGoal = useSelector((state: RootState) => state.goals.length);
    const {allTipsCount, readTipsCount} = useLearnStats();
    const share = useShare();
    const saveState = useSaveState();
    return (
        <div  style={
            {
                display: 'grid',
                height: '100%',
                gridTemplateRows: 'auto 1fr'
            }
        }>
            <div>
                <h1>Mój everest</h1>
                <Quote />
            </div>
            <StickyScroll>
                <div  style={
                    {
                        display: 'grid',
                        gap: '16px',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: 'auto'
                    }
                }>
                    <div>
                        <button type="button" onClick={goToGoal}>
                            <svg style={{ width:'48px',height:'48px' }} viewBox="0 0 24 24">
                                <path fill="#000000" d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z" />
                            </svg>
                            <br/>
                            Moje cele
                            <br/>
                            <small >Liczba celów to <strong>{countGoal}</strong>.</small>
                        </button>
                    </div>
                    <div>
                        <button type="button" onClick={goToLearn} disabled={readTipsCount === allTipsCount}>
                            <svg style={{ width:'48px',height:'48px' }} viewBox="0 0 24 24">
                                <path fill="#000000" d="M11 23C9.9 23 9 22.1 9 21V19H15V21C15 22.1 14.1 23 13 23H11M12 3C12.28 3 12.55 3 12.81 3.05C13.42 4.22 14 6.26 14 9C14 11.1 13 16 13 16H11C11 16 10 11.1 10 9C10 6.26 10.58 4.22 11.19 3.05C11.45 3 11.72 3 12 3M12 1C11.29 1 10.61 1.09 9.95 1.26C8.78 2.83 8 5.71 8 9C8 11.28 8.38 13.37 9 16C9 17.1 9.9 18 11 18H13C14.1 18 15 17.1 15 16C15.62 13.37 16 11.28 16 9C16 5.71 15.22 2.83 14.05 1.26C13.39 1.09 12.71 1 12 1M4 8C4 11.18 5.85 15.92 8.54 17.21C8 16.21 7.61 14.67 7.34 13C6.55 11.53 6 9.62 6 8C6 6.66 6.44 5.67 7.47 4.8C7.73 3.67 8.09 2.65 8.54 1.79C5.85 3.08 4 4.82 4 8M15.46 1.79C15.91 2.65 16.27 3.67 16.53 4.8C17.56 5.67 18 6.66 18 8C18 9.62 17.45 11.53 16.66 13C16.39 14.67 16 16.21 15.46 17.21C18.15 15.92 20 11.18 20 8S18.15 3.08 15.46 1.79Z" />
                            </svg>
                            <br/>
                            Rozwijaj się
                            <br/>
                            <small >Odkryto <strong>{readTipsCount}</strong> / {allTipsCount} porad.</small>
                        </button>
                    </div>
                    <div>
                        <button type="button" onClick={saveState} style={{lineHeight: 1}}>
                            <svg style={{ width:'48px',height:'48px' }} viewBox="0 0 24 24">
                                <path fill="#000000" d="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3M19 19H5V5H16.17L19 7.83V19M12 12C10.34 12 9 13.34 9 15S10.34 18 12 18 15 16.66 15 15 13.66 12 12 12M6 6H15V10H6V6Z" />
                            </svg>
                            <br/>
                            Kopia zapasowa
                            <br/>
                            <small style={{display: 'inline-block', marginTop:'8px',fontWeight: 400, fontFamily: '\'Open Sans\', sans-serif'}}>Zapisz swoje cele do pliku</small>
                        </button>
                    </div>
                    <div>
                        <a role="button" href="https://www.facebook.com/groups/469640063985423/about/" target="_blank" rel="noopener noreferrer" style={{lineHeight: 1}}>
                            <svg style={{ width:'48px',height:'48px' }} viewBox="0 0 24 24">
                                <path fill="#000000" d="M12,5A3.5,3.5 0 0,0 8.5,8.5A3.5,3.5 0 0,0 12,12A3.5,3.5 0 0,0 15.5,8.5A3.5,3.5 0 0,0 12,5M12,7A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 12,10A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 12,7M5.5,8A2.5,2.5 0 0,0 3,10.5C3,11.44 3.53,12.25 4.29,12.68C4.65,12.88 5.06,13 5.5,13C5.94,13 6.35,12.88 6.71,12.68C7.08,12.47 7.39,12.17 7.62,11.81C6.89,10.86 6.5,9.7 6.5,8.5C6.5,8.41 6.5,8.31 6.5,8.22C6.2,8.08 5.86,8 5.5,8M18.5,8C18.14,8 17.8,8.08 17.5,8.22C17.5,8.31 17.5,8.41 17.5,8.5C17.5,9.7 17.11,10.86 16.38,11.81C16.5,12 16.63,12.15 16.78,12.3C16.94,12.45 17.1,12.58 17.29,12.68C17.65,12.88 18.06,13 18.5,13C18.94,13 19.35,12.88 19.71,12.68C20.47,12.25 21,11.44 21,10.5A2.5,2.5 0 0,0 18.5,8M12,14C9.66,14 5,15.17 5,17.5V19H19V17.5C19,15.17 14.34,14 12,14M4.71,14.55C2.78,14.78 0,15.76 0,17.5V19H3V17.07C3,16.06 3.69,15.22 4.71,14.55M19.29,14.55C20.31,15.22 21,16.06 21,17.07V19H24V17.5C24,15.76 21.22,14.78 19.29,14.55M12,16C13.53,16 15.24,16.5 16.23,17H7.77C8.76,16.5 10.47,16 12,16Z" />
                            </svg>
                            <br/>
                            Zapytaj o pomoc
                            <br/>
                            <small style={{display: 'inline-block', marginTop:'8px',fontWeight: 400, fontFamily: '\'Open Sans\', sans-serif'}}>Zapisz się do grupy na facebooku!</small>
                        </a>
                    </div>
                </div>
                {/* <div>
                    {!share && <button type="button" onClick={share} style={{lineHeight: 1, marginTop:'16px'}}>
                        Zmotywuj znajomych
                        <br/>
                        <small style={{display: 'inline-block', marginTop:'8px',fontWeight: 400, fontFamily: '\'Open Sans\', sans-serif'}}>Poleć naszą aplikacje jeśli Ci się podoba!</small>
                    </button>}
                </div> */}
            </StickyScroll>

        </div>

    );
};
