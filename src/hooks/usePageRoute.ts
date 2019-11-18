import { useDispatch } from 'react-redux';
import { PageState } from '../store/reducers/page/pageReducer';
import { goToPage } from '../store/actions/page/action';

export function usePageRoute(page: PageState){
    const dispatch = useDispatch();

    return () => {
        dispatch(goToPage(page));
    };
}
