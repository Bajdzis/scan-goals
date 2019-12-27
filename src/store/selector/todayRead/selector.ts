import { RootState } from '../../root';
import { getToday } from '../../reducers/todayRead/todayReadReducer';

export const isRead = (state: RootState) => {
    const currentToday = getToday();
    const {read, today} = state.todayRead;

    if (window.location.hash === '#unlock') {
        return false;
    }

    return today === currentToday && read;
}
