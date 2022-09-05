import { Request, Response } from "express";
import { BandInputDTO , Band, band} from "../model/Band";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { BaseError } from "../error/BaseError";


export class BandController{
    constructor(private bandBusiness: BandBusiness) { }
    async register (req: Request, res: Response) {
        try{
            const token = req.headers.authorization as string
            const band = Band

            const input: BandInputDTO ={
                name: req.body.name,
                musicGenre: req.body.music_genre,
                responsible: req.body.resposible,
                token: token
            }

            await this.bandBusiness.createBand(input, token)

        }catch (error: any) {
            res.status(400).send({ error: error.message });
        }
        await BaseDatabase.destroyConnection();
    }

    async details(req: Request,res: Response){
        try{
            const token = req.headers.authorization as string
            const { id } = req.params

            const band = await this.bandBusiness.getBandById(id, token)

            if(!band) {
                throw new BaseError (400, "Not Found");
            }

            res.status(200).send(band)
        }catch (error: any) {
            res.status(400).send({ error: error.message });;
        }

    }
}