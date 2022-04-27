import express, {Request, Response} from "express"
import cors from "cors"
import {  pirates } from "./data"


const app = express ()

app.use(express.json())
app.use(cors())

app.get("/", (request: Request, response: Response) => {
    console.log("Deu certo!")       
    response.send("Hello from Express")
})

app.get("/pirates", (request: Request, response: Response) => {
    const piratesMap = pirates.map((pirate) => pirate)

    response.send(piratesMap)
})

app.get("/pirates/post", (request: Request, response: Response) => {
    const piratesMapPost = pirates.map((pirate) => pirate.post).flat(1)

    response.send(piratesMapPost)
})

app.get("/pirates/post/id", (request: Request, response: Response) => {
    const IDPosts = Number(request.query.id)
    let piratesMapPostId 
    
    pirates.forEach((pirate) => {
        if (IDPosts === pirate.id) {
            piratesMapPostId = pirate.post
        }
    })
    response.send(piratesMapPostId)
})


app.listen(3003, () => {
    console.log("Servidor tá rodando");
   });

