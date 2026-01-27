import { Router } from "express"

const router = Router()

router.get("/", (_, res) => {
    res.json({ message: "Usuarios route works!" })
})

router.post("/", (req, res) => {
    const body = req.body

    console.log("Body: ", body)

    res.json({ message: "Usuario creado!" })
})

export default router