// import { validateFollowDB, validateNameDB } from "../respositories/follow.repository.js"

// export async function validateFollow(req, res, next) {
//     const { id } = req.params
   
//      try {
//         const following = await validateFollowDB(id)

        

//         if() return res.status(409).send({ message: "Você já segue essse usuário!" })

//         console.log(newFollower)
//         next()
 
//      } catch (err) {
//          res.status(500).send(err.message)
//      }
// }