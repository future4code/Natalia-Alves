import { show, WeekDay } from "../model/Show";

export interface ShowRepository{
    addShowToaDay(show: show): Promise<void>
    getAllShowsByDate(date: WeekDay): Promise<any>
}