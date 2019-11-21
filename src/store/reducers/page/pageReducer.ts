import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { PAGE_NAME_TO_COMPONENT } from '../../../App';
import { goToPage } from '../../actions/page/action';

export type PageName = keyof typeof PAGE_NAME_TO_COMPONENT;

export interface PageState {
    name: PageName;
    props: {[key: string]: any};
}

export const pageReducer = reducerWithInitialState<PageState>({
    name: 'welcome',
    props: {}
})
    .case(goToPage, (state, payload) => payload);
