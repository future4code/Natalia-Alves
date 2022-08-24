import { WeekDay, show, ShowInputDTO } from "../model/Show";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { BaseError } from "../error/BaseError";
import { MissingFieldsToComplete } from "../error/MissingFieldsToComplete";
import { BandRepository } from "./BandRepository";
import { invalidAuthenticatorData, invalidToken } from "../error/AutenticatorError";
import { ShowDatabase } from "../data/ShowDatabase";

export class ShowBusiness {
    constructor(private showDatabase: ShowDatabase) { }

    async addShowToaDay(input: ShowInputDTO, token: string) {
        try {

            const { weekDay, startTime, endTime, bandId } = input

            if (!token) {
                throw new BaseError(400, "Token not found!");
            }

            if (!weekDay || !startTime || !endTime || !bandId) {
                throw new MissingFieldsToComplete();
            }

            const authenticator = new Authenticator();

            const getAuthData = authenticator.getData(token)

            if (!getAuthData) {
                throw new BaseError(400, "Token not found!");
            }

            if (startTime < 8 && endTime > 23 && startTime > 23 && endTime < 8) {
                throw new BaseError(400, "Hours only from 8 to 23!");
            }

            if (startTime % 1 !== 0 && endTime % 1 !== 0) {
                throw new BaseError(400, "Only full hours are allowed!");
            }

            if (weekDay !== WeekDay.FRIDAY && weekDay !== WeekDay.SATURDAY && weekDay !== WeekDay.SUNDAY) {
                throw new BaseError(400, "Invalid day of the week!");
            }

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const newShow: show = {
                id: id,
                weekDay,
                startTime,
                endTime,
                bandId,
            }

            const allShows = await this.showDatabase.getShowsByHour(newShow)
            if (allShows) {
                throw new BaseError(400, "There is already a show at that hour, choose another one!");
            }

            this.showDatabase.addShowToaDay(newShow)

        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message);
        }
    }

    async getAllShowsByDate(date: WeekDay, token: string) {
        try {
            if (!token) {
                throw new BaseError(400, "Token not found!");
            }

            const authenticator = new Authenticator();
            const getAuthData = authenticator.getData(token)

            if (!getAuthData) {
                throw new BaseError(400, "Token not found!");
            }

            const show = await this.showDatabase.getAllShowsByDate(date)

            return show

        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message);
        }
    }
}