import { Router } from "express"
// import express from "express"
// const router = express.Router()

import usersRouter from "./users/users.routes.ts"

const router = Router()

// router.get("/", (_, res) => {
//     res.json({ message: "Hola desde api!" })
// })

router.use("/users", usersRouter)
router.use("/ventas", usersRouter)
router.use("/productos", usersRouter)

export default router
// export { router }