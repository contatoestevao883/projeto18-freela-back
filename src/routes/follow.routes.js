import { Router } from "express"
import { follow, followedBy, getFollow, getFollowedBy } from "../controllers/follow.controller.js"
import { validateAuth } from "../middlewares/posts.middleware.js"

const followRouter = Router()

followRouter.post("/follow/:id", validateAuth, follow)
followRouter.get("/follow/:id", getFollow)
followRouter.post("/followed/:id", followedBy)
followRouter.get("/followed/:id", getFollowedBy)
export default followRouter