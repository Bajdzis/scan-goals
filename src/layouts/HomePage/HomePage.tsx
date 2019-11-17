import React from 'react';
import './HomePage.scss';
import { useDispatch } from 'react-redux';
import { createNewGoals } from '../../store/actions/goals/action';

export const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <div>Cytat motywacyjny</div>
            <button type="button" onClick={() => {
                let title = prompt('Zapisz nazwę swojego celu');
                if (title) {
                    dispatch(createNewGoals(title));
                }
            }}>Zaplanuj cele</button>
            <button type="button">Rozwijaj się</button>
            <button type="button">Zmotywuj znajomych</button>
        </div>

    );
};
