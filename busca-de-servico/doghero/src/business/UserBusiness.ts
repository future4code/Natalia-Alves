import { UserInputDTO, LoginInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { BaseError } from "../error/BaseError";
import { MissingFieldsToComplete } from "../error/MissingFieldsToComplete";
import { invalidEmail, invalidPasswordCreate } from "../error/UserError";

export class UserBusiness {

    async createUser(user: UserInputDTO) {
        try {

            if (!user.name || !user.email || !user.password || !user.role) {
                throw new MissingFieldsToComplete();
            }

            if (!user.email.includes("@")) {
                throw new invalidEmail();
            }

            if (user.password.length < 6) {
                throw new invalidPasswordCreate();
            }

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const hashManager = new HashManager();
            const hashPassword = await hashManager.hash(user.password);

            const userDatabase = new UserDatabase();
            await userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);

            const authenticator = new Authenticator();
            const accessToken = authenticator.generateToken({ id, role: user.role });

            return accessToken;

        } catch (error: any) {
            throw new BaseError(error.statusCode, error.sqlMessage || error.message);
        }


    }

    async getUserByEmail(user: LoginInputDTO) {

        if (!user.email || !user.password) {
            throw new MissingFieldsToComplete();
        }

        if (!user.email.includes("@")) {
            throw new invalidEmail();
        }

        const userDatabase = new UserDatabase();
        const userFromDB = await userDatabase.getUserByEmail(user.email);

        const hashManager = new HashManager();
        const hashCompare = await hashManager.compare(user.password, userFromDB.getPassword());

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }
}