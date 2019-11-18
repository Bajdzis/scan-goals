import actionCreatorFactory from 'typescript-fsa';
import { PageState } from '../../reducers/page/pageReducer';
 
const actionCreator = actionCreatorFactory('PAGE');

export const goToPage = actionCreator<PageState>('GO_TO_PAGE');
