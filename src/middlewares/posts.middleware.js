import { findSessionDB, getPostsDB } from "../respositories/posts.repository.js"

export async function validateAuth(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")
    if (!token) return res.sendStatus(401)

    try {
        const session = await findSessionDB(token)
        if (session.rowCount === 0) return res.sendStatus(401)
        res.locals.userId = session.rows[0].userId

        next()
    } catch (err) {
        res.status(500).send(err)
    }
}

export async function validatePost(req, res, next) {
        const { id } = req.params
    try {
        const post = await getPostsDB(id)

        if (!post.rows[0]) return res.status(404).send({ message: "Esse usuário não possuí nenhum post!" })

        next()

    } catch (err) {
        res.status(500).send(err)
    }
}