import React from 'react';
import './NewTip.scss';
import { useDispatch, useSelector } from 'react-redux';
import { LearnGroupNames, LEARN_TIP_GROUP } from '../../../../store/reducers/learn/learnReducer';
import { RootState } from '../../../../store/root';
import { readTip } from '../../../../store/actions/learn/action';
import { goToPage } from '../../../../store/actions/page/action';
import { addToastr } from '../../../../store/actions/toastr/action';
import { StickyScroll } from '../../../../components/StickyScroll/StickyScroll';

interface NewTipProps {
    groupName: LearnGroupNames;
    onRead(): void;
}

export const countReadTips = (groupName: LearnGroupNames) => (state: RootState) => {
    const group = state.learn[groupName];
    return group.badTips.length + group.goodTips.length;
};

export const NewTip: React.FC<NewTipProps> = ({ groupName, onRead }: NewTipProps) => {
    const dispatch = useDispatch();
    const count = useSelector(countReadTips(groupName));
    const tip = LEARN_TIP_GROUP[groupName][count] || null;
    if(tip === null){
        return null;
    }
    const onClick = (feedback: 'good'| 'bad') => {
        onRead();
        dispatch(readTip({
            feedback,
            groupName,
            id: tip.id
        }));
        tip.unlockFields.length && dispatch(addToastr({
            type: "success",
            message: "Gratulacje! Odblokowałeś nowe pole do uzupelnienia w zakładce cele. Uzupełnij je najszybciej jak to mozliwe!"
        }));
        feedback === 'good' && dispatch(goToPage({
            name:'assignTip',
            props: {
                tipId: tip.id
            }
        }));
    };
    return (
        <div className="newTip">
            <h1>{tip.title}</h1>
            <StickyScroll>
                {tip.description.map((text, index) => <p key={index}>{text}</p>)}
                <h3>Czy porada przyda Ci się do realizacji któregoś z celów?</h3>
                <div className="newTip__buttons">
                    <button className="good" onClick={() => onClick('good')}>Tak</button>
                    <button className="bad" onClick={() => onClick('bad')}>Nie</button>
                </div>
            </StickyScroll>
        </div>
    );
};
