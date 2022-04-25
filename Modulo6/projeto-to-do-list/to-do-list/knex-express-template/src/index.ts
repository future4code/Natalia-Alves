import express, { Request, Response } from "express";
import cors from "cors";
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
    const name = req.body.name;
    const nickname = req.body.nickname;
    const email = req.body.email

    if (name == "" || nickname == "" || email == ""){
      res.status(400).send({ message: "Por favor preencha os dados"})
    }else{
      await connection ("TodoListUser").insert({
          id,
          name,
          nickname,
          email
      })
    }
        res.status(200).send({ message: "Usuário criado" });
  }catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
   }
});

app.get("/user/all", async(req: Request, res: Response): Promise<void> =>{
  try{
    const result = await connection("TodoListUser")
    res.status(200).send(result);
  }catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
}
})

app.get("/user/:id", async(req: Request, res: Response): Promise<void> =>{
  try{
    const userID = req.params.id
    const result = await connection("TodoListUser")
      .select(
        "id",
        "name",
        "nickname",
        "email"
      )
      .where({"TodoListUser.id": userID})
    res.status(200).send(result);
  }catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
}
})

app.put("/user/edit/:id", async(req:Request, res:Response): Promise<void> =>{
  try{
      const userIDUpdate = req.params.id
      const name = req.body.name
      
      const result = await connection("TodoListUser")
      .update("TodoLisUser")

    res.status(200).send({message:"Usuário atualizado com sucesso!"})
  }catch (error:any){
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
  