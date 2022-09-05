import { BaseDatabase } from "./BaseDatabase";
import { band, Band } from "../model/Band";
import { BaseError } from "../error/BaseError";

export class BandDatabase extends BaseDatabase {
    private static TABLE_NAME = "LAMA_BANDS";

    public async createBand(band: band): Promise<void> {
        try {
            await this.getConnection()
                .insert({
                    id: band.id,
                    name: band.name,
                    music_genre: band.musicGenre,
                    responsible: band.responsible
                }).into(BandDatabase.TABLE_NAME)
        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message)
        }
    }

    public async getBandById(id: string): Promise<Band> {
        try {
            const [result] = await this.getConnection()
                .select("id", "name", "music_genre", "responsible")
                .where({ id })
                .into(BandDatabase.TABLE_NAME)
            return result

        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message)
        }
    }
}