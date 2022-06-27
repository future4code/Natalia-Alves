import { CustomError, UserNotFoud } from "../error/customError";
import { GetOwnProfileDTO, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into("users_cookenu");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

// public editUser = async (user: EditUserInput) => {
//     try {
//       await UserDatabase.connection
//         .update({ name: user.name, nickname: user.nickname })
//         .where({ id: user.id })
//         .into("Auth_users");
//     } catch (error: any) {
//       throw new CustomError(400, error.message);
//     }
//   };

  public findUserByEmail = async (email: string):Promise<user> => {
    try {
      const result = await UserDatabase.connection("users_cookeni").where({email})
      
      if(!result.length) {
        throw new UserNotFoud()
      }

     return result[0]
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

}