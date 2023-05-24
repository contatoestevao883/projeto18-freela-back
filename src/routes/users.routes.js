import { Router } from "express"
import { signIn, signUp } from "../controllers/users.controller.js"

const usersRouter = Router()

usersRouter.post("/signup", signUp)
usersRouter.post("/signin", signIn)



export default usersRouter