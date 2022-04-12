import express, { Request , Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { clients } from './data';
import { v4 as generateId } from 'uuid';

const app = express();

app.use(express.json());
app.use(cors());

app.post ('/clients', (req: Request, res: Response) => {

  const newClientName = req.body.name
  const newClientCPF = req.body.cpf
  const newClientAge = req.body.age 


  const createNewClient = {
    id: generateId(),
    name: newClientName,
    cpf: newClientCPF,
    age: newClientAge,
  }

  if (newClientAge < 18) {
    res.status(404).send("Não é possível criar conta para menor de 18 anos")
    return
  }

  console.log(createNewClient)
  clients.push(createNewClient)
  res.status(200).send("ok")
})

app.get ('/clients', (req:Request, res: Response) => {
  res.status(200).send(clients)
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });