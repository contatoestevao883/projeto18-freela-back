import { followDB, followedByDB, getFollowDB, getFollowedByDB } from "../respositories/follow.repository.js"

export async function follow (req, res) {
    const { id } = req.params
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "") 

    try {
        const follow = await followDB(id, token)
   
        res.status(200).send(follow.rows)
   
       } catch (err) {
           res.status(500).send(err.message)
       }   
}

export async function getFollow (req, res) {
    const { id } = req.params
    try {
        const follow = await getFollowDB(id)
   
        res.status(200).send(follow.rows)
   
       } catch (err) {
           res.status(500).send(err.message)
       }   
}

export async function followedBy (req, res) {
    const { id } = req.params
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "") 

    try {
        const follow = await followedByDB(id, token)
   
        res.status(200).send(follow.rows)
   
       } catch (err) {
           res.status(500).send(err.message)
       }   
}

export async function getFollowedBy (req, res) {
    const { id } = req.params
    try {

        const follow = await getFollowedByDB(id)
   
        res.status(200).send(follow.rows)
        
       } catch (err) {
           res.status(500).send(err.message)
       }   
}



