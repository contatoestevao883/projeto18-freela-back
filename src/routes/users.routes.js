import { Router } from "express"
import { signIn, signUp } from "../controllers/users.controller.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { signUpSchema } from "../schemas/users.schema.js"
import { validateSignUp } from "../middlewares/users.middleware.js"

const usersRouter = Router()

usersRouter.post("/signup", validateSchema(signUpSchema), validateSignUp, signUp)
usersRouter.post("/signin", signIn)



export default usersRouter