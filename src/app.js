import express from "express"
import cors from "cors"
import usersRouter from "./routes/users.routes.js"
import postsRouter from "./routes/posts.routes.js"
import followRouter from "./routes/follow.routes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(usersRouter, postsRouter, followRouter)

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))