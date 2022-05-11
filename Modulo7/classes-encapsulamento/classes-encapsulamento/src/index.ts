import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import connection from "./connection";


const app = express();

app.use(express.json());
app.use(cors());


//EXERCICIO 1 A - NO METODO RAW RECEBEMOS COMO RESPOSTA O RESULTADO DE UMA QUERY E MAIS ALGUMAS INFORMAÇÕES

// EXERCICIO 1 B

const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
