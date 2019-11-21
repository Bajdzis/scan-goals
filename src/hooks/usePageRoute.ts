import { useDispatch } from 'react-redux';
import { PageName } from '../store/reducers/page/pageReducer';
import { goToPage } from '../store/actions/page/action';

export function usePageRoute(page: PageName){
    const dispatch = useDispatch();

    return () => {
        dispatch(goToPage({
            name: page,
            props: {}
        }));
    };
}
