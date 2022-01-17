import { Request, Response } from 'express'
import Author from '../models/author'

export const authorsController = {

    index: async (req: Request, res: Response) => {
        try {
            const authors = await Author.findAll()
            return res.json(authors)
        } catch (error) {
            if (error instanceof Error) {
                const message = error.message
                return res.status(400).json({ message })
            }
        }
    },

    save: async (req: Request, res: Response) => {
        const { name } = req.body

        try {
            const author = await Author.create({ name })
            return res.status(201).json(author)
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
            const author = await Author.findByPk(id)
            return res.json(author)
        } catch (error) {
            if (error instanceof Error) {
                const message = error.message
                return res.status(400).json({ message })
            }
        }
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name } = req.body

        try {
            const result = await Author.update({
                name
            }, {
                where: { id },
                returning: true
            })

            const author = result[1][0]

            return res.json(author)
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
            await Author.destroy({ where: { id } })
            return res.status(204).send()
        } catch (error) {
            if (error instanceof Error) {
                const message = error.message
                return res.status(400).json({ message })
            }
        }
    }
}