import { AddressInfo } from "net";
import { WalkingDog } from "./routes/WalkingDog";



app.get("/", WalkingDog)
app.post("/walking", WalkingDog)
app.get("/show/:id", WalkingDog)
app.get("/start_walk/:id", WalkingDog)
app.get("/finish_walk/:id", WalkingDog)