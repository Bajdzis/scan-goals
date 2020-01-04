import React, { useState } from 'react';
import './LearnPage.scss';
import { LearnGroupNames, LEARN_TIP_GROUP } from '../../store/reducers/learn/learnReducer';
import { NewTip, countReadTips } from './components/NewTip/NewTip';
import { usePageRoute } from '../../hooks/usePageRoute';
import { useSelector } from 'react-redux';
import { Header } from '../../components/Header/Header';
import { isRead } from '../../store/selector/todayRead/selector';

export const LearnPage: React.FC = () => {
    const goToHome = usePageRoute('home');
    const [page, setPage] = useState<LearnGroupNames|null>(null);
    const mindCount = useSelector(countReadTips('mind'));
    const timeCount = useSelector(countReadTips('time'));
    const fitCount = useSelector(countReadTips('fit'));
    const isReadToday = useSelector(isRead);

    if(page !== null) {
        return <NewTip groupName={page} onRead={() => {
            setPage(null);
        }} />;
    }
    return (
        <div className="learnPage">
            <Header onClickBack={goToHome}>
                Rozwijaj się
            </Header>
            <p>Wybierz jeden z trzech obszarów w których chciałbyś się rozwijać. Dziennie może odczytać tylko jedną wzkazówkę. Niektóre wskazówki odblokowują ukryte funkcje aplikacji!</p>
            <div className="learnPage__buttons">
 
                <button className="inline"  type="button" onClick={() => setPage('mind')} disabled={mindCount === LEARN_TIP_GROUP.mind.length || isReadToday}>
                    <svg style={{ width:'48px',height:'48px' }} viewBox="0 0 24 24">
                        <path fill="#000000" d="M12,16C12.56,16.84 13.31,17.53 14.2,18L12,20.2L9.8,18C10.69,17.53 11.45,16.84 12,16M17,11.2A2,2 0 0,0 15,13.2A2,2 0 0,0 17,15.2A2,2 0 0,0 19,13.2C19,12.09 18.1,11.2 17,11.2M7,11.2A2,2 0 0,0 5,13.2A2,2 0 0,0 7,15.2A2,2 0 0,0 9,13.2C9,12.09 8.1,11.2 7,11.2M17,8.7A4,4 0 0,1 21,12.7A4,4 0 0,1 17,16.7A4,4 0 0,1 13,12.7A4,4 0 0,1 17,8.7M7,8.7A4,4 0 0,1 11,12.7A4,4 0 0,1 7,16.7A4,4 0 0,1 3,12.7A4,4 0 0,1 7,8.7M2.24,1C4,4.7 2.73,7.46 1.55,10.2C1.19,11 1,11.83 1,12.7A6,6 0 0,0 7,18.7C7.21,18.69 7.42,18.68 7.63,18.65L10.59,21.61L12,23L13.41,21.61L16.37,18.65C16.58,18.68 16.79,18.69 17,18.7A6,6 0 0,0 23,12.7C23,11.83 22.81,11 22.45,10.2C21.27,7.46 20,4.7 21.76,1C19.12,3.06 15.36,4.69 12,4.7C8.64,4.69 4.88,3.06 2.24,1Z" />
                    </svg>
                    <br/>
                    Wiedza
                    <br/>
                    <small className="learnPage__buttonDesc">Lekcji {mindCount}/{LEARN_TIP_GROUP.mind.length}</small>
                    
                </button>

                <button className="inline" type="button" onClick={() => setPage('time')} disabled={timeCount === LEARN_TIP_GROUP.time.length || isReadToday}>
                    <svg style={{ width:'48px',height:'48px' }} viewBox="0 0 24 24">
                        <path fill="#000000" d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                    </svg>
                    <br/>
                    Czas
                    <br/>
                    <small className="learnPage__buttonDesc">Lekcji {timeCount}/{LEARN_TIP_GROUP.time.length}</small>
                </button>

                <button className="inline"  type="button" onClick={() => setPage('fit')} disabled={fitCount === LEARN_TIP_GROUP.fit.length || isReadToday}>
                    <svg style={{ width:'48px',height:'48px' }} viewBox="0 0 24 24">
                        <path fill="#000000" d="M7 7.76V16.25H11.08L11.68 15.34C12.84 13.55 14.93 12.75 16.47 12.75C17 12.75 17.45 12.84 17.79 13C18.7 13.41 18.95 14.18 19 14.74C19.08 15.87 18.5 17.03 17.5 17.71C16.6 18.33 14.44 19 11.87 19C10.12 19 7.61 18.69 5.12 17.3C5.41 14.85 6 10.88 7 7.76M7 3C4 7.09 3 18.34 3 18.34C5.9 20.31 9.08 21 11.87 21C14.86 21 17.39 20.21 18.64 19.36C21.64 17.32 21.94 12.71 18.64 11.18C18 10.89 17.26 10.75 16.47 10.75C14.17 10.75 11.5 11.96 10 14.25H9V7.09H11L12 4L7 3Z" />
                    </svg>
                    <br/>
                    Zdrowie
                    <br/>
                    <small  className="learnPage__buttonDesc">Lekcji {fitCount}/{LEARN_TIP_GROUP.fit.length}</small>
                </button>
            </div>

            {isReadToday && <div className="learnPage__alert">
                Dziś już odczytałeś swoją lekcje. 
                Ćwicz wytrwałośc i wróć jutro. 
                Regularność jest o wiele ważniejsza od ilości wykonanej pracy!
                Do zobaczenia przy porannej kawie!
            </div>}

        </div>

    );
};
