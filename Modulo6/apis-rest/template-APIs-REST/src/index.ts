import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { User, users} from './data';

// import { v4 as generateId } from 'uuid';

const app = express();

app.use(express.json());
app.use(cors());


app.get("/users", (req: Request, res: Response) =>{
    let errorCode = 400
    try{ 

    res.status(200).send(users)
    }catch(error){
        res.status(errorCode).send(error.message)
    }
})

app.get("/users", (req:Request, res:Response) => {
    let errorCode = 400
    try{
        const name: string = req.query.name as string

        const user : User  | undefined = users.find((user) => user.name === name)

    res.status(200).send(users)
    }catch(error){
        res.status(errorCode).send(error.message)
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });;