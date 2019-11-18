import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { PAGE_NAME_TO_COMPONENT } from '../../../App';
import { goToPage } from '../../actions/page/action';

export type PageState = keyof typeof PAGE_NAME_TO_COMPONENT;

export const pageReducer = reducerWithInitialState<PageState>('welcome').case(goToPage, (state, payload) => payload);
