// const express = require("express")
import express from "express"
import router from "./routes/index.ts"

const port = 3001

const app = express()

app.get("/", (_, res) => {

    // const { headers } = req

    // console.log("header: ", headers)

    // // res.send("Texto de respuesta!.")

    res.json({ message: "Viva venezuela en esta mierda caballero!" })
})

app.use("/api", router)

app.listen(port, () => {
    console.log("Server running on por: "+port)
})