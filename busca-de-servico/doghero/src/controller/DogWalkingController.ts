import { Request, Response } from "express";
import { DogWalkingDatabase } from "../data/DogWalkingDatabase";
import { DogWalkingBusiness } from "../business/DogWalkingBusiness"
import { dogWalking, dogWalkingInputDTO } from "../model/types";
import { InvalidData, InvalidTime, InvalidPet} from "../customErrors/customErrors"


export class DogWalkingController{
    public createWalking =async (req:Request, res:Response): Promise <void> => {
        try {
            if(req.body.pets < 1){
                throw new InvalidPet();
            }
            if(!req.body.appointment_day || !req.body.duration || !req.body.latitude || !req.body.longitude ||
                !req.body.pets || !req.body.start_time || !req.body.end_time){
                    throw new InvalidData();     
            }
            if(req.body.duration != "00:30:00" && req.body.duration != "01:00:00"){
                throw new InvalidTime(); 
            }

            const {
                appointment_day,
                duration,
                latitude,
                longitude,
                pets,
                start_time,
                end_time
            } = req.body

            const input: dogWalkingInputDTO = {
                appointment_day,
                duration,
                latitude,
                longitude,
                pets,
                start_time,
                end_time
            }

            const dogWalkingBusiness = new DogWalkingBusiness
            dogWalkingBusiness.createWalking(input)

            res.status(201).send({ message: "Hike successfully added!"})
            
        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}