import { Router } from "express"
import { getAllUsersController, getUserByIdController, getUserByNameController } from "../../controllers/users/users.controllers.ts"

const router = Router()

router.get("/", getAllUsersController)

router.get("/:id", getUserByIdController)

router.get("/search/query", getUserByNameController)

router.post("/", (req, res) => {
    const body = req.body

    console.log("Body: ", body)

    res.json({ message: "Usuario creado!" })
})

export default router