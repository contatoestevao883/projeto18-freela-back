import { db } from "../database/database.connection.js"
import bcrypt from "bcrypt"

export async function signUpDB(body) {
    const { email, name, profilePicture, biography, password } = body
    
    const hash = bcrypt.hashSync(password, 10)

    const result = await db.query(`
                    INSERT INTO "users" (name, email, "profilePicture", biography, password) 
                        VALUES  ($1, $2, $3, $4, $5)`, 
                        [name, email, profilePicture, biography, hash])
    return result
}

export async function validateEmailDB(body) {

    const emailValidation = await db.query(`SELECT * FROM users WHERE email=$1`, [body])
    return emailValidation
}

export async function signInDB() {

}