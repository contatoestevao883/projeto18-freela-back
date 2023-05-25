import { getUsersDB, signInDB, signInTokenDB, signUpDB } from "../respositories/users.repository.js"

export async function signUp (req, res) {
   
    try {
     const user = await signUpDB(req.body)

     res.locals.user = user

     res.status(201).send(req.body)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function signIn (req, res) {
   
    try {
        await signInDB(res.locals.user.name)
        const token = await signInTokenDB(res.locals.user.name)
        res.status(200).send(token.rows[0])

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getUsers (req, res) {
    const { id } = req.params
    try {
        const users = await getUsersDB(id)
        res.status(200).send(users.rows[0])

    } catch (err) {
        res.status(500).send(err.message)
    }
}