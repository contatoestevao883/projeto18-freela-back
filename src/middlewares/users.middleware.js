import { validateEmailDB } from "../respositories/users.repository.js"

export async function validateSignUp(req, res, next) {
    const { email } = req.body
   
     try {
        const emailExist = await validateEmailDB(email)
        
        if (emailExist.rows[0]) return res.status(409).send( {message: "E-mail já cadastrado!"})

        next()
 
     } catch (err) {
         res.status(500).send(err.message)
     }
 }