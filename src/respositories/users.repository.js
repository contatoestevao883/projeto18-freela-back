import { db } from "../database/database.connection.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

export async function signUpDB(body) {
    const { email, name, profilePicture, biography, password } = body
    
    const hash = bcrypt.hashSync(password, 10)

    const result = await db.query(`
                    INSERT INTO "users" (name, email, "profilePicture", biography, password) 
                        VALUES  ($1, $2, $3, $4, $5)`, 
                        [name, email, profilePicture, biography, hash]
                        )
    return result
}

export async function validateEmailDB(email) {

    const emailValidation = await db.query(`SELECT * FROM users WHERE email=$1`, [email])
    return emailValidation
}

export async function signInDB(name) {
    const token = uuid()

    const result = await db.query(`
                    INSERT INTO sessions (token, name) 
                        VALUES ($1, $2)`,
                        [token, name]
                        )
    return result
}

export async function signInTokenDB(name) {

    const result = await db.query(`SELECT * FROM sessions WHERE name=$1`, [name])
    return result
}


export async function validateUserDB(body) {

    const checkUser = await db.query(`SELECT * FROM users WHERE email=$1`, [body])

    
    return checkUser
}

export async function validatePasswordDB(password, userPassword ) {

    const checkPassword = bcrypt.compareSync(password, userPassword)
    return checkPassword

}

export async function getUsersDB(id) {

    const result = await db.query(`SELECT * FROM posts WHERE "userId"=$1`, [id])
    return result
}
