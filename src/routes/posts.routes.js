import { Router } from "express"
import validateSchema from "../middlewares/validateSchema.middleware.js"
import { postsSchema } from "../schemas/posts.schema.js"
import { getPosts, posts } from "../controllers/post.controllers.js"
import { validateAuth, validatePost } from "../middlewares/posts.middleware.js"

const postsRouter = Router()

postsRouter.post("/posts", validateSchema(postsSchema), validateAuth, posts)
postsRouter.get("/posts/:id", validatePost, getPosts)

export default postsRouter