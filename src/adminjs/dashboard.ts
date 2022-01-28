import AdminJs, { PageHandler } from 'adminjs'
import { Author, Book, Category, Loan, User } from '../models'

interface DashboardOptions {
    handler?: PageHandler | undefined;
    component?: string | undefined;
}

const dashboard: DashboardOptions = {
    handler: async (req, res, context) => {
        try {
            const currentAdminName = context.currentAdmin!.name
            const authors = await Author.count()
            const books = await Book.count()
            const categories = await Category.count()
            const loans = await Loan.count()
            const standardUsers = await User.count({ where: { role: 'user' } })

            res.json({
                authors,
                books,
                categories,
                loans,
                standardUsers,
                currentAdminName
            })
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
            }
        }
    },
    component: AdminJs.bundle('../adminjs/components/Dashboard')
}

export { dashboard }