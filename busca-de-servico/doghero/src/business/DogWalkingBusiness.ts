import { band, BandInputDTO } from "../model/Band";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { BaseError } from "../error/BaseError";
import { MissingFieldsToComplete } from "../error/MissingFieldsToComplete";
import { BandRepository } from "./BandRepository";
import { invalidAuthenticatorData, invalidToken } from "../error/AutenticatorError";


export class BandBusiness {
    constructor(private bandDatabase: BandRepository) { }

    async createBand(input: BandInputDTO, token: string) {
        try {

            const { name, musicGenre, responsible } = input

            if (!token) {
                throw new BaseError(400, "Token not found!");
            }

            if (!name || !musicGenre || !responsible) {
                throw new MissingFieldsToComplete();
            }

            const authenticator = new Authenticator();

            const getAuthData = authenticator.getData(token)

            if (!getAuthData) {
                throw new BaseError(400, "Token not found!");
            }
            if (getAuthData.role !== "ADMIN") {
                throw new BaseError(401, "Unauthorized user!");
            }

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const newBand: band = {
                id: id,
                name,
                musicGenre,
                responsible
            }

            await this.bandDatabase.createBand(newBand)

        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message);
        }
    }

    async getBandById(id: string, token: string) {
        try {

            if (!token) {
                throw new invalidToken()
            }

            const authenticatorData = new Authenticator().getTokenData(token)

            if (!authenticatorData.id) {
                throw new invalidAuthenticatorData()
            }

            const band = await this.bandDatabase.getBandById(id)

            if (!band) {
                throw new BaseError(404, "Has no band")
            }

            return band

        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message);
        }
    }


}