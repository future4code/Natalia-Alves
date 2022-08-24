import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import cors from "cors";

export const app = express()

app.use(express.json());
app.use(cors())

const server = app.listen(3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });