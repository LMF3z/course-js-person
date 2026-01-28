import type { Request, Response } from 'express'

const usersList = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

export const getAllUsersController = (_:Request, res: Response) => {
    res.json(usersList)
}

// /users/:id
export const getUserByIdController = (req:Request, res: Response) => {
    const { id } = req.params

    const user = usersList.find((user) => {
        if(user.id === Number(id) ) {
            return user
        }

        return null
    })

    if(!user) {

        res.status(404).json({ message: "Usuario no encontrado" })

        return
    }

    res.json(user)    
}