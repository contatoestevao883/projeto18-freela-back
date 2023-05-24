import { signUpDB } from "../respositories/users.repository.js"

export async function signUp (req, res) {
   
    try {
     await signUpDB(req.body)
     res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function signIn (req, res) {
   
    try {
    

    } catch (err) {
        res.status(500).send(err.message)
    }
}