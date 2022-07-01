import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";
import {
  UserInputDTO,
  user,
  GetOwnProfileDTO,
  LoginInputDTO,
} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/generateID";

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (password.length<6){
        throw new InvalidPassword();
      }

      const id: string = generateId();

      const user: user = {
        id,
        name,
        email,
        password,
      };
      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({ id });

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos "email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const userDatabase = new UserDatabase();
      const user = await userDatabase.findUserByEmail(email);

      if( password !== user.password){
        throw new InvalidPassword()
      }

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({id: user.id})

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  // public getOwnProfile = async (input: GetOwnProfileDTO): Promise<void> => {
  //   try {
  //     const { name, token } = input;

  //     if (!name || !token) {
  //       throw new CustomError(
  //         400,
  //         'Preencha os campos "token", "name" e "nickname"'
  //       );
  //     }

  //     if (name.length < 4) {
  //       throw new InvalidName();
  //     }

  //     const authenticator = new Authenticator()
  //     const payload = authenticator.getTokenData(token)

  //     if(!payload.id) {
  //       throw new CustomError(401, "Usuário não autorizado")
  //     }

  //     const editUserInput: EditUserInput = {
  //       id: payload.id,
  //       name,
  //     };

  //     const userDatabase = new UserDatabase();
  //     await userDatabase.editUser(editUserInput);
  //   } catch (error: any) {
  //     throw new CustomError(400, error.message);
  //   }
  // };
}
