import { BaseDatabase } from "./BaseDatabase";
import { show, Show, WeekDay } from "../model/Show";
import { BaseError } from "../error/BaseError";

export class ShowDatabase extends BaseDatabase {
    private static TABLE_NAME = "LAMA_SHOWS";

    public async addShowToaDay(show: show): Promise<void> {
        try {
            await this.getConnection()
                .insert({
                    id: show.id,
                    week_day: show.weekDay,
                    start_time: show.startTime,
                    end_time: show.endTime,
                    band_id: show.bandId
                }).into(ShowDatabase.TABLE_NAME)
        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message)
        }
    }

    public async getAllShowsByDate(date: WeekDay): Promise<any> {
        try {
            const [result] = await this.getConnection()
                .join("LAMA_BANDS", "LAMA_SHOWS.band_id", "LAMA_BANDS.id")
                .select("LAMA_BANDS.name", "LAMA_BANDS.music_genre")
                .from(ShowDatabase.TABLE_NAME)
                .where("LAMA_SHOWS.week_day", date)
                .orderBy("LAMA_SHOWS.start_time", "asc")

                return result

        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message)
        }
    }

    public async getShowsByHour(show: show): Promise<any>{
        try {

            const result = await this.getConnection()
                .select("*")
                .from(ShowDatabase.TABLE_NAME)
                .where({
                    'week_day': show.weekDay,
                    'start_time': show.startTime
                })
            
                return result
            
        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message)
        }
    }

}