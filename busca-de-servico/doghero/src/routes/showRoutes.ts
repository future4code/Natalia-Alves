import express from "express";
import { ShowController } from "../controller/ShowController";
import { ShowDatabase } from "../data/ShowDatabase";
import { ShowBusiness } from "../business/ShowBusiness";


export const showRouter = express.Router();

const showDatabase = new ShowDatabase()
const showBusiness = new ShowBusiness(showDatabase)
const showController = new ShowController(showBusiness);

showRouter.post("/add", showController.add);
showRouter.post("/catch", showController.catch);