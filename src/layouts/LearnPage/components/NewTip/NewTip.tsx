import React from 'react';
import './NewTip.scss';
import { useDispatch, useSelector } from 'react-redux';
import { LearnGroupNames, LEARN_TIP_GROUP } from '../../../../store/reducers/learn/learnReducer';
import { RootState } from '../../../../store/root';
import { readTip } from '../../../../store/actions/learn/action';
import { goToPage } from '../../../../store/actions/page/action';
import { addToastr } from '../../../../store/actions/toastr/action';
import { StickyScroll } from '../../../../components/StickyScroll/StickyScroll';
import { TextReader } from '../../../../components/TextReader/TextReader';
import { TextPlayer } from '../../../../components/TextPlayer/TextPlayer';

interface NewTipProps {
    groupName: LearnGroupNames;
    onRead(): void;
}

const getMessageAboutField = (fields: string[]) => {
    if (fields[0] === 'delete') {
        return 'Gratulacje! Odblokowałeś możliwość usuwania celów. Zastanów się z których celów powinieneś zrezygnować aby zyskać więcej czasu!';
    }
    return 'Gratulacje! Odblokowałeś nowe pole do uzupelnienia w zakładce cele. Uzupełnij je najszybciej jak to mozliwe!'; 
};

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
            type: 'success',
            message: getMessageAboutField(tip.unlockFields)
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

            <div style={{ display: 'flex' }}>
                <h1 style={{ width: '100%' }} >{tip.title}</h1>
                <TextPlayer />
            </div>

            <StickyScroll>
                <TextReader>
                    {tip.description.map((text, index) => <p key={index} dangerouslySetInnerHTML={{
                        __html : text
                    }}/>)}
                </TextReader>
                <h3>Czy porada przyda Ci się do realizacji któregoś z celów?</h3>
                <div className="newTip__buttons">
                    <button className="good" onClick={() => onClick('good')}>Tak</button>
                    <button className="bad" onClick={() => onClick('bad')}>Nie</button>
                </div>
            </StickyScroll>
        </div>
    );
};
