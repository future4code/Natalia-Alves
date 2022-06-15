import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, UserInputDTO, LoginInputDTO } from "../model/user";

export class UserController {

      public createUser = async (req: Request, res: Response) => {
        try {
          // Item b. Validação do email
          if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
          }

          // Item c. Validação da senha
          if (!req.body.password || req.body.password.length < 6) {
          throw new Error("Invalid password");
          }

          const { name, nickname, email, password } = req.body;
    
          const input: UserInputDTO = {
            name,
            nickname,
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          userBusiness.createUser(input);
    
          res.status(201).send({ message: "Usuário criado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public login = async (req: Request, res: Response):Promise<void> => {
        try {
          // Item b. Validação do email
          if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
          }


          const { email, password } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.login(input);
    
          res.status(200).send({ message: "Usuário logado!", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 

      public editUser = async (req: Request, res: Response) => {
        try {
          
          const input: EditUserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            token: req.headers.authorization!
          };

          const userBusiness = new UserBusiness()
          userBusiness.editUser(input);
    
          res.status(201).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
 



}
