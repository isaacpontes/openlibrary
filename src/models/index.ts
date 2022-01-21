import { Author } from './author'
import { Book } from './book'
import { Category } from './category'
import { Loan } from './loan'
import { User } from './user'

Author.hasMany(Book, { foreignKey: 'authorId', as: 'books' })

Book.belongsTo(Author, { foreignKey: 'authorId', as: 'author' })
Book.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' })
Book.hasMany(Loan, { foreignKey: 'bookId', as: 'loans' })

Category.hasMany(Book, { foreignKey: 'categoryId', as: 'books' })

Loan.belongsTo(Book, { foreignKey: 'bookId', as: 'book' })
Loan.belongsTo(User, { foreignKey: 'userId', as: 'user' })

User.hasMany(Loan, { foreignKey: 'userId', as: 'loans' })

export {
    Author,
    Book,
    Category,
    Loan,
    User
}