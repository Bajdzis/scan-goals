import React from 'react';
import './LearnPage.scss';
import { useDispatch } from 'react-redux';
import { createNewGoals } from '../../store/actions/goals/action';

export const LearnPage: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Rozwijaj się</h1>
            <p>Wybierz cidziennie jeden obszar w którym chcesz się rozwijać</p>
            <button type="button" onClick={() => {
                dispatch(createNewGoals("test"));
            }}>Zaplanuj cele</button>
            <button type="button">Rozwijaj się</button>
            <button type="button">Zmotywuj znajomych</button>
        </div>

    );
}
