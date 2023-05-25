import { getUsersDB, validateEmailDB, validatePasswordDB, validateUserDB } from "../respositories/users.repository.js"

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

 export async function validateSignIn(req, res, next) {
    const { email, password } = req.body
   
     try {
        const user = await validateUserDB(email)
        
        res.locals.user = user.rows[0]

        if (!user.rows[0]) return res.status(401).send({ messsage: "Usuário ou senha não encontrados!"})

        const checkPassword = await validatePasswordDB(password, user.rows[0].password)
        if (!checkPassword) return res.status(401).send({ messsage: "Usuário ou senha não encontrados!"})

        next()
 
     } catch (err) {
         res.status(500).send(err.message)
     }
 }


export async function validateUser(req, res, next) {
    const { id } = req.params
try {
    const user = await getUsersDB(id)

    if (!user.rows[0]) return res.status(404).send({ message: "Esse usuário não existe!" })

    next()

} catch (err) {
    res.status(500).send(err)
}
}