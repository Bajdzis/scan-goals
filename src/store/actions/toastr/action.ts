import actionCreatorFactory from 'typescript-fsa';
 
const actionCreator = actionCreatorFactory('TOASTR');

export const addToastr = actionCreator<{ type: 'success'|'error'|'warning'|'info', message: string, time?: number}>('ADD_TOASTR');
export const deleteToastr = actionCreator<number>('DELETE_TOASTR');


