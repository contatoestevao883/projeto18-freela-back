import joi from "joi"

export const postsSchema = joi.object({
    picture: joi.string().uri().required(),
    description: joi.string().required(),
 })