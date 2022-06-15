import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/type";
import dotenv from "dotenv"

dotenv.config()

export class Authenticator {
  
  public generateToken(input: AuthenticationData): string {
    const expiresIn = "1min";
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn 
      }
    );
    return token;
  }

  public getTokenData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as jwt.JwtPayload
    const result: AuthenticationData = {id: payload.id}
    return result
}
}
