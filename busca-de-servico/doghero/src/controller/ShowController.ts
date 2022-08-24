import { Request, Response } from "express";
import { ShowInputDTO, WeekDay } from "../model/Show";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { BaseError } from "../error/BaseError";


export class ShowController{
    constructor(private showBusiness: ShowBusiness) {}
    async add (req: Request, res: Response){

        const token = req.headers.authorization as string
        try {
            const input: ShowInputDTO = {
                weekDay: req.body.week_day,
                startTime: req.body.start_time,
                endTime: req.body.end_time,
                bandId: req.body.band_id
            }

            await this.showBusiness.addShowToaDay(input, token)
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
        await BaseDatabase.destroyConnection();
    }

    async catch (req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string

            let date = req.query.week_day as WeekDay

                if (!date){
                throw new BaseError (400, "Not Found");
            }

            const show = await this.showBusiness.getAllShowsByDate(date, token)
            res.status(200).send(show)
        } catch (error: any) {
            res.status(400).send({ error: error.message });;
        }
        
    }
}