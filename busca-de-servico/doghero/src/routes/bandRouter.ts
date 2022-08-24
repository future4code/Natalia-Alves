import express from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandController } from "../controller/BandController";
import { BandDatabase } from "../data/BandDatabase";


export const bandRouter = express.Router()

const bandDatabase = new BandDatabase()
const bandBusiness = new BandBusiness(bandDatabase)
const bandController = new BandController(bandBusiness);

bandRouter.post("/register", (req, res) => bandController.register(req, res))
bandRouter.get("/details/:id", (req, res) => bandController.details(req, res))