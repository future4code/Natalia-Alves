import express, { Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { v4 as generateId } from 'uuid';
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

//Endpoint teste
app.get("/teste", (req: Request, res: Response): void =>{
    try{
        res.status(200).send({ message: "sucesso" });
    }catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
    }
});

//Endpoint criar usuário
app.post ("/user", async (req: Request, res: Response): Promise<void> =>{
  try{
    const id = generateId(); 

    await connection ("TodoListUser").insert({
      id,
      name:req.body.name,
      nickname:req.body.nickname,
      email:req.body.email
    })
        
    res.status(200).send({ message: "Usuário criado" });
  }catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
  }
});

app.get("/user", async(req: Request, res: Response): Promise<void> =>{
  try{
    const result = await connection("TodoListUser")
    res.status(200).send(result);
  }catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
}
})




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });
  