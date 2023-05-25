import { db } from "../database/database.connection.js"

export async function postsDB(body, userId) {
    const { picture, description } = body

    const result = await db.query(`INSERT INTO posts (picture, description, "userId") VALUES  ($1, $2, $3)`, [picture, description, userId])
    return result
}

export async function getPostsDB(id) {

    const result = await db.query(`SELECT * FROM posts WHERE "userId"=$1`, [id])
    return result
}

export function findSessionDB(token) {
    return db.query(`SELECT "userId" FROM sessions WHERE token=$1;`, [token])
}