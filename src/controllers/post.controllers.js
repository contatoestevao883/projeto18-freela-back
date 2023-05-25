import { getPostsDB, postsDB } from "../respositories/posts.repository.js"

export async function posts (req, res) {
    const { userId } = res.locals
    try {
     await postsDB(req.body, userId)

     res.status(201).send(req.body, userId)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getPosts (req, res) {
    const { id } = req.params
    try {
     const posts = await getPostsDB(id)

     res.status(200).send(posts.rows)

    } catch (err) {
        res.status(500).send(err.message)
    }
}