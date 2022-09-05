import { BaseDatabase } from "./BaseDatabase";
import { dogWalking , dogWalkingInputDTO } from "../model/types"

export class DogWalkingDatabase extends BaseDatabase {
    private static DOG_WALKING = "DOG_WALKING";

    public insertWalking = async (
        walking : dogWalking
    ) => {
        try {
            await this.getConnection()
                .insert({
                    id: walking.id,
                    stats: walking.stats,
                    appointment_day: walking.appointment_day,
                    price: walking.price,
                    duration: walking.duration,
                    latitude: walking.latitude,
                    longitude: walking.longitude,
                    pets: walking.pets,
                    start_time: walking.start_time,
                    end_time: walking.end_time
                }).into(DogWalkingDatabase.DOG_WALKING)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public showWalking = async (
        walking : dogWalking
    ) => {
        try {
            const result = await this.getConnection()
            .select("duration").where({ id: walking.id }).from(DogWalkingDatabase.DOG_WALKING);
    
            return result;

        } catch (error: any) {
            throw new Error (error.sqlMessage || error.message)
        }
    }

    public startWalking = async (
        walking : dogWalking
    ) => {
        try{
            const result = await this.getConnection()
            .select("start_time").where({id:walking.id}).from(DogWalkingDatabase.DOG_WALKING)
        }catch (error: any){
            throw new Error (error.sqlMessage || error.message)
        }
    }

    public finishWalking = async (
        walking:dogWalking
    ) => {
        try {
            const result = await this.getConnection()
            .select ("end_time").where({id:walking.id}).from(DogWalkingDatabase.DOG_WALKING)
            
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
        
    }

    public allWalking =async (
        walking:dogWalking
    ) => {
        try {
            const data = Date.now()
            const result = await this.getConnection()
            .select("*").where({id:walking.id}).from(DogWalkingDatabase.DOG_WALKING)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }
}

