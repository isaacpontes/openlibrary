import { Request, Response } from 'express'
import { User } from '../models'

export const usersController = {

    index: async (req: Request, res: Response) => {
        try {
            const users = await User.findAll()
            return res.json(users)
        } catch (error) {
            if (error instanceof Error) {
                const message = error.message
                return res.status(400).json({ message })
            }
        }
    },

    save: async (req: Request, res: Response) => {
        const { firstName, lastName, phone, birth, email, password } = req.body

        try {
            const user = await User.create({
                firstName,
                lastName,
                phone,
                birth,
                email,
                password,
                role: 'user'
            })

            return res.status(201).json(user)
        } catch (error) {
            if (error instanceof Error) {
                const message = error.message
                return res.status(400).json({ message })
            }
        }
    },

    show: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const user = await User.findByPk(id)
            return res.json(user)
        } catch (error) {
            if (error instanceof Error) {
                const message = error.message
                return res.status(400).json({ message })
            }
        }
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { firstName, lastName, phone, birth, email } = req.body

        try {
            const result = await User.update({
                firstName,
                lastName,
                phone,
                birth,
                email,
            }, {
                where: { id },
                returning: true
            })

            const user = result[1][0]

            return res.json(user)
        } catch (error) {
            if (error instanceof Error) {
                const message = error.message
                return res.status(400).json({ message })
            }
        }
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            await User.destroy({ where: { id } })
            return res.status(204).send()
        } catch (error) {
            if (error instanceof Error) {
                const message = error.message
                return res.status(400).json({ message })
            }
        }
    }
}