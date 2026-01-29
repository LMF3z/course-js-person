import { Router } from "express"
import { createNewUserController, getAllUsersController, getUserByIdController, getUserByNameController } from "../../controllers/users/users.controllers.ts"

const router = Router()

router.get("/", getAllUsersController)

router.get("/:id", getUserByIdController)

router.get("/search/query", getUserByNameController)

router.post("/", createNewUserController)

export default router