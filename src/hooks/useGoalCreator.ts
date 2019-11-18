import { useDispatch } from 'react-redux';
import { createNewGoals } from '../store/actions/goals/action';

export function useGoalCreator(){
    const dispatch = useDispatch();

    return () => {
        let title = prompt('Zapisz nazwę swojego celu');
        if (title) {
            dispatch(createNewGoals(title));
        }
    };
}
