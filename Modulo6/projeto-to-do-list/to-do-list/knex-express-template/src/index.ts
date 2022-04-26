import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as generateId } from 'uuid';
import connection from "./connection";
import moment from 'moment';

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

//Endpoint pegar todos os usuários
app.get("/user/all", async(req: Request, res: Response): Promise<void> =>{
  try{
    const result = await connection("TodoListUser")
    res.status(200).send(result);
  }catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
}
})

//Endpoint pegar usuário por id
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

//Endpoint editar usuário 
app.put("/user/edit/:id", async(req:Request, res:Response): Promise<void> =>{
  try{
      const userIDUpdate = req.params.id
      
      const result = await connection("TodoListUser")
      .update({
        name:req.body.name,
        nickname:req.body.nickname,
        email:req.body.email
      })
      .where({id:userIDUpdate})

    res.status(200).send({message:"Usuário atualizado com sucesso!"})
  }catch (error:any){
    res.status(500).send(error.sqlMessage || error.message);
  }
})

//Endpoint criar tarefa
app.post ("/task", async (req: Request, res: Response): Promise<any> =>{
  try{
  

    const id = generateId();
    const title = req.body.title;
    const description = req.body.description;
    const limit_date = req.body.limitDate.split("/").reverse().join("-");
    const creator_user_id = req.body.creatorUserId;

    

    if ( title == "" || description == "" || limit_date == "" || creator_user_id == ""){
      res.status(400).send({ message: "Por favor preencha os dados"})
    }else{
      let result = await connection ("TodoListTask")
      .insert({
          id,
          title,
          description,
          limit_date, 
          creator_user_id
      })
    
      res.status(200).send({message: "Tarefa criada com sucesso!"});
    }
  }catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
   }
});

//Endpoint buscar tarefa pelo id

app.get("/task/:id", async(req: Request, res: Response): Promise<void> =>{
  try{
    const taskID = req.params.id
    const result = await connection("TodoListTask")
      .innerJoin(
        "TodoListUser",
        "TodoListTask.creator_user_id",
        "TodoListUser.id"
      ).select("TodoListTask.*", "TodoListUser.nickname")
      .where({"TodoListTask.id": taskID})

    if (result.length === 0){
      throw new Error("Id não encontrado")
    }
    let formattedDate = (moment(result[0].limit_date)).format('DD-MM-YYYY')
    result[0].limit_date = formattedDate

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
  