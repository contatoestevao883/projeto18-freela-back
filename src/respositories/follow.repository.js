import { db } from "../database/database.connection.js"

export async function validateFollowDB(id) {
    
    const result = await db.query(`SELECT * FROM follow WHERE "userId"=$1`, [id])

    return result
}

export async function validateNameDB(id) {
    
    const result = await db.query(`SELECT * FROM sessions WHERE "userId"=$1`, [id])


    console.log(result.rows[0].following)
    
    return result
}


export async function followDB(id, token) {
    
    const idFollowing = await db.query(`SELECT * FROM sessions WHERE token=$1`, [token])

    const followingUserInfo = await db.query(`
        INSERT INTO follow ("userId", following, "followedName", "followedProfilePicture", "followedBiography")
                             VALUES ($1, $2, $3, $4, $5)                       
    `, [id, idFollowing.rows[0].userId, idFollowing.rows[0].name, idFollowing.rows[0].profilePicture, idFollowing.rows[0].biography])

    return followingUserInfo
}

export async function getFollowDB(id) {

    const getFollow = await db.query(`SELECT * FROM follow WHERE "userId"=$1`, [id])

    return getFollow
}

export async function followedByDB(id, token) {
    
    const idFollowing = await db.query(`SELECT * FROM sessions WHERE token=$1`, [token])

    const followingUserInfo = await db.query(`
        INSERT INTO "followedBy" ("userId", followed, "followerName", "followerProfilePicture", "followerBiography")
                             VALUES ($1, $2, $3, $4, $5)                       
    `, [id, idFollowing.rows[0].userId, idFollowing.rows[0].name, idFollowing.rows[0].profilePicture, idFollowing.rows[0].biography])

    return followingUserInfo
}


export async function getFollowedByDB(id) {

    const getFollow = await db.query(`SELECT * FROM "followedBy" WHERE "userId"=$1`, [id])

    return getFollow
}