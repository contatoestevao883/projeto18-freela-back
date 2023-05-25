import { Router } from "express"
import { getUsers, signIn, signUp } from "../controllers/users.controller.js"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { signInSchema, signUpSchema } from "../schemas/users.schema.js"
import { validateSignIn, validateSignUp } from "../middlewares/users.middleware.js"

const usersRouter = Router()

usersRouter.post("/signup", validateSchema(signUpSchema), validateSignUp, signUp)
usersRouter.post("/signin", validateSchema(signInSchema), validateSignIn, signIn)
usersRouter.get("/users/:id", getUsers)



export default usersRouter