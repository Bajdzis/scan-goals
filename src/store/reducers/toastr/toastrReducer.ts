import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { addToastr, deleteToastr } from '../../actions/toastr/action';

export type Toastr = {
    type: 'success'|'error'|'warning'|'info',
    message: string;
    id: number;
}

export type ToastrState = {
    messages: Toastr[],
    incrementId: number;
};

export const toastrReducer = reducerWithInitialState<ToastrState>({
    messages: [],
    incrementId: 0,
})
    .case(addToastr, (state, {message, type}) => ({ 
        messages: [
            ...state.messages, 
            {
                id: state.incrementId++,
                message,
                type
            }
        ], 
        incrementId: state.incrementId++
    }))
    .case(deleteToastr, (state, id) => ({ 
        ...state,
        messages: state.messages.filter((message) => message.id !== id), 
    }));

