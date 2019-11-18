import { LEARN_TIP } from '../store/reducers/learn/learnReducer';
import { useSelector } from 'react-redux';
import { countReadTips } from '../layouts/LearnPage/components/NewTip/NewTip';

export function useLearnStats(){
    const mindCount = useSelector(countReadTips('mind'));
    const timeCount = useSelector(countReadTips('time'));
    const fitCount = useSelector(countReadTips('fit'));

    const allTipsCount = LEARN_TIP.mind.length + LEARN_TIP.time.length + LEARN_TIP.fit.length;

    return {
        allTipsCount,
        readTipsCount: mindCount + timeCount + fitCount
    };
}
