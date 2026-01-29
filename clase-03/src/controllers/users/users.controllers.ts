import type { Request, Response } from 'express'
import type { UserI } from '../../entities/users/user.entity.ts';

const usersList: UserI[] = [
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

// /users/search/query?name=Alice&id=1
export const getUserByNameController = (req:Request, res: Response) => {
    const { name, id } = req.query

    const user = usersList.find((user) => {
        if(user.name.toLowerCase() === String(name).toLowerCase()
            && user.id === Number(id)
        ) {
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

export const createNewUserController = (req:Request, res: Response) => {

    const bodyData: UserI = req.body

    console.log("Body Data: ", bodyData)

    const newId = usersList.length + 1

    bodyData.id = newId

    usersList.push(bodyData)

    res.status(201).json({ message: "Usuario creado!", data: bodyData })

}

