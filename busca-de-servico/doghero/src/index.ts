import { app } from "./app"
import { bandRouter } from "./routes/bandRouter";
import { userRouter } from "./routes/userRouter";

app.use("/user", userRouter);
app.use("/band", bandRouter)