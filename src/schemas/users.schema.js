import joi from "joi"

export const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    profilePicture: joi.string().uri().required(),
    biography: joi.string().required(),
    password: joi.string().min(8).required(),
    confirmPassword: joi.string().valid(joi.ref('password')).required(),
 })

export const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
 })