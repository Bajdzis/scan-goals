import { RootState } from "../../root";
import { getToday } from "../../reducers/todayRead/todayReadReducer";

export const isRead = (state: RootState) => {
    const currentToday = getToday();
    const {read, today} = state.todayRead;
    return today === currentToday && read;
}

