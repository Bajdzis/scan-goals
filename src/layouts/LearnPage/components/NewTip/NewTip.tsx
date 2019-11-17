import React from 'react';
import './NewTip.scss';
import { useDispatch, useSelector } from 'react-redux';
import { LearnGroupNames, LEARN_TIP } from '../../../../store/reducers/learn/learnReducer';
import { RootState } from '../../../../store/root';
import { readTip } from '../../../../store/actions/learn/action';

interface NewTipProps {
    groupName: LearnGroupNames;
    onRead(): void;
}

const countReadTips = (groupName: LearnGroupNames) => (state: RootState) => {
    const group = state.learn[groupName];
    return group.badTips.length + group.goodTips.length;
}

export const NewTip: React.FC<NewTipProps> = ({ groupName, onRead }) => {
    const dispatch = useDispatch();
    const count = useSelector(countReadTips(groupName));
    const tip = LEARN_TIP[groupName][count] || null;
    if(tip === null){
        return null;
    }
    const onClick = (feedback: 'good'| 'bad') => {
        onRead();
        dispatch(readTip({
            feedback,
            groupName,
            id: tip.id
        }))
    }
    return (
        <div>
            <h1>{tip.title}</h1>
            <p>{tip.description}</p>
            <h2>Czy porada przyda Ci się do realizacji któregoś z celów?</h2>
            <button onClick={() => onClick('good')}>Tak</button>
            <button onClick={() => onClick('bad')}>Nie</button>
        </div>
    );
};
